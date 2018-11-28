// 08- FlatList and TouchableNativeFeedback

// Import
import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, StyleSheet, TouchableNativeFeedback} from 'react-native';

// App Component
class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={{marginStart: 16, marginBottom: 16, fontWeight: 'bold', fontSize: 17}}>
                    Please choose one of items:
                </Text>

                <FlatList
                    data={[
                        {key: '1', value: 'Sina Moradi'},
                        {key: '2', value: 'MoniF'},
                        {key: '3', value: 'Niklaus Mikaelson'},
                        {key: '4', value: 'Hayley Marshal'},
                        {key: '5', value: 'Freya Mikaelson'},
                        {key: '6', value: 'Finn Mikaelson'},
                        {key: '7', value: 'Elijah Mikaelson'},
                        {key: '8', value: 'Kol Mikaelson'},
                        {key: '9', value: 'Rebekah Mikaelson'},
                        {key: '10', value: 'Henrik Mikaelson'},
                        {key: '11', value: 'Hope Mikaelson'}
                    ]}
                    renderItem={({item}) =>
                        <View style={{
                            borderRadius: 4,
                            borderBottomWidth: 1,
                            borderColor: '#d6d7da'
                        }}>
                            <TouchableNativeFeedback onPress={() => {this.clickHandler(item)}}>
                                <View>
                                    <Text style={{lineHeight: 52, marginLeft: 16}}>{item.value}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    }

                />
            </View>
        );

    }

    clickHandler(item){
        // Delay is just for fun :)
        setTimeout(() => {
            alert(item.value + ' (' + item.key + ') is selected.');
        }, 500);
    }

}

// Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
});


// AppRegistry
AppRegistry.registerComponent('newreactnative', () => App);