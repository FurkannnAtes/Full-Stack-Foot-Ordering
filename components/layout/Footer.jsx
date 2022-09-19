import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5 w-max">
      <div className="d-flex flex-column flex-lg-row gap-5 gap-lg-0">
        <div className="d-flex flex-column gap-3 align-items-center col-lg-4 text-center fw-bold">
          <Title>
            <h1>Contact Us</h1>
          </Title>
          <a className="d-flex gap-2 text-white  text-decoration-none" href="">
            {" "}
            <span>
              <i className="bi bi-geo-alt-fill"></i>
            </span>{" "}
            <span>Location</span>{" "}
          </a>
          <a className="d-flex gap-2 text-white text-decoration-none" href="">
            {" "}
            <span>
              <i className="bi bi-telephone-fill"></i>
            </span>{" "}
            <span>Call +01 1234567890</span>{" "}
          </a>
          <a className="d-flex gap-2 text-white text-decoration-none" href="">
            {" "}
            <span>
              <i className="bi bi-envelope-fill"></i>
            </span>{" "}
            <span>Example@gmail.com</span>{" "}
          </a>
        </div>
        <div className="d-flex flex-column gap-3 align-items-center col-lg-4 text-center fw-bold">
          <Title>
            <h1>Feane</h1>
          </Title>
          <p className="d-flex gap-2 text-white  text-decoration-none col-8 col-lg-12">
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="d-flex gap-3  text-dark align-items-center">
            <span className="social-media-circle">
              <i className="bi bi-facebook"></i>
            </span>
            <span className="social-media-circle">
              <i className="bi bi-twitter"></i>
            </span>
            <span className="social-media-circle">
              <i className="bi bi-linkedin"></i>
            </span>
            <span className="social-media-circle">
              <i className="bi bi-instagram"></i>
            </span>
            <span className="social-media-circle">
              <i className="bi bi-github"></i>
            </span>
          </div>
        </div>
        <div className="d-flex flex-column gap-3 align-items-center col-lg-4 text-center fw-bold">
          <Title>
            <h1>Opening Hours</h1>
          </Title>
          <span className="d-flex flex-column gap-2 text-white  text-decoration-none">
            <span>Everyday</span>
            <span>10.00 Am -10.00 Pm</span>
          </span>
        </div>
      </div>
      <div>
        <h6 className="text-center pt-5 m-0 ">
          © 2022 All Rights Reserved By Free Html Templates
        </h6>
      </div>
    </div>
  );
};

export default Footer;
