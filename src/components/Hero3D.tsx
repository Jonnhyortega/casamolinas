"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // --- LIGHTS ---
    const keyLight = new THREE.DirectionalLight(0xfff0dd, 4.0);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x9b1b30, 5, 20);
    fillLight.position.set(-6, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xd8caaa, 3.5);
    rimLight.position.set(3, 5, -4);
    scene.add(rimLight);

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    // --- 3D BOTTLE & ACCENTS ---
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const bottleGroup = new THREE.Group();
    rootGroup.add(bottleGroup);

    // Create a sleek wine bottle
    const points: THREE.Vector2[] = [];
    points.push(new THREE.Vector2(0, -2.0));
    points.push(new THREE.Vector2(0.58, -2.0));
    points.push(new THREE.Vector2(0.60, -1.95));
    points.push(new THREE.Vector2(0.60, 0.4));
    points.push(new THREE.Vector2(0.56, 0.75));
    points.push(new THREE.Vector2(0.32, 1.25));
    points.push(new THREE.Vector2(0.24, 1.6));
    points.push(new THREE.Vector2(0.22, 2.3));
    points.push(new THREE.Vector2(0.27, 2.4));
    points.push(new THREE.Vector2(0.27, 2.55));
    points.push(new THREE.Vector2(0.22, 2.6));
    points.push(new THREE.Vector2(0, 2.61));

    const bottleGeo = new THREE.LatheGeometry(points, 64);

    // Rich Burgundy Glass Material
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x4a0e17,
      emissive: 0x1f0308,
      roughness: 0.12,
      metalness: 0.2,
      transmission: 0.65,
      transparent: true,
      opacity: 0.94,
      ior: 1.52,
      thickness: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.95,
    });

    const bottleMesh = new THREE.Mesh(bottleGeo, glassMat);
    bottleGroup.add(bottleMesh);

    // Gold Foil / Capsule at the top
    const foilPoints: THREE.Vector2[] = [];
    foilPoints.push(new THREE.Vector2(0, 1.7));
    foilPoints.push(new THREE.Vector2(0.23, 1.7));
    foilPoints.push(new THREE.Vector2(0.23, 2.32));
    foilPoints.push(new THREE.Vector2(0.275, 2.42));
    foilPoints.push(new THREE.Vector2(0.275, 2.57));
    foilPoints.push(new THREE.Vector2(0, 2.62));
    const foilGeo = new THREE.LatheGeometry(foilPoints, 64);
    const foilMat = new THREE.MeshStandardMaterial({
      color: 0xc8a961,
      roughness: 0.25,
      metalness: 0.85,
    });
    const foilMesh = new THREE.Mesh(foilGeo, foilMat);
    bottleGroup.add(foilMesh);

    // Label on the bottle body
    const labelGeo = new THREE.CylinderGeometry(0.61, 0.61, 1.25, 64, 1, true, -Math.PI / 2.6, (Math.PI * 2) / 2.6);
    
    // Create a high-res canvas texture for the label
    const labelCanvas = document.createElement("canvas");
    labelCanvas.width = 512;
    labelCanvas.height = 512;
    const ctx = labelCanvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#F9F6F0";
      ctx.fillRect(0, 0, 512, 512);

      ctx.strokeStyle = "#C8A961";
      ctx.lineWidth = 10;
      ctx.strokeRect(18, 18, 476, 476);

      ctx.strokeStyle = "#7B2030";
      ctx.lineWidth = 3;
      ctx.strokeRect(30, 30, 452, 452);

      ctx.fillStyle = "#0B2227";
      ctx.font = "bold 42px Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText("CASA MOLINAS", 256, 190);

      ctx.fillStyle = "#7B2030";
      ctx.font = "600 20px sans-serif";
      ctx.fillText("GRAN RESERVA", 256, 240);

      ctx.fillStyle = "#444444";
      ctx.font = "16px sans-serif";
      ctx.fillText("MALBEC • MENDOZA", 256, 280);
      ctx.fillText("ESTATE BOTTLED", 256, 310);

      ctx.fillStyle = "#C8A961";
      ctx.beginPath();
      ctx.arc(256, 120, 20, 0, Math.PI * 2);
      ctx.fill();
    }

    const labelTexture = new THREE.CanvasTexture(labelCanvas);
    const labelMat = new THREE.MeshStandardMaterial({
      map: labelTexture,
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.y = -0.65;
    bottleGroup.add(labelMesh);

    // Initial tilt of the bottle
    bottleGroup.rotation.z = -0.22;
    bottleGroup.rotation.y = -0.3;

    // --- GOLDEN & WINE-RED PARTICLES ---
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const speedArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 12;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 6;
      speedArray[i / 3] = 0.003 + Math.random() * 0.004;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const g = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, "rgba(216, 202, 170, 0.9)");
      g.addColorStop(0.4, "rgba(229, 77, 82, 0.5)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = g;
      pCtx.beginPath();
      pCtx.arc(16, 16, 16, 0, Math.PI * 2);
      pCtx.fill();
    }
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.2,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // --- ELEGANT FLOATING ORB / LIGHT RING ---
    const ringGeo = new THREE.TorusGeometry(1.5, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd8caaa,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    ring.position.set(0, -0.3, 0);
    bottleGroup.add(ring);

    // --- MOUSE TRACKING & PARALLAX ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // --- RESPONSIVE POSITIONS ---
    const updateLayout = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (width < 768) {
        rootGroup.position.set(0, -1.0, -1);
        bottleGroup.scale.set(0.65, 0.65, 0.65);
      } else if (width < 1024) {
        rootGroup.position.set(1.2, -0.2, 0);
        bottleGroup.scale.set(0.8, 0.8, 0.8);
      } else {
        // Balanced desktop position: further inside than before
        rootGroup.position.set(1.4, 0, 0);
        bottleGroup.scale.set(0.95, 0.95, 0.95);
      }
    };

    window.addEventListener("resize", updateLayout);
    updateLayout();

    // --- ANIMATION ---
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Gentle floating animation for the bottle
      bottleGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      bottleGroup.rotation.y = -0.3 + Math.sin(elapsedTime * 0.5) * 0.15 + targetX * 0.2;
      bottleGroup.rotation.x = 0.1 + targetY * 0.15;

      // Ring rotation
      ring.rotation.z = elapsedTime * 0.2;

      // Animate particles
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        let yIdx = i * 3 + 1;
        positions[yIdx] += speedArray[i];
        if (positions[yIdx] > 5) {
          positions[yIdx] = -5;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", updateLayout);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
