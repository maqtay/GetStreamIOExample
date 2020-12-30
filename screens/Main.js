import React from 'react'
import { View, SafeAreaView, BackHandler } from 'react-native';
import ActionButton from 'react-native-action-button';
import {
  ChannelList,
  ChannelPreviewMessenger,
  Chat,
} from 'stream-chat-expo';

import GLOBALS from '../globals';
import { UserService } from "../core/services";

export default class ChannelListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.getChannel = this.getChannel.bind(this);
    this.backHandler = this.backHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.client = GLOBALS.client;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler)
  }

  getChannel(client, channelId) {
    this.props.navigation.navigate('ChatScreen', { 
      client: client,
      channelId: channelId,
    });
  }

  logout() {
    UserService.logout();
    this.props.navigation.navigate('Login');
  }

  backHandler() {
    return true; 
  }

  async newConversation() {
    var users = await this.client.queryUsers({banned: false});
    this.props.navigation.navigate('UserList', {
      client: this.client,
      users: users,
    });
  }

  render() {
    return (
      <SafeAreaView>
        <Chat client={this.client}>
          <View style={{display: 'flex', height: '100%', padding: 10}}>
            <ChannelList
            filters={{type:'messaging'}}
            sort={{last_message_at: -1}}
            Preview={ChannelPreviewMessenger}
            onSelect={(channelId) => {this.getChannel(this.client, channelId)}}
            />
            <ActionButton buttonColor="red"  onPress={() => {this.newConversation()}}/>
            <ActionButton position='left' buttonColor='red' onPress={() => this.logout()}/>
          </View>
        </Chat>
      </SafeAreaView>
    );
  }
}