<template>
        <!-- Defining the URL inline. Not recommended but may be more comfortable. -->
        <section>
        <div class="container text-center mt-4">
            <h1>Ejemplo objeto 3D con A-Frame</h1>
            <div id="miContenedor" class="mt-4">
                <a-scene embedded>

                    <a-gltf-model src="https://cdn.aframe.io/test-models/models/glTF-2.0/virtualcity/VC.gltf"></a-gltf-model>

                </a-scene>
            </div>
        </div>
    </section>
</template>

<script>
//<a-obj-model src="../static/models/museo/museo.obj" mtl="../static/models/museo/museo.mtl"></a-obj-model>
/*
import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
const modelUrl = new URL('../assets/models/museo/museo.obj', import.meta.url).href;
const mtlUrl = new URL('../assets/models/museo/museo.mtl', import.meta.url).href;

/*export default{
    mounted(){
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let mtlLoader = new MTLLoader();
let objLoader = new OBJLoader();

mtlLoader.load(mtlUrl, function (materials) {
                materials.preload();
                objLoader.setMaterials(materials);
                objLoader.load(modelUrl, function (mesh) {
                scene.add(mesh)
                console.log('mesh')
            });
            });

camera.position.z = 5;

renderer.render( scene, camera );

}
}

var plant_cube = undefined;
var mtlLoader = new MTLLoader();

mtlLoader.load(mtlUrl, function(materials)
{
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(modelUrl, function(object)
    {
        plant_cube = object;
        scene.add( plant_cube );
    });
})
*/
/*
export default {
    mounted() {
        var camera, pos, controls, scene, renderer, geometry, geometry1, material;
        let vm = this;

        function init() {

            scene = new THREE.Scene();
            let mtlLoader = new MTLLoader();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            let objLoader = new OBJLoader();
            scene.background = new THREE.Color(0x000000);
            const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 10, 10, 10 );
scene.add( spotLight );

const spotLightHelper = new THREE.SpotLightHelper( spotLight );
scene.add( spotLightHelper );

            renderer = new THREE.WebGLRenderer();

            mtlLoader.load(mtlUrl, function (materials) {
                materials.preload();
                objLoader.setMaterials(materials);
                objLoader.load(modelUrl, function (mesh) {
                scene.add(mesh)
                console.log('mesh')
            });
            });

            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerWidth);


            var container = vm.$el;
            container.appendChild(renderer.domElement);

            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 500);
            camera.position.set(0, 0, 4);
            resize();
        }


        function resize() {
            var w = window.innerWidth;
            var h = window.innerHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }


        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            renderer.render(scene, camera);
        }
        init();
        animate();
    }
}
-*/
</script>
  
<style>
.animation {
    position: fixed;
}
</style>
