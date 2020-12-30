import GLOBALS from "../../globals";

class UserService{
    // TODO: tamamlanacak
    async signup(user) {
        const client = GLOBALS.client;
    }

    logout() {
        GLOBALS.client.disconnect().then(() => {
            console.log('Stream bağlantısı kapatıldı!');
            return true;
        }).catch((err) => {
            return err;
        });;

    }
}
export default new UserService();