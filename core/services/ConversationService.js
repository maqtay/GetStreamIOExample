import GLOBALS  from '../../globals';

class ConversationService {
    async newConversation(toUserId) {
        return new Promise((resolve, reject) => {
            const conversation = GLOBALS.client.channel('messaging', {
                members: [GLOBALS.client.user.id, toUserId],
                invites: [toUserId]
            });
            conversation.create().then(() => {
                resolve(conversation.id);
            }).catch((err) => {
                reject(err);
            })
        })
    }
}

export default new ConversationService();