import Image from "next/image";
import Title from "./ui/Title";

const Customers = () => {
  return (
    <div className="py-5 px-2 px-lg-5  w-max">
      <Title>
        <h1 className="text-center mb-5">What Says Our Customers</h1>
      </Title>
      <div className="d-flex flex-column gap-5 gap-md-0 flex-md-row">
        <div className="px-3">
          {" "}
          <div className="d-flex flex-column w-100 ">
            <div className="bg-dark rounded-4 text-white  p-4">
              <p className="fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                voluptatibus laboriosam dicta possimus repudiandae, magnam rerum
                nihil
              </p>
              <h4>Moana Hamell</h4>
              <h5>magna aliqua</h5>
            </div>

            <div>
              <div
                className="border rounded-circle border-warning border-5 position-relative mt-4 ms-4"
                style={{ height: "100px", width: "100px" }}
              >
                <div className="triangle "></div>
                <Image
                  className="rounded-circle "
                  src="/images/customer-1.jpg"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          {" "}
          <div className="d-flex flex-column w-100 ">
            <div className="bg-dark rounded-4 text-white  p-4">
              <p className="fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                voluptatibus laboriosam dicta possimus repudiandae, magnam rerum
                nihil
              </p>
              <h4>Mike Hamell</h4>
              <h5>magna aliqua</h5>
            </div>

            <div>
              <div
                className="border rounded-circle border-warning border-5 position-relative mt-4 ms-4"
                style={{ height: "100px", width: "100px" }}
              >
                <div className="triangle "></div>
                <Image
                  className="rounded-circle "
                  src="/images/customer-2.jpg"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
