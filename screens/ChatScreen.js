import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Chat, MessageList, Channel, MessageInput } from 'stream-chat-expo';

import GLOBALS from '../globals';

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.client = GLOBALS.client;
        this.channelId = this.props.route.params.channelId; 
    }

    render() {
        return (
        <SafeAreaView>
            <Chat client={this.client}>
                <Channel client={this.client} channel={this.channelId}>
                    <View style={{ display: 'flex', height: '100%' }}>
                        <MessageList/>
                        <MessageInput/>
                    </View>
                </Channel>
            </Chat>
        </SafeAreaView>
        );
    }
}
