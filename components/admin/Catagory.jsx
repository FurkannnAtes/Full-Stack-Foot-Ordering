import React from "react";
import { Button } from "react-bootstrap";
import Title from "../ui/Title";

const Catagory = () => {
  return (
    <div className="">
      <div className="col-12 col-lg-10 mx-auto">
        <Title>
          {" "}
          <h1 className="my-5 ">Catagories</h1>
        </Title>
      </div>
      <div className="col-12 col-lg-10 mx-auto d-flex flex-column gap-4">
        <div className="d-flex justify-content-between gap-3">
          <input
            type="text"
            placeholder="Add new Category"
            className="border border-warning w-100 ps-2 py-2"
          />
          <Button variant="warning" className="text-white rounded-pill px-4">
            Add
          </Button>
        </div>
        <div className="d-flex flex-column gap-2 ps-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Pizza</div>
            <Button variant="danger  rounded-pill px-4">Delete</Button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Hamburger</div>
            <Button variant="danger  rounded-pill px-4">Delete</Button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Cola</div>
            <Button variant="danger  rounded-pill px-4">Delete</Button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Drink</div>
            <Button variant="danger  rounded-pill px-4">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
