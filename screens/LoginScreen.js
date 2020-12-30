import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { StartService, StreamIOService } from '../core/services';
import './Main';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }

        this.key = 'your api key';
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    componentDidMount() {
        StartService.init(this.key);
    }

    async login() {
        if (this.state.username === '' || !this.state.username) {
            ToastAndroid.show('The user name field cannot be left blank.', ToastAndroid.SHORT);
            return false;
        }

        StreamIOService.auth(this.state.username).then(
            () => {
                this.props.navigation.navigate('Main');
            }
        ).catch((err) => {
            console.log(err);
        });
    }

    signup() {
        this.props.navigation.navigate('SignUp');
    }
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.head}> Login Page </Text>{" "}
            <TextInput
              style={styles.inputVw}
              placeholder="Username"
              onChangeText={(value) => this.setState({ username: value })}
            />{" "}
            <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
              <Text style={styles.btnText}> Login </Text>{" "}
            </TouchableOpacity>{" "}
            <TouchableOpacity style={styles.signupBtn} onPress={this.signup}>
              <Text style={styles.btnText}> Signup </Text>{" "}
            </TouchableOpacity>{" "}
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    head: {
        fontSize: 30,
        marginBottom: 40
    },
    loginBtn: {
        width: '75%',
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    signupBtn: {
        width: '75%',
        height: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    btnText: {
        color: 'white'
    },
    inputVw: {
        marginBottom: 10,
        padding: 10,
        width: '75%',
        borderRadius: 15,
        borderColor: 'grey',
        borderStyle: "solid",
        borderWidth: 0.5,
    }
})