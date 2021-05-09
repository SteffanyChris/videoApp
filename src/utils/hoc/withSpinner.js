import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../colors';

/*
 * Higher order component meant to render either an Activity Indicator in case data is still loading or the wrapped component
 */

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <ActivityIndicator size="large" color={colors.darkGray} />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
