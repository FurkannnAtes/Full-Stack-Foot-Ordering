import Image from "next/image";
import React from "react";
import { Table } from "react-bootstrap";
import Title from "../ui/Title";

const Orders = () => {
  return (
    <div className="">
      <div className="col-12 col-lg-10 mx-auto">
        <Title>
          {" "}
          <h1 className="my-5 ">Order</h1>
        </Title>
      </div>
      <div className="col-12 col-lg-10 mx-auto profile-order-table">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="text-center user-select-none mx-auto "
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>ADRESS</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
            <tr>
              <td>63107...</td>
              <td>Konya</td>
              <td>01-09-2022</td>
              <td>$17</td>
              <td>preparing</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;
