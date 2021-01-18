/**
 * React.UI - Base API functions.
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

import axios, { AxiosInstance } from 'axios';

class DataSource {
    axios: AxiosInstance;
    requestId: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor() {
        document["handler"].log("DataSource.constructor()");
        this.axios = axios.create({
            baseURL: `http://10.80.131.9:8080`,
            timeout: 5000,
        });
        this.requestId = 0;
    }
    //------------------------------------------------------------------------------------------------------------------
    async request(method:string, uri:string, body = null):Promise<string> {
        document["handler"].log(`DataSource.${method}(${uri}) #${++this.requestId}`);
        try {
            // @ts-ignore
            const response = await this.axios[method](uri, body && body).catch((e) => {
                document["handler"].error(e.message);
            });
            const fout = JSON.stringify(response.data);
            document["handler"].log(`DataSource.request() << ${fout}`);
            return fout;
        } catch (e) {
            document["handler"].error(`DataSource.request(${method}, ${uri}) -> ${e.message}`);
            return Promise.reject();
        }
    }
    //------------------------------------------------------------------------------------------------------------------
    test(callback:(result:string) => void): void {
        document["handler"].log("DataSource.test()");
        try {
            this.request("get", "/test.txt").then((result) => callback(result));
        } catch (e) {
            document["handler"].error(`DataSource.test() -> ${e.message}`);
        }
    }
}

export default DataSource;
