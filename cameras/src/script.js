import './style.css'
import * as THREE from 'three'



/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width -0.5// o /sizes.width e ora que o valor esteja entra 0 a 1
    cursor.y = event.clientY / sizes.width -0.5// o -0.5 é pra ficar entre -0.5 e 0.5
    console.log(cursor.x)
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
//  basicamente e o qua perto q vc ta da cena, proporção da tela (largura/altura)
//o quao perto vc consegue ver (se for mt alto vai sempre dar a impressao dq vc ta dentro do cubo)
//o quao lonje vc consegue ver 

// const aspectRadio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRadio, 
//     1 * aspectRadio,
//     1 * aspectRadio,
//     -1 * aspectRadio,
//     0.1,
//     100
//     )

/*
a ideia da OrthographicCamera é vc definir o tamnho do randerer (lembrando q ele tem forma quadrada)
ai cada um dos 4 primeiros parametros é uma das linhas (esquerda, direita, cima e baixo respectivamente)
e os ultimos dois sao o msm do ultimos 2 do de cima
o problema e q dependendo do tamnho do canvas pd ser q o rander fique estranho pq ai agnt ta usando o msm tamnho pra
uma tv de cinema e meu pc. pra resolver isso se multiplica os valores por sizes.width / sizes.height
no geral e mlhr usar a PerspectiveCamera
*/




camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    mesh.rotation.y = elapsedTime;

    camera.position.x = Math.sin(cursor.x * Math.PI *2) * 2 // pq sin e cos retorna valores entre 0 e 1 ai a camera fica
    camera.position.z = Math.cos(cursor.x * Math.PI *2) * 2//mt perto do cubo
    camera.position.y = cursor.y *5
    camera.lookAt(mesh.position)
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()