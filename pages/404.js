import React from "react";

const error404 = () => {
  return (
    <div
      className="bg-dark w-100 position-relative d-flex justify-content-center align-items-center text-warning fw-bold"
      style={{ height: "100vh", fontSize: "2rem" }}
    >
      404 Page Not Found
    </div>
  );
};

export default error404;
