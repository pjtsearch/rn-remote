import { Remote, HLayout, Macro, VLayout, ArrowLayout, GridLayout } from "remote-lib";
import { nookFios } from "../devices";

export const NookFios = new Remote({name:"Nook Fios",layout:[
    [
        new HLayout([
            new Macro({name:"hgtv",icon:"home-variant-outline",actions:[
                // nookFios.getAction("hgtv")
            ]}), 
        ]),
        null,
        new HLayout([
            new Macro({name:"off",icon:"power-off",actions:[
                // nookFios.getAction("")
            ]}),
            new Macro({name:"on",icon:"power-on",actions:[
                // nookFios.getAction("")
            ]})
        ])
    ],
    [
        new VLayout([
            new Macro({name:"on",icon:"menu-up-outline",actions:[
                // nookFios.getAction("")
            ]}),
            new Macro({name:"off",icon:"volume-off",actions:[
                // nookFios.getAction("")
            ]}),
            new Macro({name:"off",icon:"menu-down-outline",actions:[
                // nookFios.getAction("")
            ]})
        ]),
        new ArrowLayout({
            left:new Macro({name:"left",icon:"chevron-left",actions:[
                nookFios.getAction("left")
            ]}),
            right:new Macro({name:"right",icon:"chevron-right",actions:[
                nookFios.getAction("right")
            ]}),
            center:new Macro({name:"select",icon:"crosshairs-gps",actions:[
                nookFios.getAction("select")
            ]}),
            top:new Macro({name:"up",icon:"chevron-up",actions:[
                nookFios.getAction("up")
            ]}),
            bottom:new Macro({name:"down",icon:"chevron-down",actions:[
                nookFios.getAction("down")
            ]}),
        }),
        new VLayout([
            new Macro({name:"channelUp",icon:"menu-up-outline",actions:[
                nookFios.getAction("channelUp")
            ]}),
            new Macro({name:"off",icon:"alpha-c",actions:[
                
            ]}),
            new Macro({name:"channelDown",icon:"menu-down-outline",actions:[
                nookFios.getAction("channelDown")
            ]})
        ]),
    ],
    [
        new VLayout([
            new Macro({name:"last",icon:"undo-variant",actions:[
                nookFios.getAction("last")
            ]}),
            new Macro({name:"delete",icon:"trash-can-outline",actions:[
                nookFios.getAction("delete")
            ]}),
        ]),
        new GridLayout([
            [
                new Macro({name:"previous",icon:"menu-left-outline",actions:[
                    nookFios.getAction("previous")
                ]}),
                new Macro({name:"stop",icon:"stop",actions:[
                    nookFios.getAction("stop")
                ]}),
                new Macro({name:"next",icon:"menu-right-outline",actions:[
                    nookFios.getAction("next")
                ]}),
            ],
            [
                new Macro({name:"rewind",icon:"rewind-outline",actions:[
                    nookFios.getAction("rewind")
                ]}),
                new Macro({name:"record",icon:"radiobox-marked",actions:[
                    nookFios.getAction("record")
                ]}),
                new Macro({name:"forward",icon:"fast-forward-outline",actions:[
                    nookFios.getAction("forward")
                ]}),
            ],
        ]),
        new VLayout([
            new Macro({name:"pause",icon:"pause",actions:[
                nookFios.getAction("pause")
            ]}),
            new Macro({name:"play",icon:"play",actions:[
                nookFios.getAction("play")
            ]}),
        ])
    ],
    [
        new VLayout([
            new Macro({name:"on",icon:"menu",actions:[
                nookFios.getAction("")
            ]}),
            new Macro({name:"on",icon:"settings-outline",actions:[
                nookFios.getAction("")
            ]}),
            new Macro({name:"on",icon:"exit-to-app",actions:[
                nookFios.getAction("")
            ]}),
        ]),
        new GridLayout([
            [
                new Macro({name:"on",icon:"numeric-1",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"numeric-2",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"numeric-3",actions:[
                    nookFios.getAction("")
                ]}),
            ],
            [
                new Macro({name:"on",icon:"numeric-4",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"numeric-5",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"numeric-6",actions:[
                    nookFios.getAction("")
                ]}),
            ],
            [
                new Macro({name:"on",icon:"numeric-7",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"numeric-8",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"numeric-9",actions:[
                    nookFios.getAction("")
                ]}),
            ],
            [
                new Macro({name:"on",icon:"asterisk",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"numeric-0",actions:[
                    nookFios.getAction("")
                ]}),
                new Macro({name:"on",icon:"pound",actions:[
                    nookFios.getAction("")
                ]}),
            ],
        ]),
        new VLayout([
            new Macro({name:"on",icon:"information-outline",actions:[
                nookFios.getAction("")
            ]}),
            new Macro({name:"on",icon:"television-guide",actions:[
                nookFios.getAction("")
            ]}),
            new Macro({name:"on",icon:"folder-star-outline",actions:[
                nookFios.getAction("")
            ]}),
        ]),
    ]
]})