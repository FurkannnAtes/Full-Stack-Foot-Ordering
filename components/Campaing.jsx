import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import Title from "./ui/Title";

const Campaing = () => {
  return (
    <div className="d-flex align-items-center flex-column flex-lg-row justify-content-evenly py-5 gap-2 text-white">
      <div className="d-flex align-items-center rounded-3 gap-2 campaing-card bg-dark p-2">
        <div className="campaing-card-img-container rounded-circle border border-warning border-4">
          <Image
            width={150}
            height={150}
            className="rounded-circle campaing-card-img "
            src="/images/o1.jpg"
            alt=""
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <Title>
            <h2>Tasty Thusday</h2>

            <span className="d-flex gap-1 ">
              <h1>20%</h1>
              <p className="mt-auto">off</p>
            </span>
          </Title>
          <Button variant="warning" className="text-white">
            Order Now <i className="bi bi-cart"></i>
          </Button>
        </div>
      </div>
      <div className="d-flex align-items-center rounded-3 gap-2  campaing-card bg-dark p-2">
        <div className="campaing-card-img-container rounded-circle border border-warning border-4">
          <Image
            width={150}
            height={150}
            className="rounded-circle campaing-card-img "
            src="/images/o1.jpg"
            alt=""
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <Title>
            <h2>Tasty Thusday</h2>

            <span className="d-flex gap-1 ">
              <h1>20%</h1>
              <p className="mt-auto">off</p>
            </span>
          </Title>
          <Button variant="warning" className="text-white">
            Order Now <i className="bi bi-cart"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Campaing;
