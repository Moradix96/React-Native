// App.js
// First Install react-navigation : https://reactnavigation.org/docs/en/getting-started.html

import React from "react";
import {View, Text, Button, Image} from "react-native";
import {
    createStackNavigator,
    createAppContainer,
    StackActions,
    NavigationActions,
    createDrawerNavigator
} from "react-navigation";

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./spiro.png')}
                style={{width: 30, height: 30}}
            />
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerTitle: <LogoTitle/>,
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="purple"
            />
        ),
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            otherParam: 'anything you want here',
                            mess: 'Hi'
                        })
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };

    /*    static navigationOptions = {
            title: 'Details',
        };*/


    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Details Screen '{this.props.navigation.getParam('mess', 'NO-MESS')}'</Text>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />

                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

//OR createDrawerNavigator
//createStackNavigator
//createBottomTabNavigator
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
                elevation: 10,
                shadowOpacity: 0
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#ffffff'
            }
        }
    }
);

export default createAppContainer(RootStack);
