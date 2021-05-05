import React from 'react';
import { View } from 'react-native';
import styles from  './Screen.styles';

export default function Screen({ children, noPadding }){
    const screenStyle = [styles.screen]
    if(noPadding) screenStyle.push(styles.noPadding)
    return(
        <View style={screenStyle}>{children}</View>
    )
}