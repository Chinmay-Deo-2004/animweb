import NumberPlane from './animweb/NumberPlane'
import Scene from './animweb/Scene'

let scene = new Scene(1280, 720)

let plane = new NumberPlane({ height: 500, width: 500 })

plane.plot(5, 5)

scene.add(plane)