import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UserService } from '../core/services';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            fName: '',
            email: '',
        }
        this.goBack = this.goBack.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    goBack() {
        this.props.navigation.navigate('Login');
    }

    signUp() {
        var user = {
            id: this.state.username,
            email: this.state.email,
            name: this.state.fName,
        }
        UserService.signup(user);
        this.props.navigation.navigate('Login');
        
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={ styles.head }>Signup Page</Text>
                <TextInput placeholder='Username' style={styles.inputVw} onChangeText={(value) => this.setState({username: value})}/>
                <TextInput placeholder='Full Name' style={styles.inputVw} onChangeText={(value) => this.setState({fName: value})}/>
                <TextInput placeholder='Email' style={styles.inputVw} keyboardType='email-address' onChangeText={(value) => this.setState({email: value})}/>
                <TouchableOpacity style={styles.signupBtn} onPress={this.signUp}>
                    <Text style={{color: 'white', fontSize: 15}}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                    <Text style={{color: 'black', fontSize: 15}}>Back</Text>
                </TouchableOpacity>
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
        margin: 20
    },
    inputVw: {
        marginBottom: 15,
        padding: 10,
        width: '75%',
        borderRadius: 15,
        borderColor: 'grey',
        borderStyle: "solid",
        borderWidth: 0.5,
        height: 40
    },
    signupBtn: {
        marginTop: 15,
        width: '75%',
        height: 30,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    backButton: {
        width: '75%',
        height: 30,
        borderRadius: 10,
        borderWidth: 0.5,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    }
})