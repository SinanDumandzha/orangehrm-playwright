import cryptoJs from 'crypto-js';

export default class CommonUtils{
    private secretKey: string;

    /**
     * Initializing secret key
     */
    constructor(){
        this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        if(process.env.SECRET_KEY){
             this.secretKey = process.env.SECRET_KEY
        } else {
            throw new Error("Please provide Secret Key while starting execution.")
        }
    }

    /**
     * Provide encrypted data from string
     * @param data 
     * @returns 
     */
    public encryptData(data: string){
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        return encryptedData;
    }

    /**
     * Provide decrypted data in string format
     * @param encData
     * @returns 
     */
    public decryptData(encData: string){
        const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }
}

export function getRandomNumber(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}