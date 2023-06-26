import React, { useEffect } from "react";
import * as THREE from "three";

const RealEarth = () => {
  useEffect(() => {
    let scene;
    let camera;
    let renderer;
    let earthMesh;
    let cloudMesh;
    let light;

    function init() {
      const canvas = document.querySelector("#c");

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); // Adjust the aspect ratio to 1
      camera.position.z = 2;
      scene.add(camera);

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); // Set alpha to true for canvas transparency
      renderer.setSize(400, 400); // Set the size to 400x400 pixels

      // create earth geometry
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
      earthMesh.name = "earthMesh"; // Add a name to the mesh for rotation
      scene.add(earthMesh);

      // set ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);

      // set directional light
      light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 3, 5);
      scene.add(light);

      // cloud
      const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: textureLoader.load("/Images/texture/earthCloud.png"),
        transparent: true,
      });

      cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloudMesh.name = "cloudMesh"; // Add a name to the mesh for rotation
      scene.add(cloudMesh);

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

      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    init();
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
