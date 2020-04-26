import { Remote, HLayout, Macro, VLayout, ArrowLayout, GridLayout, Device } from "remote-lib";

export const Roku = ({name,roku}:{name:string,roku:Device}) =>{
    return new Remote({name,layout:[
        [
            new HLayout([
                new Macro({name:"home",icon:"home-variant-outline",actions:[
                    roku.getAction("Home")
                ]})
            ]),
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
            new HLayout([
                new Macro({name:"search",icon:"magnify",actions:[
                    roku.getAction("Search")
                ]})
            ]),
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