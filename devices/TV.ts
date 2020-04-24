import { Device, HttpAction } from "remote-lib"


const base = "http://10.0.2.105:1234"
export const TV = new Device({name:"TV",actions:[
    new HttpAction({
        name:"on",
        method:"GET",
        base,
        path:"/tvon"
    }),
    new HttpAction({
        name:"off",
        method:"GET",
        base,
        path:"/tvoff"
    }),
]})