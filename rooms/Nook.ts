import { Room } from "remote-lib";
import { NookRoku, NookFios } from "../remotes";

export const Nook = new Room({name:"Nook",remotes:[
    NookFios,
    NookRoku
]})