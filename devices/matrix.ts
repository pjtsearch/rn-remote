import { Matrix } from "./generics";

const ws = new WebSocket("ws://10.0.2.105:3613")

export const centralMatrix = new Matrix({name:"Central Matrix",ws,host:"192.168.20.66",port:4999})