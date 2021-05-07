import React, {useRef, useState} from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

import styles from './VideoPage.styles'

const VideoPage = () => {

	const videoPlayer = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isFullscreen, setIsFullscreen] = useState(true);


	return(
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
}

export default VideoPage;