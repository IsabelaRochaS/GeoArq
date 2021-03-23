import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as Expo from "expo";

const appId = "1047121222092614"

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        Actions.home()
    }

    render() {

        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>GEOARQ</Text>
                            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText = {this.handleEmail}/>
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText = {this.handlePassword}/>
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={() => this.login(this.state.email, this.state.password)}
                                title="Login"
                            />
                            {/*<Button*/}
                            {/*    buttonStyle={styles.fbLoginButton}*/}
                            {/*    onPress={() => this.onFbLoginPress()}*/}
                            {/*    title="Login with Facebook"*/}
                            {/*    color="#3897f1"*/}
                            {/*/>*/}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onLoginPress() {

    }

    // async onFbLoginPress() {
    //     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
    //         permissions: ['public_profile', 'email'],
    //     });
    //     if (type === 'success') {
    //         const response = await fetch(
    //             `https://graph.facebook.com/me?access_token=${token}`);
    //         Alert.alert(
    //             'Logged in!',
    //             `Hi ${(await response.json()).name}!`,
    //         );
    //     }
    // }
}