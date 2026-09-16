import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeCarCanvasProps {
  className?: string;
  enableScrollReaction?: boolean;
}

export const ThreeCarCanvas = ({
  className = "w-full h-full",
  enableScrollReaction = true,
}: ThreeCarCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 400;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.replaceChildren(renderer.domElement);

    // Dust & Metallic Sparkle Particles
    const particleCount = 200;
    const particlesGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const primaryColor = new THREE.Color(0xd70000);
    const tintColor = new THREE.Color(0xffb4a8);
    const silverColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      // Spread across 3D space
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      // Color variation (reds, rose, and silver sparkles)
      const rand = Math.random();
      const chosenColor =
        rand < 0.4 ? primaryColor : rand < 0.7 ? tintColor : silverColor;

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particlesGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeom, particleMat);
    scene.add(particles);

    // Scroll Interactivity
    let scrollY = 0;
    let targetScrollRotation = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
      targetScrollRotation = scrollY * 0.0006;
    };

    if (enableScrollReaction) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Gentle ambient drift
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      if (enableScrollReaction) {
        particles.rotation.y +=
          (targetScrollRotation - particles.rotation.y) * 0.04;
      }

      // Smooth camera parallax based on mouse
      const targetCamX = mouseX * 0.6;
      const targetCamY = mouseY * 0.4;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (enableScrollReaction) {
        window.removeEventListener("scroll", handleScroll);
      }

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      particlesGeom.dispose();
      particleMat.dispose();
    };
  }, [enableScrollReaction]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden pointer-events-none ${className}`}
      aria-label="Ambient 3D particle background"
    />
  );
};

export default ThreeCarCanvas;
