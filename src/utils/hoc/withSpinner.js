import React from 'react';
import { ActivityIndicator } from 'react-native';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <ActivityIndicator size='large'/>
    ) : (
    <WrappedComponent { ...otherProps } />
    )
}

export default WithSpinner;