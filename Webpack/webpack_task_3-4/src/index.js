import './index.css'
import { start } from "./app"

import IMAGE_DUCK from '../assets/duck.png'

const imageHTML = document.createElement('img')
imageHTML.src = IMAGE_DUCK

document.body.append(imageHTML)

start()