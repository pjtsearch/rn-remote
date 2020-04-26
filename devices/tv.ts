import { TV } from "./generics";

const ws = new WebSocket("ws://10.0.2.105:3613")

export const nookTV = new TV({name:"Nook TV",ws,host:"192.168.20.62",port:4998,address:"1:1"})