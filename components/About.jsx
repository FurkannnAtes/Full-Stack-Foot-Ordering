import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="w-max bg-dark text-white about-container py-5">
      <div className="row  h-100">
        <div className="about-img-container col-md-6 mx-auto col-lg-6 position-relative">
          <Image
            className="p-5"
            src="/images/about-img.png"
            alt=""
            layout="fill"
          />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start px-5">
          <Title>
            <h1>We Are Feane</h1>
          </Title>
          <p className="fw-bold">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isnt anything embarrassing hidden in the
            middle of text. All
          </p>
          <Button variant="warning" className="text-white">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
