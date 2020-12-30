import GLOBALS from "../../globals";

class UserService{
    // TODO: signup to be completed
    async signup(user) {
        const client = GLOBALS.client;
    }

    logout() {
        GLOBALS.client.disconnect().then(() => {
            console.log('Stream connection closed!');
            return true;
        }).catch((err) => {
            return err;
        });;

    }
}
export default new UserService();