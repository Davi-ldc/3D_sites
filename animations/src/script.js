import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Group


// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)





// Sizes
const sizes = {
    width: 800,
    height: 600
}


const help = new THREE.AxesHelper(20)
help.setColors('red', 'green', 'blue')
scene.add(help)



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)

camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


const clock = new THREE.Clock()


gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0})

gsap.to(mesh.position, { duration: 1, delay: 3, y: 2 })
gsap.to(mesh.position, { duration: 1, delay: 4, y: 0})

gsap.to(mesh.position, { duration: 1, delay: 5, z: 2 })
gsap.to(mesh.position, { duration: 1, delay: 6, z: 0})

const frame = () => {

    const time = clock.getElapsedTime()
    console.log(time)

    
    // mesh.rotation.y = time
    // mesh.position.y = Math.sin(time)
    // mesh.rotation.x = time
    // mesh.position.x = Math.cos(time)
    // mesh.rotation.z = time
    // mesh.position.z = Math.sin(time)




    renderer.render(scene, camera)
    window.requestAnimationFrame(frame)
}
frame()