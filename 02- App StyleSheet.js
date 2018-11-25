// 02- App StyleSheet

// Import Part
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

// Component Define Part
class App extends Component {
    render() {
        return <View style={styles.container}><Text style={styles.title}>Hello</Text></View> ;
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30
    },
    container: {
        backgroundColor: 'purple'
    }
});

// Show Part
AppRegistry.registerComponent('newreactnative', () => App);
