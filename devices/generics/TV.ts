import { Device, HttpAction, TelnetAction } from "remote-lib"

export class TV extends Device {
    constructor({ws,host,port,address,name}:{ws:WebSocket,host:string,port:number,address:string,name:string}){
        super({name,actions:[
            new TelnetAction({name:"on",ws,host,port,
            command:`sendir,${address},1,40000,3,1,96,24,24,24,48,24,48,24,48,24,24,24,48,24,24,24,48,24,24,24,24,24,24,24,24,1013`
            })
        ]})
    }
}