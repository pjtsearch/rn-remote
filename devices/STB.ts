import { Device, HttpAction } from "remote-lib"


const base = "http://10.0.2.105:1234"
export const STB = new Device({name:"STB",actions:[
    new HttpAction({
        name:"on",
        method:"GET",
        base,
        path:"/stbon"
    }),
    new HttpAction({
        name:"off",
        method:"GET",
        base,
        path:"/stboff"
    }),
]})