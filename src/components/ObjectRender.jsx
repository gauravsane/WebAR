import React, { useEffect } from "react";
import "aframe";
import "aframe-xr"; // Try aframe-xr instead of aframe-ar

const ObjectRender = () => {
  useEffect(() => {
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(() => console.log("Camera access granted"))
        .catch((err) => console.error("Camera access denied:", err));
    }
  }, []);

  useEffect(() => {
    AFRAME.registerComponent("init-check", {
      init: function () {
        console.log("A-Frame initialized");
      },
    });
  }, []);

  return (
    <div>
      <a-scene
        embedded
        xr="debug: true; arMode: scene-viewer" //Use aframe-xr
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true; precision: medium"
      >
        <a-assets>
          <a-asset-item id="myModel" src="/Doctor.glb"></a-asset-item>
        </a-assets>

        <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: red"></a-box>
          <a-entity gltf-model="#myModel"></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ObjectRender;