import Title from "../ui/Title";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Image from "next/image";

const Search = ({ navbarSearch, setNavbarSearch }) => {
  const handleModalClose = () => setNavbarSearch(false);

  return (
    <Modal
      centered
      show={navbarSearch}
      onHide={handleModalClose}
      className="fw-bold"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Title>Search</Title>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control tpye="text" placeholder="Search" />
        <div className="d-flex flex-column gap-2 py-3">
          <div className="search-results p-2 d-flex justify-content-between align-items-center">
            <Image src="/images/f1.png" alt="" width={50} height={50} />
            <span className="fw-bold">Good Pizza</span>
            <span className="fw-bold">15$</span>
          </div>
          <div className="search-results p-2 d-flex justify-content-between align-items-center">
            <Image src="/images/f1.png" alt="" width={50} height={50} />
            <span className="fw-bold">Good Pizza</span>
            <span className="fw-bold">15$</span>
          </div>
          <div className="search-results p-2 d-flex justify-content-between align-items-center">
            <Image src="/images/f1.png" alt="" width={50} height={50} />
            <span className="fw-bold">Good Pizza</span>
            <span className="fw-bold">15$</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Search;
