import React from 'react';
import AppNavigator from './src/navigation/appNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
    );
};

export default App;
