import { Device, HttpAction, TelnetAction } from "remote-lib"

export class AudioReceiver extends Device {
    constructor({ws,host,port,name}:{ws:WebSocket,host:string,port:number,name:string}){
        super({name,actions:[
            new TelnetAction({name:"z2On",ws,host,port,
            command:'Z2ON'
            }),
            new TelnetAction({name:"z2SetCable",ws,host,port,
            command:'Z2SAT/CBL'
            }),
            new TelnetAction({name:"z2SetDVD",ws,host,port,
            command:'Z2DVD'
            }),
            new TelnetAction({name:"z2VolumeSet",ws,host,port,
            command:'Z240'
            }),
        ]})
    }
}