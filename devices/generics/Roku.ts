import { Device, HttpAction } from "remote-lib"


export const Roku = ({base,name}:{base:string,name:string})=>{
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
    return new Device({name,actions:[
        ...keypressCommands.map(name=>new HttpAction({
            name,
            method:"POST",
            base,
            path:`/keypress/${name}`
        }))
    ]})
}