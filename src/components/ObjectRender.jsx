import React, { useEffect } from 'react'

const ObjectRender = () => {
  useEffect(() => {
    // Ensure A-Frame loads properly
    const loadAR = async () => {
      if (!window.AFRAME) {
        console.error("A-Frame is not loaded");
      }
    };
    loadAR();
  }, []);
  return (
    <div>
    <a-scene mindar-image embedded color-space="sRGB" renderer="antialias: true">
      {/* AR Camera */}
      <a-camera position="0 0 0"></a-camera>

      {/* Marker-Based AR Object (Change this to a 3D model or custom shape) */}
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: red;"></a-box>
      </a-marker>

      {/* Allow markers to be tracked */}
      <a-entity mindar-image-target="targetIndex: 0"></a-entity>
    </a-scene>
  </div>
  )
}

export default ObjectRender
