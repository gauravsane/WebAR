import React, { useEffect } from "react";
import "aframe";

const ObjectRender = () => {
  useEffect(() => {
    // Load AR.js dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/jeromeetienne/ar.js/aframe/build/aframe-ar.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Ensure camera permissions
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => console.log("Camera access granted"))
        .catch((err) => console.error("Camera access denied:", err));
    } else {
      console.error("getUserMedia is not supported in this browser.");
    }

    return () => {
      document.body.removeChild(script);

      // Cleanup A-Frame scene on unmount
      const scene = document.querySelector("a-scene");
      if (scene) {
        scene.parentNode.removeChild(scene);
      }
    };
  }, []);

  return (
    <div>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false"
      >
        <a-camera position="0 0 0"></a-camera>

        {/* AR Marker */}
        <a-marker preset="hiro">
          {/* 3D Object */}
          <a-box position="0 0.5 0" material="color: red"></a-box>
        </a-marker>
      </a-scene>
    </div>
  );
};

export default ObjectRender;
