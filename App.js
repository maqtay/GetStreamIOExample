import React, {Component} from 'react';
import { SafeAreaView } from 'react-native'
import AppContainer from './router';

export default class App extends Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <AppContainer/>
            </SafeAreaView>
        );
    }
}