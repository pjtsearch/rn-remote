import { FiOS } from "./generics";

const ws = new WebSocket("ws://10.0.2.105:3613")

export const nookFios = FiOS({name:"Nook Fios",ws,host:"192.168.20.60",port:4998,address:"1:1"})