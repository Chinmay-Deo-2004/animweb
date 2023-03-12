import p5 from "p5";
import { createSketch } from "./../p5-util/sketch";
import AnimObject from './AnimObject'


export default class Scene {
  height: number
  width: number
  sketch: any
  objects: Array<AnimObject>

  constructor (width = 800, height = 800) {
    this.height = height;
    this.width = width
    this.objects = []
    
    this.sketch = createSketch({
      setup: this.setup.bind(this),
      draw: this.draw.bind(this),
    });

    new p5(this.sketch)
  }

  add (obj: AnimObject) {
    obj.updateSceneDimensions({width: this.width, height: this.height})
    this.objects.push(obj)
  }

  setup (p: p5) {
    p.createCanvas(this.width, this.height)
    p.background('#ccc')
  }

  draw (p: p5) {
    this.objects.forEach(obj => obj.draw(p))
  }

  remove (obj: AnimObject) {
    this.objects = this.objects.filter(o => o.id != obj.id)
  }

}