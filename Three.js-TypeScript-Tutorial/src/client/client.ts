//Francisco Rocha
import * as THREE from 'three'
//We import OrbitControls from three.js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
//We import the stats.js library
import Stats from 'three/examples/jsm/libs/stats.module.js'
//We import the dat.gui library
import { GUI } from 'dat.gui'

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
//controls.addEventListener('change', render) // use if there is no animation loop. The first parameter is the event type, the second is the callback function.

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

const gui = new GUI() //Dat.gui
const cubeFolder = gui.addFolder('Cube') //Add a cubeFolder to the dat.gui
cubeFolder.add(cube.position, 'x', -5, 5, 0.01) //Add the x position to the dat.gui
cubeFolder.add(cube.position, 'y', -5, 5, 0.01) //Add the y position to the dat.gui
cubeFolder.add(cube.position, 'z', -5, 5, 0.01) //Add the z position to the dat.gui
cubeFolder.add(cube.rotation, 'x', 0, 2 * Math.PI, 0.01) //Add the x rotation to the dat.gui
cubeFolder.add(cube.rotation, 'y', 0, 2 * Math.PI, 0.01) //Add the y rotation to the dat.gui
cubeFolder.add(cube.rotation, 'z', 0, 2 * Math.PI, 0.01) //Add the z rotation to the dat.gui
cubeFolder.add(cube.scale, 'x', 0, 2, 0.01) //Add the x scale to the dat.gui
cubeFolder.add(cube.scale, 'y', 0, 2, 0.01) //Add the y scale to the dat.gui
cubeFolder.add(cube.scale, 'z', 0, 2, 0.01) //Add the z scale to the dat.gui
cubeFolder.add(cube, 'visible') //Add the visible property to the dat.gui
cubeFolder.add(cube, 'castShadow') //Add the castShadow property to the dat.gui
cubeFolder.add(cube, 'receiveShadow') //Add the receiveShadow property to the dat.gui

const cameraFolder = gui.addFolder('Camera') //Add a cameraFolder to the dat.gui
cameraFolder.add(camera.position, 'x', -5, 5, 0.01) //Add the x position to the dat.gui
cameraFolder.add(camera.position, 'y', -5, 5, 0.01) //Add the y position to the dat.gui
cameraFolder.add(camera.position, 'z', -5, 5, 0.01) //Add the z position to the dat.gui
cameraFolder.add(camera.rotation, 'x', 0, 2 * Math.PI, 0.01) //Add the x rotation to the dat.gui
cameraFolder.add(camera.rotation, 'y', 0, 2 * Math.PI, 0.01) //Add the y rotation to the dat.gui
cameraFolder.add(camera.rotation, 'z', 0, 2 * Math.PI, 0.01) //Add the z rotation to the dat.gui
cameraFolder.add(camera, 'fov', 0, 180, 0.01) //Add the fov to the dat.gui
cameraFolder.add(camera, 'near', 0, 5, 0.01) //Add the near to the dat.gui
cameraFolder.add(camera, 'far', 0, 5, 0.01) //Add the far to the dat.gui
cameraFolder.add(camera, 'zoom', 0, 5, 0.01) //Add the zoom to the dat.gui
cameraFolder.add(camera, 'focus', 0, 5, 0.01) //Add the focus to the dat.gui
cameraFolder.add(camera, 'aspect', 0, 5, 0.01) //Add the aspect to the dat.gui
cameraFolder.add(camera, 'clearViewOffset') //Add the clearViewOffset to the dat.gui
cameraFolder.add(camera, 'updateProjectionMatrix') //Add the updateProjectionMatrix to the dat.gui
cameraFolder.add(camera, 'clearViewOffset') //Add the clearViewOffset to the dat.gui

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