import { AudioReceiver } from "./generics";

const ws = new WebSocket("ws://10.0.2.105:3613")

export const centralAudioReceiver = new AudioReceiver({name:"Central Audio Receiver",ws,host:"192.168.20.30",port:23})