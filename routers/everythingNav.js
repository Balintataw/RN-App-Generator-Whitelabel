import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

import modules from '../modules';
import Example from '../modules/Example';

const styles = require('../themes')('App');

const appStackConfig = {};
modules.forEach(({name, Component}) => {
    if(name === 'Auth') {
        // will need to take special handling with Auth module and create an authStack
    }
    appStackConfig[name] = {
        screen: Component,
        navigationOptions: {
            drawerLabel: name,
        }
    }
});

const AuthStack = createStackNavigator({
    Landing: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Landing',
        },
    },
    SignIn: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Sign In',
        },
    },
    CreateAccount: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Create Account',
        },
    },
    ForgotPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Forgot Password',
        },
    },
    ResetPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Reset Password',
        },
    },
});

const FeedStack = createStackNavigator({
    Feed: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Feed',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});
  
const SearchStack = createStackNavigator({
    Search: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Search',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});
  
const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Discover',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

const MainTabs = createBottomTabNavigator({
    // { ...appStackConfig }
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
        },
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Search',
        },
    },
    Discover: {
        screen: DiscoverStack,
        navigationOptions: {
            tabBarLabel: 'Discover',
        },
    },
});

const SettingsStack = createStackNavigator({
    SettingsList: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Settings List',
        },
    },
    Profile: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Profile',
        },
    },
});
  
const MainDrawer = createDrawerNavigator({
    MainTabs: MainTabs,
    Settings: SettingsStack,
});

const AppModalStack = createStackNavigator(
    {
        App: MainDrawer,
        Modal: {
            screen: Example,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const App = createSwitchNavigator({
    Loading: {
        screen: Example,
    },
    Auth: {
        screen: AuthStack,
    },
    App: {
        screen: AppModalStack,
    },
});

export default createAppContainer(App);