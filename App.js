import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/appNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppNavigator />
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
