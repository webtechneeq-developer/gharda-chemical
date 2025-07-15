// components/Loader/GlobalLoader.jsx
import React from "react";
import { useLoaderStore } from "../../store/useLoaderStore";
import { BounceLoader } from "react-spinners";

const GlobalLoader = () => {
  const isLoading = useLoaderStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255,255,255,0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <BounceLoader 
        height="80"
        width="80"
        color="#034EA2"
        aria-label="circles-loading"
        visible={true}
        size={90}
      />
    </div>
  );
};

export default GlobalLoader;
