// 07 - Scheduling Timers

//Syntax:

//allows to run a function regularly with the interval between the runs.
//let timerId = setInterval(func|code, delay[, arg1, arg2...])

//allows to run a function once after the interval of time.
//let timerId = setTimeout(func|code, delay[, arg1, arg2...])

// Import
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

// App Component
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0
        };

        // repeat with the interval of 1 seconds
        let timerId = setInterval(() => {
            this.setState({
                i: this.state.i + 1
            });
        }, 1000);

        // after 10 seconds stop
        setTimeout(() => {
            clearInterval(timerId);
            alert('stop');
        }, 10000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>i: {this.state.i}</Text>
            </View>
        );
    }

}

// Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 16
    }
});

// AppRegistry
AppRegistry.registerComponent('newreactnative', () => App);