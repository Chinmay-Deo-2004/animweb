import AnimObject from './AnimObject'
import p5 from 'p5'

interface NumberPlaneProps {
  stepX?: number
  stepY?: number
  width?: number
  height?: number
  x?: number
  y?: number
  origin?: { x: number; y: number }
}

export default class NumberPlane extends AnimObject {
  stepX: number
  stepY: number
  width: number
  height: number
  x: number
  y: number
  origin: {
    x: number
    y: number
  }
  points: Array<{x: number, y: number}>

  constructor({
    stepX = 20,
    stepY = 20,
    width,
    height,
    x = 0,
    y = 0,
    origin,
  }: NumberPlaneProps) {
    super()
    this.stepX = stepX
    this.stepY = stepY
    this.width = width ? width : this.sceneWidth
    this.height = height ? height : this.sceneHeight
    this.x = x
    this.y = y
    this.points = []
    this.origin = origin
      ? origin
      : { x: (this.x + this.width) / 2, y: (this.y + this.height) / 2 }
  }

  draw(p: p5) {
    p.line(this.origin.x, this.y, this.origin.x, this.y + this.height)
    p.line(this.x, this.origin.y, this.x + this.width, this.origin.y)

    p.strokeWeight(3)
    // +ve x-axis
    for (let i = 0; i < p.floor(this.width / (2 * this.stepX)); i++) {
      p.point(this.origin.x + (this.stepX * i), this.origin.y)
    }

    // -ve x-axis
    for (let i = 1; i < p.floor(this.width / (2 * this.stepX)); i++) {
      p.point(this.origin.x - (this.stepX * i), this.origin.y)
    }

    // +ve y-axis
    for (let i = 1; i < p.floor(this.height / (2 * this.stepY)); i++) {
      p.point(this.origin.x, this.origin.y - (this.stepY * i))
    }

    // -ve y-axis
    for (let i = 1; i < p.floor(this.height / (2 * this.stepY)); i++) {
      p.point(this.origin.x, this.origin.y + (this.stepY * i))
    }


    p.strokeWeight(7)
    this.points.forEach(point => {
      p.point(point.x, point.y)
    })
    p.noStroke()
  }

  plot (x: number, y: number) {
    this.points.push({
      x: this.origin.x + (x * this.stepX),
      y: this.origin.y + (y * this.stepY)
    })
  }
}
