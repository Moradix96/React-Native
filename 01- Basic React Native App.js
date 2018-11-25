// 01- Basic React Native App

// Import Part
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

// Component Define Part
class App extends Component {
    render() {
        return <View><Text>Hello</Text></View> ;
    }
}

// Show Part
AppRegistry.registerComponent('newreactnative', () => App);
