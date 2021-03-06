import { StreamChat } from "stream-chat";
import GLOBALS from "../../globals";

class StartService{
    init(key) {
        return new Promise((resolve, reject) => {
            GLOBALS.client = new StreamChat(key);
            console.log("Stream connection opened!");
            resolve(true);
        })
    }
}
export default new StartService();