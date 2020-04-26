import { Device, HttpAction, TelnetAction } from "remote-lib"

export class Matrix extends Device {
    constructor({ws,host,port,name}:{ws:WebSocket,host:string,port:number,name:string}){
        super({name,actions:[
            new TelnetAction({name:"o1i1",ws,host,port,
            command:'11'
            }),
            new TelnetAction({name:"o1i2",ws,host,port,
            command:'12'
            })
        ]})
    }
}