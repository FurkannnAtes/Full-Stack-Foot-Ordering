import { Button } from "react-bootstrap";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="w-max">
      <Title>
        <h1 className="text-center">Our Menu</h1>
      </Title>
      <div className="d-flex justify-content-center my-5">
        <Button variant="dark" className="rounded-pill px-lg-4 py-2">
          All
        </Button>
        <Button variant="white" className="rounded-pill px-lg-4 py-2">
          Burger
        </Button>
        <Button variant="white" className="rounded-pill px-lg-4 py-2">
          Pizza
        </Button>
        <Button variant="white" className="rounded-pill px-lg-4 py-2">
          Pasta
        </Button>
        <Button variant="white" className="rounded-pill px-lg-4 py-2">
          Fries
        </Button>
      </div>
      <div className="row px-5">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
