# Documentation

## Usage

##### Clone the repository
##### run yarn
##### run react-native run-android / react-native run-ios

## Technologies used & libraries used

- Redux
  I have used redux for state management and also I have used the logger middleware for easier debugging and redux-saga middleware for 
- Reselect library
  I have used the reselect library in order to optimize the app and prevent it to render when it's not necessary.
- React-native-video
  Used to render de video for each asset. Since the android fullscreen was not handled by default, I also needed to use the react-native-video-controls
  and the slider from react-native-elements to handle the full screen on android platforms
- react-native-elements 
  Used both for slider and icons
- react-native-responsive-screen
  Used in order to set the dimensions of components in percentage instead of DP
- axios 
  I used axios in order to make HTTP requests
- react-navigation
  I used react-navigation for navigating inside the app.
  
## Project structure
  The project consists of a scr folder beside the android and ios ones, where I have places all the js code.
  The src folder is structed on components, screens, navigation redux and utils. Further on, each of the folders consist of smaller folders representing a feature.
  Components and Screens folders have sub folders for each component/screen containing a style file and a login file for the component/screen.
  
## Application Flow:
  The aplication uses react navigation in order to navigate between screens. The main screen is the Discovery screen consisting of
  three carousels, one for popular movies, one for popular tv shows and one for tv shows and movies by gender (family and documentary as requested)
  Clicking on an item will lead to the Item details page, which consists of several movie details and a play button. Pressing the play button will lead to the video page,
  playing the video in fullscreen. Pressing the back button will take you back to the previous page. 
  From the main page, if you press the search button, it will take you to search page, where typing something will search for a movie or tv show and pressing the 'X' icon 
  will clear the seach input.
  
## Components
  There are 4 stateless compoents
  - Card
    The card component is used for showing tv shows, movies and also the search card, having a type prop on which the style depends. 
  - Carusel
    Carousel component uses react-native-snap-carousel in order to render items of Card component type
  - VideoPlayerControls
    USed for android platforms to control de video in fullmode
  - ProgressBar
    Used for android platforms as well to replace the controls which don't work properly on fullscreen
    
## Pages
  - Discover
  - MovieDetails
  - Search
  - Video
  - Screen - used for a general screen style.
  
## Requests & Axios
  For making requests I chose axios. There is a file called axiosUtils in the utils folder in which I have made the axios xonfiguration and also a function for formatting the responses
  
## Redux & state management
  I have structured the redux part on features. Each feature has a folder consisting of following files:
  -ActionTypes where the action types are defined
  -Actions where the actions are defined. Each action return an object with the type and payload of the action
  -Reducer which receives an initial state and action and depending on the action type is changes the state.
  -Sagas which are the generators functions waiting for the certain actions to trigger 
  -Selectors used for memoization
  
## Lazi loading
   Since the request for popular movies/tv shows only query a page( first page by deafult) instead of a 'MORE' button I have implemented lazy loading when the carousel reached the end.
   So basically when the user reaches the end of the items in carousel by scolling there will be another call made with the results for the net page.
   Initially I have used the same request for both inital call and later calls, but then I have changed it into two separe requests because I needed two different loading values in 
   order not to rerender the whole carousel each time another request is made.
   
## utils/hoc
  I have made a higher order component which simply wraps the component and returns a spinner in case the results from request are still loading, otherwise it simply returns the component
  
  

