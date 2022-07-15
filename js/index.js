import { Sounds } from "./sounds.js";
import { minutesDisplay, secondsDisplay, buttonPlay } from "./elements.js";
import { Controls } from "./controls.js";
import { Events } from "./events.js";

const controls = Controls({ minutesDisplay, secondsDisplay, buttonPlay });
const sounds = Sounds();

Events({ controls, sounds });
