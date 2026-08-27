"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { pricedown } from "@/lib/fonts";
import CyberTerminalModal, { TerminalTab } from "./cyber-terminal-modal";

const FOLDERS: { name: string; tab: TerminalTab; href: string }[] = [
  { name: "judges", tab: "judges", href: "#judges" },
  { name: "faq", tab: "faq", href: "#faq" },
  { name: "team", tab: "team", href: "#team" },
];

export default function CyberBlade3DSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const modelRef = useRef<any>(null);

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeTerminalTab, setActiveTerminalTab] = useState<TerminalTab>("judges");

  useEffect(() => {
    const handleOpenTerminal = (e: any) => {
      if (e.detail?.tab) {
        setActiveTerminalTab(e.detail.tab);
        setTerminalOpen(true);
        window.dispatchEvent(
          new CustomEvent("cyber-terminal-tab-change", {
            detail: { tab: e.detail.tab, isOpen: true },
          })
        );
      }
    };

    window.addEventListener("open-cyber-terminal", handleOpenTerminal);
    return () => {
      window.removeEventListener("open-cyber-terminal", handleOpenTerminal);
    };
  }, []);

  const handleFolderClick = (e: React.MouseEvent, tab: TerminalTab) => {
    e.preventDefault();
    setActiveTerminalTab(tab);
    setTerminalOpen(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cyber-terminal-tab-change", {
          detail: { tab, isOpen: true },
        })
      );
    }
  };

  const handleTerminalClose = () => {
    setTerminalOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cyber-terminal-tab-change", {
          detail: { tab: null, isOpen: false },
        })
      );
    }
  };

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

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 1.2, 4.2);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;

      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      if ((THREE as any).OrbitControls) {
        controls = new (THREE as any).OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enableRotate = true;
        controls.enablePan = false;
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
      dirLight1.position.set(5, 10, 7);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
      dirLight2.position.set(-5, -5, -5);
      scene.add(dirLight2);

      const cyanLight = new THREE.PointLight(0x00f0ff, 4, 15);
      cyanLight.position.set(-3, 2, 3);
      scene.add(cyanLight);

      const pinkLight = new THREE.PointLight(0xff2a85, 4, 15);
      pinkLight.position.set(3, -2, 3);
      scene.add(pinkLight);

      const loader = new (THREE as any).GLTFLoader();
      const modelPath = "/spear-blade/source/UTSM 3_0 spear blade.glb";

      loader.load(
        modelPath,
        (gltf: any) => {
          const model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 1.95 / maxDim;
          model.scale.set(scale, scale, scale);

          model.position.x = -center.x * scale;
          model.position.y = -center.y * scale;
          model.position.z = -center.z * scale;

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
            const scale = 1.95 / maxDim;
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

      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      let isVisible = true;
      let observer: IntersectionObserver | null = null;
      if (typeof IntersectionObserver !== "undefined" && containerRef.current) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              isVisible = entry.isIntersecting;
            });
          },
          { threshold: 0.05 }
        );
        observer.observe(containerRef.current);
      }

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Save GPU and CPU cycles when section is not visible
        if (!isVisible) return;

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

    if (!initThree()) {
      const checkInterval = setInterval(() => {
        if (initThree()) {
          clearInterval(checkInterval);
        }
      }, 100);
    }

    const checkInterval = setInterval(() => {
      const THREE = (window as any).THREE;
      if (THREE && (THREE as any).GLTFLoader && containerRef.current && !modelRef.current) {
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
    <section id="cyber-blade" className="relative w-full py-16 px-4 sm:px-6 md:px-8 bg-transparent select-none flex items-center justify-center overflow-hidden min-h-[480px] sm:min-h-[560px] md:min-h-[640px]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105"
          style={{ backgroundImage: "url('/retro-clouds.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff2a85]/40 via-[#8b5cf6]/35 to-[#150228]/60 mix-blend-color-dodge" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#04010a_90%)]" />
      </div>

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

      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-20 p-4 sm:p-5 md:p-6 bg-[#0c0416]/75 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.7),_0_0_30px_rgba(255,42,133,0.15)] flex flex-col gap-6 sm:gap-7 md:gap-8 items-center transition-all duration-300 hover:border-[#ff2a85]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_35px_rgba(255,42,133,0.25)]">
        {FOLDERS.map((folder) => (
          <button
            key={folder.name}
            onClick={(e) => handleFolderClick(e, folder.tab)}
            className="group relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110 active:scale-95 bg-transparent border-0 outline-none"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff2a85] via-[#a855f7] to-[#ec4899] rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 pointer-events-none" />

            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 drop-shadow-[0_4px_12px_rgba(168,85,247,0.3)] group-hover:drop-shadow-[0_0_24px_rgba(255,42,133,0.85)] transition-all duration-300">
              <Image
                src="/monitor/CSEC (8).svg"
                alt={`${folder.name} folder`}
                fill
                className="object-contain transition-transform duration-300 group-hover:rotate-2"
                priority
              />
            </div>

            <span
              className={`font-pricedown text-sm sm:text-base md:text-lg tracking-wider text-white/90 group-hover:text-[#ff2a85] uppercase transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${pricedown.className}`}
            >
              {folder.name}
            </span>
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-4xl h-[450px] sm:h-[550px] md:h-[620px] flex items-center justify-center">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 text-[#00f0ff] z-20 pointer-events-none">
            <div className="w-8 h-8 border-2 border-[#00f0ff] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        />
      </div>

      <CyberTerminalModal
        isOpen={terminalOpen}
        initialTab={activeTerminalTab}
        onClose={handleTerminalClose}
      />
    </section>
  );
}
