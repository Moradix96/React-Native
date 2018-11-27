// 06- Bind And State

// Import
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Button} from 'react-native';

// App Component
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0
        };
        //this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="React Native Button!"
                    color="red"
                    onPress={this.clickHandler.bind(this)}
                />
                <Text>i: {this.state.i}</Text>
            </View>
        );
    }

    clickHandler() {
        this.setState({
            i: this.state.i+1
        });
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