// 05- Button

// Import
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Button} from 'react-native';

let i = 0;

// App Component
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="React Native Button!"
                    color="red"
                    onPress={this.clickHandler}
                />
                <Text style={styles.text}>For show logs, type "react-native log-android" in terminal</Text>
            </View>
        );
    }

    clickHandler() {
        console.log('Button Clicked ' + i++);
    }

}

// Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 16
    },
    text: {
        flex: 1,
        textAlignVertical: 'bottom',
        color: 'red'
    }
});

// AppRegistry
AppRegistry.registerComponent('newreactnative', () => App);
