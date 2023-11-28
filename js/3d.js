import * as THREE from "./three/three.module.js"
import { GLTFLoader } from "./three/GLTFLoader.js"
import { degToRad } from "./three/MathUtils.js"
import { EffectComposer } from './three/EffectComposer.js'
import { RenderPass } from './three/RenderPass.js'
import { UnrealBloomPass } from './three/UnrealBloomPass.js'
import { OrbitControls } from "./three/OrbitControls.js"
import {darkmode} from "./main.js" 


//Setup
const arcadeElement = document.querySelector("#arcade")
const loader = new GLTFLoader()

const scene = new THREE.Scene()
const backgroundTextureDark = new THREE.TextureLoader().load("../assets/img/space_dark.jpg")
const backgroundTextureLight = new THREE.TextureLoader().load("../assets/img/space_light.jpg")
scene.background = backgroundTextureDark

const arcadeGroup = new THREE.Group()
const cameraGroup = new THREE.Group()

const camera = new THREE.PerspectiveCamera(45, arcadeElement.clientWidth / window.innerHeight, 0.1, 20000)
camera.position.set(350, 400, 0)
cameraGroup.add(camera)

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#arcade'), antialias: true})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(document.querySelector("#about").clientWidth, window.innerHeight)


// Postprocessing
const composer = new EffectComposer(renderer)
const renderPass = new RenderPass(scene, camera)
const bloomPass = new UnrealBloomPass()
composer.addPass(renderPass)
composer.addPass(bloomPass)


// Lighting
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(350, 400, 0)
pointLight.intensity = 0.3
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffffff)
ambientLight.intensity = 1.0
scene.add(ambientLight)


//Skydome
const skydomeTextureDark = new THREE.TextureLoader().load("../assets/img/space_dark.jpg")
skydomeTextureDark.wrapS = THREE.RepeatWrapping
skydomeTextureDark.wrapT = THREE.RepeatWrapping
skydomeTextureDark.repeat.set(10, 11)

const skydomeTextureLight = new THREE.TextureLoader().load("../assets/img/space_light.jpg")
skydomeTextureLight.wrapS = THREE.RepeatWrapping
skydomeTextureLight.wrapT = THREE.RepeatWrapping
skydomeTextureLight.repeat.set(5, 5)

const skydomeGeometry = new THREE.SphereGeometry(10000,64,32)

const skydomeMaterial = new THREE.MeshBasicMaterial({ map: skydomeTextureDark })
skydomeMaterial.side = THREE.DoubleSide

const skydome = new THREE.Mesh(skydomeGeometry, skydomeMaterial)

cameraGroup.add(skydome)
scene.add(cameraGroup)

function updateSkydome() {
    if(darkmode) {
        scene.background = backgroundTextureDark
        skydome.material.map = skydomeTextureDark
        //ambientLight.color.set(0xffffff)
        
    }
    else {
        scene.background = backgroundTextureLight
        skydome.material.map = skydomeTextureLight
        //ambientLight.color.set(0xffa500)
    }
}

export {updateSkydome}

// Screen
const screenTexture = new THREE.CanvasTexture(document.querySelector("#game"))
screenTexture.needsUpdate = true

const screenGeometry = new THREE.PlaneGeometry(170, 130)

const screenMaterial = new THREE.MeshStandardMaterial({ map: screenTexture, emissive: screenTexture})
screenMaterial.needsUpdate = true

const screen = new THREE.Mesh(screenGeometry, screenMaterial)
screen.position.set(20, 398, 0)
screen.rotation.set(degToRad(90), degToRad(108), degToRad(-90))

arcadeGroup.add(screen)


//Screen emissive
const screenEmissiveMaterial = new THREE.MeshStandardMaterial({ map: screenTexture, emissive: "blue"})
screenEmissiveMaterial.needsUpdate = true
screenEmissiveMaterial.emissiveIntensity = 0.005
const screenEmissive = new THREE.Mesh(screenGeometry, screenEmissiveMaterial)
screenEmissive.position.set(20, 398, 0)
screenEmissive.rotation.set(degToRad(90), degToRad(108), degToRad(-90))
arcadeGroup.add(screenEmissive)



// load Arcade gltf model
let arcade
loader.load("../assets/models/arcade_no_screen.glb", function (glb) {
    arcade = glb.scene
    arcade.castShadow = true
    arcade.position.set(0,0,0)
    arcade.rotation.set(degToRad(0), degToRad(0), degToRad(0))
    arcadeGroup.add(arcade)
    scene.add(arcadeGroup)
    animation()
})


//responsive 3d 
function updateSize() {
    camera.aspect = arcadeElement.clientWidth / window.innerHeight
    renderer.setSize(arcadeElement.clientWidth, window.innerHeight)
    camera.updateProjectionMatrix();
}

window.onresize = updateSize

const orbControls = new OrbitControls(camera, renderer.domElement)
orbControls.enabled = false


// animation
function animation() {
    screenTexture.needsUpdate = true
    screenMaterial.needsUpdate = true
    camera.lookAt(screen.position)
    composer.render()
    requestAnimationFrame(animation)
}


// spin controls
let spinningObj = false
let mouseX
let rotationSpeed = 0

arcadeElement.addEventListener("contextmenu", function (event) {
    event.preventDefault()
})

arcadeElement.addEventListener("pointerdown", function (event) {
    mouseX = event.clientX
    if(event.button == 0 && !orbControls.enabled) {
        spinningObj = true
    }
    else if(event.button == 2) {
        orbControls.enabled = !orbControls.enabled
    }
})

arcadeElement.addEventListener("pointermove", function (event) {
    if(spinningObj) {
        rotationSpeed = (event.clientX - mouseX) / 1000 
        arcadeGroup.rotation.y += rotationSpeed
        mouseX = event.clientX
    }
})

arcadeElement.addEventListener("pointerup", function (event) {
    let fade = 0.0004
    let cutoff = fade + 0.0005
    spinningObj = false
    let interval = window.setInterval(function() {
        if(rotationSpeed < cutoff && rotationSpeed > -cutoff) {
            rotationSpeed = 0
            window.clearInterval(interval)
            return
            }
        if(rotationSpeed > 0) rotationSpeed -= fade
        if(rotationSpeed < 0) rotationSpeed += fade
        arcadeGroup.rotation.y += rotationSpeed
        }, 10)
})
