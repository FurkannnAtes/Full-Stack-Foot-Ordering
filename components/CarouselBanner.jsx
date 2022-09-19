import Image from "next/image";
import { Button } from "react-bootstrap";
import Title from "./ui/Title";

const CarouselBanner = () => {
  return (
    <div className="w-100 banner-container">
      <div
        className="h-100 w-100 position-absolute w-max"
        style={{ zIndex: "-1" }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="text-white px-5 banner-carousel ">
        <Title>
          <h1>Fast Food Restaurant</h1>
        </Title>
        <p className="col-md-6 fw-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nesciunt asperiores ipsam, illum veniam fugit ipsa nostrum, corporis
          officia sed commodi repudiandae sit corrupti doloremque ad accusantium
          vero! Reiciendis, ab.
        </p>
        <Button variant="warning" className="text-white rounded-pill">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default CarouselBanner;
