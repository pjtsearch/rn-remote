import { Remote, HLayout, Macro } from "remote-lib";
import { TV, STB } from "../devices";

export const fios = new Remote({name:"Fios",layout:[
    [
        null,
        null,
        new HLayout([
            new Macro({name:"on",actions:[
                TV.getAction("on"),
                STB.getAction("on")
            ]}),
            new Macro({name:"off",actions:[
                TV.getAction("off"),
                STB.getAction("off")
            ]})
        ])
    ]
]})