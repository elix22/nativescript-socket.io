declare module "nativescript-socket.io" {
    
    import { Observable } from "data/observable";

    import * as helpers from "./helpers";

    export default function connect (uri: any, options: any) => Socket;

    export function enableDebug(debugFb?: (...args: Array<any>) => any): void;

    export function disableDebug(): any;

    export class Socket extends Observable {

        public connected: boolean;

        public ios: any;
        public android: io.socket.client.Socket;

        public constructor(uri: string, options: Object);

        public connect(): void;
        public disconnect(): void;

        public on(event: string, callback: (...payload: Array<any>) => any): void;
        public off(event: string): void;
        public emit(event: string, ...payload: Array<any>): void;
        
    }

}