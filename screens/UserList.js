import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ConversationService } from "../core/services";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.users;
        this.client = this.props.route.params.client;
        this.users = this.props.route.params.users;
        this.newMessage = this.newMessage.bind(this);
    }
    async newMessage(id) {
        ConversationService.newConversation(id).then((channelId) => {
            this.props.navigation.navigate('ChatScreen', {
                channelId: channelId
            });
        }).catch((err) => {
            console.log(err);
        });       
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.users.users.map((x) => (
                        <TouchableOpacity style={styles.userButton} onPress={() => {this.newMessage(x.id)}}>
                           <Text>
                                {
                                    x.id
                                }
                            </Text> 
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    userButton: {
        height: 40,
        width: '85%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        margin: 5
    }
}) 