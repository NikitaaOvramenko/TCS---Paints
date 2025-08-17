import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import useWindowDimensions from "../helper/WindowHook";

const ThreeScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const houseRef = useRef<THREE.Object3D | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const { width: windowWidth } = useWindowDimensions();
  const [curWid, setCurWid] = useState(1000);
  const [curHei, setCurHei] = useState(300);

  // Resize logic
  useEffect(() => {
    if (windowWidth < 500) {
      setCurWid(900);
      setCurHei(150);
    } else if (windowWidth < 1000) {
      setCurWid(900);
      setCurHei(150);
    } else {
      setCurWid(900);
      setCurHei(300);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (!sceneRef.current) return;

    while (sceneRef.current.firstChild) {
      sceneRef.current.removeChild(sceneRef.current.firstChild);
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(90, curWid / curHei, 0.1, 2000);
    camera.position.z = curWid < 600 ? 2.5 : 2;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(curWid, curHei);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    sceneRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 2, 0);
    scene.add(ambientLight, directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      "/3D/residential_family_house.glb",
      (gltf) => {
        houseRef.current = gltf.scene;

        // Get model size
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const size = new THREE.Vector3();
        box.getSize(size);

        const baseScreenWidth = 1000; // reference width
        const targetModelSize = 3; // desired model world size
        const screenRatio = curWid / baseScreenWidth;
        const modelRatio = targetModelSize / Math.max(size.x, size.y, size.z);
        const finalScale = screenRatio * modelRatio;

        gltf.scene.scale.set(finalScale, finalScale, finalScale);

        // Center the model
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.sub(center);

        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("GLTF load error:", error);
      }
    );

    const animate = (t = 0) => {
      requestAnimationFrame(animate);
      if (houseRef.current) {
        houseRef.current.rotation.y = Math.sin(t * 0.0008) * 0.5;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      sceneRef.current?.removeChild(renderer.domElement);
    };
  }, [curWid, curHei]);

  return (
    <div
      ref={sceneRef}
      className="w-full flex justify-center items-center"
      style={{ height: `${curHei}px` }}
    />
  );
};

export default ThreeScene;
