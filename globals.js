class GLOBALS {
    constructor() {

        // o anki açık olan client'ı gösterir, tüm chat işlemleri burdan yürür
        this.client = null;

        // client'ın durumu hakkında bilgi verir
        this.clientStatus = {
            text: 'offline',
            last: new Date(),
        }
        
        // Programı kullanan kullanıcının user id'si
        this.userId = null;

        // kullanıcının chatlist'ini tutar
        this.chatList = null;
    }
}

export default (new GLOBALS());