import Image from "next/image";
import React from "react";
import { Button, Table } from "react-bootstrap";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="">
      <div className="col-12 col-lg-10 mx-auto">
        <Title>
          {" "}
          <h1 className="my-5 ">Order</h1>
        </Title>
      </div>
      <div className="col-12 col-lg-10 mx-auto admin-profile-order-table">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="text-center user-select-none mx-auto "
        >
          <thead>
            <tr>
              <th>PRODUCT ID</th>
              <th>CUSTOMER</th>
              <th>TOTAL</th>
              <th>PAYMENT</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4">67534...</td>
              <td className="py-4">Furkan Ateş</td>
              <td className="py-4">$17</td>
              <td className="py-4">Cash</td>
              <td className="py-4">preparing</td>
              <td className="py-3">
                <Button variant="success" className="m-0">
                  Next Stage
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-4">67534...</td>
              <td className="py-4">Furkan Ateş</td>
              <td className="py-4">$17</td>
              <td className="py-4">Cash</td>
              <td className="py-4">preparing</td>
              <td className="py-3">
                <Button variant="success" className="m-0">
                  Next Stage
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-4">67534...</td>
              <td className="py-4">Furkan Ateş</td>
              <td className="py-4">$17</td>
              <td className="py-4">Cash</td>
              <td className="py-4">preparing</td>
              <td className="py-3">
                <Button variant="success" className="m-0">
                  Next Stage
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-4">67534...</td>
              <td className="py-4">Furkan Ateş</td>
              <td className="py-4">$17</td>
              <td className="py-4">Cash</td>
              <td className="py-4">preparing</td>
              <td className="py-3">
                <Button variant="success" className="m-0">
                  Next Stage
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-4">67534...</td>
              <td className="py-4">Furkan Ateş</td>
              <td className="py-4">$17</td>
              <td className="py-4">Cash</td>
              <td className="py-4">preparing</td>
              <td className="py-3">
                <Button variant="success" className="m-0">
                  Next Stage
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-4">67534...</td>
              <td className="py-4">Furkan Ateş</td>
              <td className="py-4">$17</td>
              <td className="py-4">Cash</td>
              <td className="py-4">preparing</td>
              <td className="py-3">
                <Button variant="success" className="m-0">
                  Next Stage
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-4">67534...</td>
              <td className="py-4">Furkan Ateş</td>
              <td className="py-4">$17</td>
              <td className="py-4">Cash</td>
              <td className="py-4">preparing</td>
              <td className="py-3">
                <Button variant="success" className="m-0">
                  Next Stage
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Order;
