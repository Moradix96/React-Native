// 04- Render Map Content Dynamically

// Import
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

// Define Variables
let myArray = ['Sina', 'Everybody'];

// App Component
class App extends Component {
    render() {
        return (
            <View>
                {this.names()}
            </View>
        );
    }

    names() {
        return myArray.map((data) => {
            return (
                <Welcome name={data}/>
            )
        })
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
