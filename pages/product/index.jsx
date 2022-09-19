import Image from "next/image";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Title from "../../components/ui/Title";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const foodItems = [
  {
    id: 1,
    name: "Pizza",
    price: 10,
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora esse omnis culpa provident ad! Omnis cupiditate adipisci odit.Quisquam, assumenda. Praesentium numquam dignissimos ratione atqueaperiam minus odio inventore?",
    extraOption: [
      {
        id: 1,
        name: "Ketchup",
        price: 2,
      },
      {
        id: 2,
        name: "Special Sauce",
        price: 4,
      },
      {
        id: 3,
        name: "mayonnaise",
        price: 6,
      },
    ],
  },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extrasItem, setExtrasItem] = useState([
    {
      id: 1,
      name: "Ketchup",
      price: 2,
    },
    {
      id: 2,
      name: "Special Sauce",
      price: 4,
    },
    {
      id: 3,
      name: "mayonnaise",
      price: 6,
    },
  ]);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleChange = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
  };

  return (
    <div
      className="w-max d-flex flex-column flex-lg-row "
      style={{ height: "100vh" }}
    >
      <div className="col-6 mx-auto position-relative product-details-img">
        <Image
          className="p-lg-5"
          src="/images/hamburger1.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="col-lg-6 d-flex flex-column gap-3 justify-content-center px-5 ">
        <Title>
          <h1>Good Pizza</h1>
        </Title>
        <div className="text-warning  fw-bold " style={{ fontSize: "2rem" }}>
          ${price}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          tempora esse omnis culpa provident ad! Omnis cupiditate adipisci odit.
          Quisquam, assumenda. Praesentium numquam dignissimos ratione atque
          aperiam minus odio inventore?
        </p>
        <div className="d-flex flex-column ">
          <h2 className="fw-bold">Choose the size</h2>
          <div className="d-flex gap-5 ">
            <div
              className="position-relative size-box mt-auto me-5  "
              style={{ cursor: "pointer" }}
              onClick={() => handleSize(0)}
            >
              <Image src="/images/size.png" alt="" layout="fill" />
            </div>
            <div
              className="position-relative size-box-md mt-auto me-5  "
              style={{ cursor: "pointer" }}
              onClick={() => handleSize(1)}
            >
              <Image src="/images/size.png" alt="" layout="fill" />
            </div>
            <div
              className="position-relative size-box-lg mt-auto "
              style={{ cursor: "pointer" }}
              onClick={() => handleSize(2)}
            >
              <Image src="/images/size.png" alt="" layout="fill" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column ">
          <h1 className="fw-bold">Choose additional ingredients</h1>
          <div className="d-flex gap-4">
            {extrasItem.map((item) => (
              <Form.Group
                key={item.id}
                className="user-select-none"
                controlId={item.name}
                onChange={(e) => handleChange(e, item)}
              >
                <Form.Check type="checkbox" label={item.name} />
              </Form.Group>
            ))}
          </div>
        </div>
        <div>
          <Button
            onClick={() => handleClick()}
            variant="warning"
            className="text-white"
          >
            Add to card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
