import { Remote, HLayout, Macro, VLayout, ArrowLayout, GridLayout, Device, Custom } from "remote-lib";
import { TV, Matrix, AudioReceiver } from "../../devices/generics";

export class Roku extends Remote {
    constructor({name,roku,tv,matrix,matrixCommand,audioReceiver,audioReceiverAddress,audioReceiverOutput}:{name:string,roku:Device,tv:TV,matrix:Matrix,matrixCommand:string,audioReceiver:AudioReceiver,audioReceiverAddress:string,audioReceiverOutput:string}){
        super({name,layout:[
            [
                new HLayout([
                    new Macro({name:"home",icon:"home-variant-outline",actions:[
                        roku.getAction("Home")
                    ]})
                ]),
                null,
                new HLayout([
                    new Macro({name:"off",icon:"power-off",actions:[
                        // fios.getAction("")
                    ]}),
                    new Custom({name:"on",icon:"power-on",async action(){
                        // console.log(tv.getAction("on"))
                        tv.getAction("on").run()
                        matrix.getAction(matrixCommand).run()
                        audioReceiver.getAction(`${audioReceiverAddress}On`).run()
                        await (async () => new Promise(resolve => setTimeout(resolve, 2000)))(); 
                        audioReceiver.getAction(`${audioReceiverAddress}Set${audioReceiverOutput}`).run()
                        await (async () => new Promise(resolve => setTimeout(resolve, 2000)))(); 
                        audioReceiver.getAction(`${audioReceiverAddress}VolumeSet`).run()
                        // fios.getAction("on").run()
                    }})
                ])
            ],
            [
                null,
                new ArrowLayout({
                    left:new Macro({name:"left",icon:"chevron-left",actions:[
                    roku.getAction("Left")
                    ]}),
                    right:new Macro({name:"right",icon:"chevron-right",actions:[
                    roku.getAction("Right")
                    ]}),
                    center:new Macro({name:"select",icon:"crosshairs-gps",actions:[
                    roku.getAction("Select")
                    ]}),
                    top:new Macro({name:"up",icon:"chevron-up",actions:[
                    roku.getAction("Up")
                    ]}),
                    bottom:new Macro({name:"down",icon:"chevron-down",actions:[
                        roku.getAction("Down")
                    ]}),
                }),
                null
            ],
            [
                new VLayout([
                    new Macro({name:"back",icon:"undo-variant",actions:[
                        roku.getAction("Back")
                    ]})
                ]),
                new HLayout([
                    new Macro({name:"on",icon:"rewind-outline",actions:[
                        roku.getAction("Rev")
                    ]}),
                    new Macro({name:"on",icon:"play",actions:[
                        roku.getAction("Play")
                    ]}),
                    new Macro({name:"on",icon:"fast-forward-outline",actions:[
                        roku.getAction("Fwd")
                    ]}),
                ]),
                new VLayout([
                    new Macro({name:"on",icon:"information-outline",actions:[
                        roku.getAction("Info")
                    ]}),
                ])
            ]
        ]})
    }
}