import { Device, HttpAction } from "remote-lib"

const keypressCommands = [
    "Home",
    "Rev",
    "Fwd",
    "Play",
    "Select",
    "Left",
    "Right",
    "Down",
    "Up",
    "Back",
    "InstantReplay",
    "Info",
    "Backspace",
    "Search",
    "Enter"
]

const base = "http://192.168.20.105:8060"
export const roku = new Device({name:"Roku",actions:[
    ...keypressCommands.map(name=>new HttpAction({
        name,
        method:"POST",
        base,
        path:`/keypress/${name}`
    }))
]})