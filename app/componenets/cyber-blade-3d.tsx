"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function CyberBlade3DSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const modelRef = useRef<any>(null);

  useEffect(() => {
    let animationFrameId: number;
    let renderer: any;
    let scene: any;
    let camera: any;
    let controls: any;

    const initThree = () => {
      const THREE = (window as any).THREE;
      if (!THREE || !(THREE as any).GLTFLoader || !containerRef.current) {
        return false;
      }

      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // 1. SCENE
      scene = new THREE.Scene();

      // 2. CAMERA
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 1.2, 4.2);

      // 3. RENDERER
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;

      // Clear any previous canvas
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // 4. ORBIT CONTROLS
      if ((THREE as any).OrbitControls) {
        controls = new (THREE as any).OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;
        controls.maxDistance = 8;
        controls.minDistance = 1.5;
      }

      // 5. LIGHTING (Cyberpunk Neon Stage Lights)
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
      dirLight1.position.set(5, 10, 7);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
      dirLight2.position.set(-5, -5, -5);
      scene.add(dirLight2);

      // Neon Cyan Accent Point Light
      const cyanLight = new THREE.PointLight(0x00f0ff, 4, 15);
      cyanLight.position.set(-3, 2, 3);
      scene.add(cyanLight);

      // Neon Pink Accent Point Light
      const pinkLight = new THREE.PointLight(0xff2a85, 4, 15);
      pinkLight.position.set(3, -2, 3);
      scene.add(pinkLight);

      // 6. LOAD GLB MODEL DIRECTLY FROM PUBLIC ASSETS
      const loader = new (THREE as any).GLTFLoader();
      const modelPath = "/spear-blade/source/UTSM 3_0 spear blade.glb";

      loader.load(
        modelPath,
        (gltf: any) => {
          const model = gltf.scene;

          // Compute bounding box to auto-center and normalize scale
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 2.8 / maxDim;
          model.scale.set(scale, scale, scale);

          // Center the pivot
          model.position.x = -center.x * scale;
          model.position.y = -center.y * scale;
          model.position.z = -center.z * scale;

          // Wrap in a rotation pivot group
          const pivot = new THREE.Group();
          pivot.add(model);
          scene.add(pivot);
          modelRef.current = pivot;

          setLoading(false);
        },
        undefined,
        (error: any) => {
          console.error("Error loading 3D GLB model:", error);
          loader.load("/source/UTSM 3_0 spear blade.glb", (fallbackGltf: any) => {
            const model = fallbackGltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2.8 / maxDim;
            model.scale.set(scale, scale, scale);
            model.position.x = -center.x * scale;
            model.position.y = -center.y * scale;
            model.position.z = -center.z * scale;

            const pivot = new THREE.Group();
            pivot.add(model);
            scene.add(pivot);
            modelRef.current = pivot;
            setLoading(false);
          });
        }
      );

      // 7. RESIZE LISTENER
      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // 8. ANIMATION LOOP
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (modelRef.current) {
          modelRef.current.rotation.y += 0.008;
        }

        if (controls) {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      animate();

      return true;
    };

    // Check periodically until scripts are loaded
    const checkInterval = setInterval(() => {
      if ((window as any).THREE && (window as any).THREE.GLTFLoader) {
        clearInterval(checkInterval);
        initThree();
      }
    }, 100);

    return () => {
      clearInterval(checkInterval);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer && renderer.domElement && containerRef.current) {
        containerRef.current.innerHTML = "";
        renderer.dispose();
      }
    };
  }, []);

  return (
    <section id="cyber-blade" className="relative py-16 px-4 sm:px-6 md:px-8 bg-transparent select-none flex items-center justify-center">
      {/* Load Three.js, GLTFLoader, and OrbitControls directly */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"
        strategy="afterInteractive"
      />

      {/* Centered Bounded Enclosure Box */}
      <div className="relative w-full max-w-4xl h-[450px] sm:h-[550px] md:h-[620px] rounded-3xl bg-[#0c0517]/85 backdrop-blur-xl border border-white/15 shadow-[0_15px_50px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center group hover:border-[#ff2a85]/40 transition-colors duration-500">
        
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,42,133,0.15)_0%,transparent_70%)] pointer-events-none" />

        {/* Ambient Corner Accents */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]/50 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#ff2a85]/50 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff2a85]/50 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff]/50 pointer-events-none" />

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 text-[#00f0ff] z-20 pointer-events-none">
            <div className="w-8 h-8 border-2 border-[#00f0ff] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Pure WebGL 3D Blade Mount Container */}
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        />
      </div>
    </section>
  );
}
