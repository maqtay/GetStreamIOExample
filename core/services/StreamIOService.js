import GLOBALS from '../../globals.js';

class StreamIOService{
    async auth(username) {
        return new Promise((resolve, reject) => {
            this.setUser(username).then(() => {
                GLOBALS.userId = username;
                resolve(true);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    async getToken(username) {
        const token = await GLOBALS.client.devToken(username);
        return token;
    }

    async setUser(username) {
        await GLOBALS.client.setUser(
            {
                id: username,
            },
            await this.getToken(username)
        ).then(() => {
            return true;
        }).catch((err) => {
            return err;
        })
    }
}
export default new StreamIOService();