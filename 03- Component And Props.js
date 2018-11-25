// 03- Component And Props

// Import
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

// App Component
class App extends Component {
    render() {
        return (
            <View>
                <Welcome name='Sina' />
                <Welcome name='Everybody' />
            </View>
        );
    }
}

// Sub Component
class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello {this.props.name}</Text>
            </View>
        );
    }
}

// Style
const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30
    },
    container: {
        backgroundColor: 'purple',
        margin: 8
    }
});

// AppRegistry
AppRegistry.registerComponent('newreactnative', () => App);
