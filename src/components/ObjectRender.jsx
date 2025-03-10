import React, { useEffect } from "react";
import "aframe";
import "aframe-ar";

const ObjectRender = () => {
  useEffect(() => {
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => console.log("Camera access granted"))
        .catch((err) => console.error("Camera access denied:", err));
    }
  }, []);

  return (
    <div>
      <a-scene
        embedded
        arjs="debugUIEnabled: true"
        // arjs="sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; debugUIEnabled: true"
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true; precision: medium"
      >
        {/* Fix for Material Errors */}
        <a-assets>
          <a-asset-item id="myModel" src="/public/Doctor.glb"></a-asset-item>
        </a-assets>

        <a-marker preset="hiro">
          {/* 3D Object */}
          <a-box position="0 0.5 0" material="color: red"></a-box>

          {/* If using a GLB/GLTF model */}
          <a-entity
            gltf-model="#myModel"
            scale="0.5 0.5 0.5"
            position="0 0 0"
            animation-mixer
          ></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ObjectRender;
