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
    <a-scene mindar-image="imageTargetSrc: ./marker.mind;" embedded arjs>
      <a-camera position="0 0 0" look-controls="false"></a-camera>

      {/* AR Marker */}
      <a-marker preset="hiro">
        {/* 3D Object */}
        <a-box position="0 0.5 0" material="color: red"></a-box>
      </a-marker>
    </a-scene>
  </div>
  )
}

export default ObjectRender
