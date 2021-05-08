import React, { useState, useRef, useEffect } from 'react';
import { Platform, View, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

import PlayerControls from '../../components/videoPlayerControls/VideoPlayerControls';
import ProgressBar from '../../components/progressBar/ProgressBar';
import styles from './VideoPage.styles'

const VideoPage = () => {

	const videoPlayer = useRef(null);
	const [state, setState] = useState({
		play: true,
		currentTime: 0,
		duration: 0,
		showControls: false,
	})

	useEffect(() => {
		Orientation.lockToLandscapeLeft()
		return () => {
			Orientation.lockToPortrait()
		}
	}, [])
	

	const onEnd = () => {
		setState({...state, play: false});
		videoPlayer.current.seek(0);
	  }
	
	const skipBackward = () => {
		videoPlayer.current.seek(state.currentTime - 10);
		setState({...state, currentTime: state.currentTime - 10});
	}
	
	const skipForward = () => {
		videoPlayer.current.seek(state.currentTime + 10);
		setState({...state, currentTime: state.currentTime + 10});
	}
	
	const onSeek = (data) => {
		videoPlayer.current.seek(data.seekTime);
		setState({...state, currentTime: data.seekTime});
	}
	
	const onLoadEnd = (data) => {
		setState(s => ({
		  ...s,
		  duration: data.duration,
		  currentTime: data.currentTime,
		}));
	}
	
	const onProgress = (data) => {
		setState(state => ({
		  ...state,
		  currentTime: data.currentTime,
		}));
	}
	const handlePlayButton = () => {
		  setState({...state, play: !state.play})
	 }
	const showControls = () => {
		setState({...state, showControls: !state.showControls});
	}

	return Platform.OS === 'ios' ?
	(
		<View style={styles.container}>
			<Video
				source={{ uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4' }}
				style={{ flex:1 }}
				controls={true}
				fullscreen={true}
				style={styles.video}
				resizeMode={'cover'}
				ref={videoPlayer}
			/>
		</View>
	)
	:
	(
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={showControls}>
				<View style={styles.videoContainer}>
					<Video
						ref={videoPlayer}
						source={{
						uri:
						"https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4",
						}}
						style={styles.video}
						controls={false}
						resizeMode={"contain"}
						onLoad={onLoadEnd}
						onProgress={onProgress}
						onEnd={onEnd}
						paused={!state.play}
					/>
					{state.showControls && (
						<View style={styles.controlOverlay}>
							<PlayerControls
								onPlay={handlePlayButton}
								onPause={handlePlayButton}
								playing={state.play}
								skipBackwards={skipBackward}
								skipForwards={skipForward}
							/>
						
							<ProgressBar
								currentTime={state.currentTime}
								duration={state.duration > 0 ? state.duration : 0}
								onSlideStart={handlePlayButton}
								onSlideComplete={handlePlayButton}
								onSlideCapture={onSeek}
							/>
						</View>
					)}
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default VideoPage;