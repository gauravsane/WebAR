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
        arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix;"
      >
        <a-marker preset="hiro">
          {/* 3D Object - Red Box */}
          <a-box position="0 0.5 0" material="color: red"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ObjectRender;
