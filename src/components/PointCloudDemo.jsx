import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sliders, RefreshCw, Layers, ShieldAlert, Cpu, Activity, Zap } from 'lucide-react';

export default function PointCloudDemo() {
  const mountRef = useRef(null);
  
  // Controls
  const [shape, setShape] = useState('torus'); // torus, sphere, helix, cube
  const [snr, setSnr] = useState(12); // SNR in dB (-5 to 25)
  const [noiseType, setNoiseType] = useState('awgn'); // awgn, rayleigh, dropout
  const [modelType, setModelType] = useState('vit_vqvae'); // raw, baseline, vit_vqvae
  
  // Real-time calculated metrics
  const [chamferDist, setChamferDist] = useState(0.0014);
  const [emdDist, setEmdDist] = useState(0.042);
  const [pointCount, setPointCount] = useState(2500);

  // References for animation
  const sceneRef = useRef(null);
  const pointsRef = useRef(null);
  const originalPointsRef = useRef([]);

  // Generator for original clean point cloud
  const generateCleanShape = (shapeType, count = 2500) => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      let x = 0, y = 0, z = 0;
      if (shapeType === 'sphere') {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 2.0;
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
      } else if (shapeType === 'torus') {
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI * 2;
        const R = 2.2;
        const r = 0.8;
        x = (R + r * Math.cos(v)) * Math.cos(u);
        y = (R + r * Math.cos(v)) * Math.sin(u);
        z = r * Math.sin(v);
      } else if (shapeType === 'helix') {
        const t = (i / count) * Math.PI * 10;
        const radius = 1.8;
        x = radius * Math.cos(t) + (Math.random() - 0.5) * 0.1;
        y = (t / 15) - 2.5;
        z = radius * Math.sin(t) + (Math.random() - 0.5) * 0.1;
      } else { // cube
        x = (Math.random() - 0.5) * 3.5;
        y = (Math.random() - 0.5) * 3.5;
        z = (Math.random() - 0.5) * 3.5;
      }
      coords[i * 3] = x;
      coords[i * 3 + 1] = y;
      coords[i * 3 + 2] = z;
    }
    return coords;
  };

  // Initialize Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x060913);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Initial Geometry
    const cleanCoords = generateCleanShape(shape, pointCount);
    originalPointsRef.current = cleanCoords;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(cleanCoords), 3));

    // Custom shader or particle material
    const material = new THREE.PointsMaterial({
      size: 0.055,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (pointsRef.current) {
        pointsRef.current.rotation.y += 0.005;
        pointsRef.current.rotation.x += 0.002;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // Update Points when shape, snr, noiseType, or modelType changes
  useEffect(() => {
    if (!pointsRef.current) return;

    const cleanCoords = generateCleanShape(shape, pointCount);
    originalPointsRef.current = cleanCoords;

    const modifiedCoords = new Float32Array(cleanCoords.length);
    
    // Noise power inverse to SNR in dB
    // SNR_linear = 10^(SNR_dB / 10) -> noise_sigma = 1 / sqrt(SNR_linear)
    const snrLinear = Math.pow(10, snr / 10);
    const rawNoiseSigma = 1.0 / Math.sqrt(snrLinear);

    // Apply Deep Learning Denoising Factor
    let denoisingFactor = 1.0; // Raw (no reconstruction)
    if (modelType === 'baseline') {
      denoisingFactor = 0.45; // Baseline Filter
    } else if (modelType === 'vit_vqvae') {
      denoisingFactor = 0.08; // Proposed ViT + VQ-VAE Neural JSCC
    }

    const effectiveNoiseSigma = rawNoiseSigma * denoisingFactor;

    for (let i = 0; i < cleanCoords.length / 3; i++) {
      let x = cleanCoords[i * 3];
      let y = cleanCoords[i * 3 + 1];
      let z = cleanCoords[i * 3 + 2];

      let nx = 0, ny = 0, nz = 0;
      if (noiseType === 'awgn') {
        nx = (Math.random() - 0.5) * effectiveNoiseSigma * 2.5;
        ny = (Math.random() - 0.5) * effectiveNoiseSigma * 2.5;
        nz = (Math.random() - 0.5) * effectiveNoiseSigma * 2.5;
      } else if (noiseType === 'rayleigh') {
        const u = Math.random();
        const r = effectiveNoiseSigma * Math.sqrt(-2.0 * Math.log(1.0 - u));
        nx = (Math.random() - 0.5) * r;
        ny = (Math.random() - 0.5) * r;
        nz = (Math.random() - 0.5) * r;
      } else { // dropout
        if (Math.random() < effectiveNoiseSigma * 0.4 && modelType === 'raw') {
          x *= 0.1; y *= 0.1; z *= 0.1;
        }
      }

      modifiedCoords[i * 3] = x + nx;
      modifiedCoords[i * 3 + 1] = y + ny;
      modifiedCoords[i * 3 + 2] = z + nz;
    }

    // Update geometry buffer
    const geometry = pointsRef.current.geometry;
    geometry.setAttribute('position', new THREE.BufferAttribute(modifiedCoords, 3));
    geometry.attributes.position.needsUpdate = true;

    // Color based on model
    if (modelType === 'vit_vqvae') {
      pointsRef.current.material.color.setHex(0x38bdf8); // Cyan proposed
    } else if (modelType === 'baseline') {
      pointsRef.current.material.color.setHex(0xa855f7); // Purple baseline
    } else {
      pointsRef.current.material.color.setHex(0xef4444); // Red noisy raw
    }

    // Calculate simulated Chamfer Distance & EMD
    const computedCD = (effectiveNoiseSigma * effectiveNoiseSigma * 0.05 + 0.0008).toFixed(4);
    const computedEMD = (effectiveNoiseSigma * 0.15 + 0.012).toFixed(3);
    setChamferDist(computedCD);
    setEmdDist(computedEMD);

  }, [shape, snr, noiseType, modelType]);

  return (
    <section id="demo3d" style={{ padding: '4rem 0', background: 'rgba(10, 16, 29, 0.6)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.75rem' }}>
            <Activity size={14} /> Interactive Research Demonstration
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
            3D Point Cloud Transmission & <span className="gradient-text">Neural Reconstruction</span> Simulator
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Simulate 3D shape transmission through noisy communication channels. Adjust the Signal-to-Noise Ratio (SNR) and compare our proposed <strong style={{ color: 'var(--accent-cyan)' }}>ViT + VQ-VAE</strong> decoder against raw noisy signals and baseline filtering.
          </p>
        </div>

        {/* Simulator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', alignItems: 'stretch' }}>
          
          {/* 3D Canvas Container */}
          <div className="glass-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%', minHeight: '480px' }} />
            
            {/* Live Metrics Overlay */}
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(9, 13, 22, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-sm)',
              padding: '10px 14px',
              fontSize: '0.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-dim)' }}>Chamfer Distance (CD):</span>
                <strong style={{ color: modelType === 'vit_vqvae' ? 'var(--accent-cyan)' : '#ef4444', fontFamily: 'var(--font-mono)' }}>
                  {chamferDist}
                </strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-dim)' }}>Earth Mover's Dist (EMD):</span>
                <strong style={{ color: modelType === 'vit_vqvae' ? 'var(--accent-emerald)' : '#f59e0b', fontFamily: 'var(--font-mono)' }}>
                  {emdDist}
                </strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-dim)' }}>Channel SNR:</span>
                <strong style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{snr} dB</strong>
              </div>
            </div>

            {/* Model Badge Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              background: 'rgba(9, 13, 22, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 14px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: modelType === 'vit_vqvae' ? 'var(--accent-cyan)' : modelType === 'baseline' ? 'var(--accent-purple)' : '#ef4444',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Cpu size={14} />
              {modelType === 'vit_vqvae' ? 'Proposed ViT + VQ-VAE Decoder' : modelType === 'baseline' ? 'Baseline Nearest Neighbor Denoising' : 'Unprocessed Noisy Transmission'}
            </div>
          </div>

          {/* Control Panel Sidebar */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={18} color="var(--accent-cyan)" /> Experiment Controls
            </h3>

            {/* 1. Geometry Selection */}
            <div>
              <label style={labelStyle}>1. 3D Shape Geometry</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {['torus', 'sphere', 'helix', 'cube'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setShape(s)}
                    style={{
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)',
                      border: shape === s ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      background: shape === s ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      color: shape === s ? '#fff' : 'var(--text-muted)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Channel SNR Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <label style={labelStyle}>2. Channel SNR (dB)</label>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                  {snr} dB
                </span>
              </div>
              <input
                type="range"
                min="-5"
                max="25"
                step="1"
                value={snr}
                onChange={(e) => setSnr(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                <span>-5 dB (Severe Noise)</span>
                <span>+25 dB (Clean Channel)</span>
              </div>
            </div>

            {/* 3. Noise Type */}
            <div>
              <label style={labelStyle}>3. Channel Noise Type</label>
              <select
                value={noiseType}
                onChange={(e) => setNoiseType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  fontSize: '0.85rem'
                }}
              >
                <option value="awgn">AWGN (Additive White Gaussian)</option>
                <option value="rayleigh">Rayleigh Fading Channel</option>
                <option value="dropout">Packet / Point Dropout Noise</option>
              </select>
            </div>

            {/* 4. Deep Learning Reconstruction Model */}
            <div>
              <label style={labelStyle}>4. Deep Learning Decoder</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'vit_vqvae', label: 'ViT + VQ-VAE (Proposed)', badge: 'Best Quality', color: 'var(--accent-cyan)' },
                  { id: 'baseline', label: 'Nearest Neighbor Denoising', badge: 'Baseline', color: 'var(--accent-purple)' },
                  { id: 'raw', label: 'Noisy Raw Transmission', badge: 'Unprocessed', color: '#ef4444' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setModelType(item.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: modelType === item.id ? `1px solid ${item.color}` : '1px solid var(--border-subtle)',
                      background: modelType === item.id ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      color: modelType === item.id ? '#fff' : 'var(--text-muted)',
                      textAlign: 'left',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: item.color
                    }}>
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const labelStyle = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--text-muted)',
  marginBottom: '6px',
  display: 'block'
};
