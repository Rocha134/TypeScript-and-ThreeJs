//Francisco Rocha
import * as THREE from 'three'
//We import OrbitControls from three.js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
//We import the stats.js library
import Stats from 'three/examples/jsm/libs/stats.module.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement) //Add the renderer to the body of the html

const controls = new OrbitControls(camera, renderer.domElement) //OrbitControls
controls.addEventListener('change', render) // use if there is no animation loop. The first parameter is the event type, the second is the callback function.

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

console.dir(scene)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = Stats() //Stats
document.body.appendChild(stats.dom) //Add the stats to the body of the html

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    // //Every second change the color of the cube
    // setTimeout(() => {
    //     material.color.setHex(Math.random() * 0xffffff)
    // }, 1000)
    
    render()
    stats.update()
}

function render() {
    renderer.render(scene, camera)
}

//Function to turn the cube into a sphere
function turnIntoSphere() {
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)
}


animate()