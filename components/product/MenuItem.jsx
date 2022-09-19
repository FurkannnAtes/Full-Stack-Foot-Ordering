import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

const MenuItem = () => {
  return (
    <div className="col-lg-6 col-xl-4 p-4">
      <div className="d-flex flex-column product-item-card rounded-5 bg-dark">
        <div className="w-100 rounded-top d-flex justify-content-center align-items-center py-4 product-item-img-container">
          <Link href="/product">
            <a>
              <Image
                className="rounded-circle"
                src="/images/o1.jpg"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </Link>
        </div>
        <div className="bg-dark text-white p-3">
          <h3>Delicious Pizza</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis
            odio minima ea, impedit cum optio ratione nihil magni atque neque
            dolores doloribus est ipsum recusandae. Eaque facilis facere
            veritatis?
          </p>
          <div className="d-flex align-items-baseline py-2 justify-content-between">
            <span className="fw-bold">$10</span>
            <Link href="/cart">
              <Button variant="warning" className="text-white rounded-circle">
                <i className="bi bi-cart"></i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
