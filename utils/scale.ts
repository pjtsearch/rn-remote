import { Dimensions } from "react-native";

export const scale = Dimensions.get('window').height < 800 ? 0.6 : 1
export const vscale = Dimensions.get('window').height < 800 ? 0.68 : 1