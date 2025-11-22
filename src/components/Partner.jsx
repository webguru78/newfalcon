import React from "react";

const Partner = () => {
  return (
    <div 
      style={{
        textAlign: "center",
        padding: "40px 0"
      }}
    >
      <h2 style={{ marginBottom: "20px", fontWeight: "600",fontSize:"3rem" }}>
        Our Partners
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <img
          src="/assets/img/work.webp"
          alt="Our Partners"
          style={{
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </div>
    </div>
  );
};

export default Partner;
