/**
 * 
 * @format
 */
import { AppRegistry } from "react-native";
import {name as appName} from './app.json';
import { TelaInicial } from "./counter-app/src/routes/TelaInicio.js";

AppRegistry .registerComponent(appName,() => TelaInicial);