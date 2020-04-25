import { Remote, HLayout, Macro, VLayout, ArrowLayout, GridLayout } from "remote-lib";
import { TV, STB } from "../devices";

export const fios = new Remote({name:"Fios",layout:[
    [
        null,
        null,
        new HLayout([
            new Macro({name:"off",icon:"power-off",actions:[
                TV.getAction("off"),
                STB.getAction("off")
            ]}),
            new Macro({name:"on",icon:"power-on",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]})
        ])
    ],
    [
        new VLayout([
            new Macro({name:"on",icon:"menu-up-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"off",icon:"volume-off",actions:[
                TV.getAction("off"),
                STB.getAction("off")
            ]}),
            new Macro({name:"off",icon:"menu-down-outline",actions:[
                TV.getAction("off"),
                STB.getAction("off")
            ]})
        ]),
        new ArrowLayout({
            left:new Macro({name:"on",icon:"chevron-left",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            right:new Macro({name:"off",icon:"chevron-right",actions:[
                TV.getAction("off"),
                STB.getAction("off")
            ]}),
            center:new Macro({name:"on",icon:"crosshairs-gps",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            top:new Macro({name:"off",icon:"chevron-up",actions:[
                TV.getAction("off"),
                STB.getAction("off")
            ]}),
            bottom:new Macro({name:"on",icon:"chevron-down",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
        }),
        new VLayout([
            new Macro({name:"on",icon:"menu-up-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"off",icon:"alpha-c",actions:[
                
            ]}),
            new Macro({name:"off",icon:"menu-down-outline",actions:[
                TV.getAction("off"),
                STB.getAction("off")
            ]})
        ]),
    ],
    [
        new VLayout([
            new Macro({name:"on",icon:"undo-variant",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"trash-can-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
        ]),
        new GridLayout([
            [
                new Macro({name:"on",icon:"menu-left-outline",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"stop-circle-outline",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"menu-right-outline",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
            ],
            [
                new Macro({name:"on",icon:"rewind-outline",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"record",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"fast-forward-outline",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
            ],
        ]),
        new VLayout([
            new Macro({name:"on",icon:"pause",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"play",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
        ])
    ],
    [
        new VLayout([
            new Macro({name:"on",icon:"dots-horizontal",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"settings-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"exit-to-app",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
        ]),
        new GridLayout([
            [
                new Macro({name:"on",icon:"numeric-1",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"numeric-2",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"numeric-3",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
            ],
            [
                new Macro({name:"on",icon:"numeric-4",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"numeric-5",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"numeric-6",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
            ],
            [
                new Macro({name:"on",icon:"numeric-7",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"numeric-8",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"numeric-9",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
            ],
            [
                new Macro({name:"on",icon:"asterisk",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"numeric-0",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
                new Macro({name:"on",icon:"pound",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]}),
            ],
        ]),
        new VLayout([
            new Macro({name:"on",icon:"information-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"television-guide",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"playlist-play",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
        ]),
    ]
]})