import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Title from "../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";
const Index = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="w-max mx-auto cart-wrapper">
      <div className="row">
        <div className="col-11 col-md-7 mx-auto d-flex align-items-center table-container">
          <div className="cart-table-scroll w-100">
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center user-select-none"
            >
              <thead>
                <tr>
                  <th>PRODUCTS</th>
                  <th>EXTRAS</th>
                  <th>PRİCE</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map((product) => (
                  <tr key={product.id}>
                    <td className="d-flex align-items-center justify-content-center gap-2">
                      <Image
                        className="d-none d-md-block"
                        src="/images/hamburger1.png"
                        alt=""
                        width={50}
                        height={50}
                      />{" "}
                      <span>{product.name}</span>
                    </td>
                    <td className="align-middle">
                      {product.extras.map((extra) => (
                        <span key={extra.id}> {extra.name}, </span>
                      ))}
                    </td>
                    <td className="align-middle">{product.price}</td>
                    <td className="align-middle">{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-3 bg-dark side-total d-none d-md-flex flex-column gap-3 justify-content-center align-items-center text-white">
          <Title>
            <h1>Cart Total</h1>
          </Title>
          <div>
            <strong>Subtotal:</strong>{" "}
            <span>{cart.total === 0 ? "0" : cart.total}</span>
          </div>
          <div>
            <strong>Discount:</strong> <span>$0.00</span>
          </div>
          <div>
            <strong>Total:</strong>
            <span> {cart.total === 0 ? "0" : cart.total}</span>
          </div>
          <Button
            onClick={() => dispatch(reset())}
            variant="warning"
            className="text-white rounded-pill"
          >
            CHECKOUT NOW!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
