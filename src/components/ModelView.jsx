import {
  Html,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import IPhone from "./IPhone.jsx";
import * as THREE from "three";
import { Suspense } from "react";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotaionSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {" "}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      {/* lets you control the camera*/}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.8}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
