import Image from "next/image";
import { Button, Table } from "react-bootstrap";
import Title from "../ui/Title";

const Products = () => {
  return (
    <div className="">
      <div className="col-12 col-lg-10 mx-auto">
        <Title>
          {" "}
          <h1 className="my-5 ">Products</h1>
        </Title>
      </div>
      <div className="col-12 col-lg-10 mx-auto admin-profile-products-table">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="text-center user-select-none mx-auto "
        >
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>TITLE</th>
              <th>PRICEC</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4">67534...</td>
              <td className="py-4">Good Pizza</td>
              <td className="py-4">$17</td>
              <td className="py-3">
                <Button variant="danger" className="m-0">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4">67534...</td>
              <td className="py-4">Good Pizza</td>
              <td className="py-4">$17</td>
              <td className="py-3">
                <Button variant="danger" className="m-0">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4">67534...</td>
              <td className="py-4">Good Pizza</td>
              <td className="py-4">$17</td>
              <td className="py-3">
                <Button variant="danger" className="m-0">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4">67534...</td>
              <td className="py-4">Good Pizza</td>
              <td className="py-4">$17</td>
              <td className="py-3">
                <Button variant="danger" className="m-0">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4">67534...</td>
              <td className="py-4">Good Pizza</td>
              <td className="py-4">$17</td>
              <td className="py-3">
                <Button variant="danger" className="m-0">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4">67534...</td>
              <td className="py-4">Good Pizza</td>
              <td className="py-4">$17</td>
              <td className="py-3">
                <Button variant="danger" className="m-0">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4">67534...</td>
              <td className="py-4">Good Pizza</td>
              <td className="py-4">$17</td>
              <td className="py-3">
                <Button variant="danger" className="m-0">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
