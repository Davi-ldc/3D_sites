import './style.css'
import * as THREE from 'three'

// a cena é composta por:
// Some objects
// uma camera
// um renderer 
const scene = new THREE.Scene()

//cube
const geometry = new THREE.BoxGeometry(1,1,1)//x y z 
const material = new THREE.MeshBasicMaterial({color:'#ff0000'})
/* 
curiosidade: red = f00
em exadecimal = ff 00 00 pq sao dois valores pra vermelho, verde e azul
               ver verd azul 
*/
const mesh = new THREE.Mesh(geometry, material)
// Geometry é o formato e o material vai ser tipo vidro, plastico...
//mesh é o material na forma geometrica 

scene.add(mesh)//tenq add na cena 

//Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
//esse 75 é a distancia q vc ta da img, se for mt grande vc ver td
camera.position.z = 3 //enquanto maior mais lonje do cubo se eu n mudasse eu ia estar dentro do cubo
//e por padrão se vc entra dentro de um objeto 3d n da pra ver nd

scene.add(camera)

//renderer 
const canvas = document.querySelector('.webgl')//pega o canvas do html (canvas e tipo uma area em q vc pd desenhar)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width , sizes.height) //tanho do rander (ate onde ele vai renderizar a cena)
//mudar o tamnho do randerer tmb muda o tamanho do canvas

renderer.render(scene, camera)
//sgnifica: renderiza a cena e a camera 