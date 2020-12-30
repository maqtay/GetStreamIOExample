import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/LoginScreen';
import ChannelList from './screens/Main';
import ChatScreen from './screens/ChatScreen';
import UserList from './screens/UserList';
import SignUp from './screens/Signup';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Main' component={ChannelList} options={{ headerLeft: null }}/>
                <Stack.Screen name='ChatScreen' component={ChatScreen} />
                <Stack.Screen name='UserList' component={UserList}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigation;