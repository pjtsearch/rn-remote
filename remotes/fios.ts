import { Remote, HLayout, Macro, VLayout, ArrowLayout } from "remote-lib";
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
            new Macro({name:"on",icon:"power",actions:[
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
            new Macro({name:"on",icon:"delete-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
        ]),
        new HLayout([
            new Macro({name:"on",icon:"rewind-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"stop-circle-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"on",icon:"fast-forward-outline",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
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
    ]
]})