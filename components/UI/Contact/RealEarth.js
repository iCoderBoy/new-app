import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const RealEarth = () => {
  useEffect(() => {
    let scene;
    let camera;
    let renderer;
    let earthMesh;
    let cloudMesh;
    let light;
    let controls;

    function init() {
      const canvas = document.querySelector("#c");

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
      camera.position.z = 2;
      scene.add(camera);

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
      renderer.setSize(400, 400);

      const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);

      const textureLoader = new THREE.TextureLoader();
      const earthMap = textureLoader.load("/Images/texture/earthmap1k.jpg");
      const earthBumpMap = textureLoader.load("/Images/texture/earthbump.jpg");

      const earthMaterial = new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: earthMap,
        bumpMap: earthBumpMap,
        bumpScale: 0.3,
        transparent: true,
      });

      earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      earthMesh.name = "earthMesh";
      scene.add(earthMesh);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);

      light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 3, 5);
      scene.add(light);

      const cloudGeometry = new THREE.SphereGeometry(0.65, 32, 32);

      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: textureLoader.load("/Images/texture/earthCloud.png"),
        transparent: true,
      });

      cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloudMesh.name = "cloudMesh";
      scene.add(cloudMesh);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;

      animate();
    }

    const animate = () => {
      requestAnimationFrame(animate);

      if (earthMesh) {
        earthMesh.rotation.y -= 0.0015;
      }

      if (cloudMesh) {
        cloudMesh.rotation.y += 0.0015;
      }

      controls.update();

      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    init();

    return () => {
      // Cleanup function
      controls.dispose();
    };
  }, []);

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        position: "relative",
        background: "transparent",
      }}
    >
      <canvas id="c" style={{ position: "absolute", top: 0, left: 0 }} />
    </div>
  );
};

export default RealEarth;
