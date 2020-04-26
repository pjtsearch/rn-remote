import { Remote, HLayout, Macro, VLayout, ArrowLayout, GridLayout, Device } from "remote-lib";

export class FiOS extends Remote {
    constructor({name,fios}:{name:string,fios:Device}){
        super({name,layout:[
            [
                new HLayout([
                    new Macro({name:"hgtv",icon:"home-variant-outline",actions:[
                        // fios.getAction("hgtv")
                    ]}), 
                ]),
                null,
                new HLayout([
                    new Macro({name:"off",icon:"power-off",actions:[
                        // fios.getAction("")
                    ]}),
                    new Macro({name:"on",icon:"power-on",actions:[
                        // fios.getAction("")
                    ]})
                ])
            ],
            [
                new VLayout([
                    new Macro({name:"on",icon:"menu-up-outline",actions:[
                        // fios.getAction("")
                    ]}),
                    new Macro({name:"off",icon:"volume-off",actions:[
                        // fios.getAction("")
                    ]}),
                    new Macro({name:"off",icon:"menu-down-outline",actions:[
                        // fios.getAction("")
                    ]})
                ]),
                new ArrowLayout({
                    left:new Macro({name:"left",icon:"chevron-left",actions:[
                        fios.getAction("left")
                    ]}),
                    right:new Macro({name:"right",icon:"chevron-right",actions:[
                        fios.getAction("right")
                    ]}),
                    center:new Macro({name:"select",icon:"crosshairs-gps",actions:[
                        fios.getAction("select")
                    ]}),
                    top:new Macro({name:"up",icon:"chevron-up",actions:[
                        fios.getAction("up")
                    ]}),
                    bottom:new Macro({name:"down",icon:"chevron-down",actions:[
                        fios.getAction("down")
                    ]}),
                }),
                new VLayout([
                    new Macro({name:"channelUp",icon:"menu-up-outline",actions:[
                        fios.getAction("channelUp")
                    ]}),
                    new Macro({name:"off",icon:"alpha-c",actions:[
                        
                    ]}),
                    new Macro({name:"channelDown",icon:"menu-down-outline",actions:[
                        fios.getAction("channelDown")
                    ]})
                ]),
            ],
            [
                new VLayout([
                    new Macro({name:"last",icon:"undo-variant",actions:[
                        fios.getAction("last")
                    ]}),
                    new Macro({name:"delete",icon:"trash-can-outline",actions:[
                        fios.getAction("delete")
                    ]}),
                ]),
                new GridLayout([
                    [
                        new Macro({name:"previous",icon:"menu-left-outline",actions:[
                            fios.getAction("previous")
                        ]}),
                        new Macro({name:"stop",icon:"stop",actions:[
                            fios.getAction("stop")
                        ]}),
                        new Macro({name:"next",icon:"menu-right-outline",actions:[
                            fios.getAction("next")
                        ]}),
                    ],
                    [
                        new Macro({name:"rewind",icon:"rewind-outline",actions:[
                            fios.getAction("rewind")
                        ]}),
                        new Macro({name:"record",icon:"radiobox-marked",actions:[
                            fios.getAction("record")
                        ]}),
                        new Macro({name:"forward",icon:"fast-forward-outline",actions:[
                            fios.getAction("forward")
                        ]}),
                    ],
                ]),
                new VLayout([
                    new Macro({name:"pause",icon:"pause",actions:[
                        fios.getAction("pause")
                    ]}),
                    new Macro({name:"play",icon:"play",actions:[
                        fios.getAction("play")
                    ]}),
                ])
            ],
            [
                new VLayout([
                    new Macro({name:"menu",icon:"menu",actions:[
                        fios.getAction("menu")
                    ]}),
                    new Macro({name:"options",icon:"settings-outline",actions:[
                        fios.getAction("options")
                    ]}),
                    new Macro({name:"exit",icon:"exit-to-app",actions:[
                        fios.getAction("exit")
                    ]}),
                ]),
                new GridLayout([
                    [
                        new Macro({name:"1",icon:"numeric-1",actions:[
                            fios.getAction("1")
                        ]}),
                        new Macro({name:"2",icon:"numeric-2",actions:[
                            fios.getAction("2")
                        ]}),
                        new Macro({name:"3",icon:"numeric-3",actions:[
                            fios.getAction("3")
                        ]}),
                    ],
                    [
                        new Macro({name:"4",icon:"numeric-4",actions:[
                            fios.getAction("4")
                        ]}),
                        new Macro({name:"5",icon:"numeric-5",actions:[
                            fios.getAction("5")
                        ]}),
                        new Macro({name:"6",icon:"numeric-6",actions:[
                            fios.getAction("6")
                        ]}),
                    ],
                    [
                        new Macro({name:"7",icon:"numeric-7",actions:[
                            fios.getAction("7")
                        ]}),
                        new Macro({name:"8",icon:"numeric-8",actions:[
                            fios.getAction("8")
                        ]}),
                        new Macro({name:"9",icon:"numeric-9",actions:[
                            fios.getAction("9")
                        ]}),
                    ],
                    [
                        new Macro({name:"asterisk",icon:"asterisk",actions:[
                            fios.getAction("asterisk")
                        ]}),
                        new Macro({name:"0",icon:"numeric-0",actions:[
                            fios.getAction("0")
                        ]}),
                        new Macro({name:"pound",icon:"pound",actions:[
                            fios.getAction("pound")
                        ]}),
                    ],
                ]),
                new VLayout([
                    new Macro({name:"info",icon:"information-outline",actions:[
                        fios.getAction("info")
                    ]}),
                    new Macro({name:"guide",icon:"television-guide",actions:[
                        fios.getAction("guide")
                    ]}),
                    new Macro({name:"dvr",icon:"folder-star-outline",actions:[
                        fios.getAction("dvr")
                    ]}),
                ]),
            ]
        ]})
    }
}