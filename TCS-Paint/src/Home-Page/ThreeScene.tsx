import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const houseRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    while (sceneRef.current.firstChild) {
      sceneRef.current.removeChild(sceneRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    const loader = new GLTFLoader();

    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.update();

    loader.load(
      "/TCS---Paints/3D/residential_family_house.glb", // ← this path should be public-relative
      function (gltf) {
        houseRef.current = gltf.scene;
        gltf.scene.scale.set(2, 2, 2);

        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.sub(center);

        scene.add(gltf.scene);

        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;

            console.log("Found mesh:", mesh.name);
            console.log("Material:", mesh.material);
          }
        });

        console.log(gltf.scene);
      },
      undefined, // Optional: progress callback
      function (error) {
        console.error("An error occurred while loading the GLTF model:", error);
      }
    );

    // const geometry = new THREE.BoxGeometry(3, 3, 3);
    // const material = new THREE.MeshBasicMaterial({ color: 0xff8000 });
    // const sphere = new THREE.Mesh(geometry, material);

    camera.position.z = 5;

    // scene.add(sphere);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xc9cbd3);
    // t = 0
    const animate = () => {
      requestAnimationFrame(animate);

      // if (houseRef.current && houseRef.current.rotation) {
      //   houseRef.current.rotation.y = Math.sin(t * 0.001) * 2;
      // }

      controls.update();

      renderer.render(scene, camera);
    };

    sceneRef.current?.appendChild(renderer.domElement);

    animate();

    return () => {
      sceneRef.current?.removeChild(renderer.domElement);
    };
  }, [sceneRef]);

  return <div ref={sceneRef}></div>;
};

export default ThreeScene;
