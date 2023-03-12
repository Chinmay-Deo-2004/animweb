import p5 from "p5"
import {v4 as uuidv4} from 'uuid'

export default class AnimObject {
  
  sceneHeight: number
  sceneWidth: number
  id: string

  constructor () {
    this.sceneHeight = 0
    this.sceneWidth = 0
    this.id = uuidv4()
  }

  updateSceneDimensions ({ width, height }:{width: number, height: number}) {
    this.sceneHeight = height
    this.sceneWidth = width
  }

  draw (p: p5) {}

}