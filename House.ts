import { House } from "remote-lib";
import { Nook } from "./rooms";

export const house = new House({name:"house",rooms:[
    Nook
]})