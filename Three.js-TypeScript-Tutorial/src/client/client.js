"use strict";
exports.__esModule = true;
//Francisco Rocha
var THREE = require("three");
//We import OrbitControls from three.js
var OrbitControls_js_1 = require("three/examples/jsm/controls/OrbitControls.js");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
new OrbitControls_js_1.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    render();
}
function render() {
    renderer.render(scene, camera);
}
animate();
