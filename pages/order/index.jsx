import Image from "next/image";
import React from "react";
import { Table } from "react-bootstrap";

const Index = () => {
  return (
    <div className="w-max" style={{ paddingTop: "80px" }}>
      <div className="row">
        <div className="col-11 col-md-10 mx-auto d-flex flex-column justify-content-center align-items-center table-container">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="text-center user-select-none"
          >
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>CUSTOMERS</th>
                <th>ADDRESS</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>63107f5559..</td>
                <td>
                  <span>Furkan Ateş</span>
                </td>
                <td>Konya</td>
                <td>$20</td>
              </tr>
            </tbody>
          </Table>
          <div className="bg-warning col-12 d-flex flex-column flex-sm-row gap-5 gap-sm-0 justify-content-between align-items-center p-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/images/paid.png" alt="" width={50} height={50} />
              <b>Payment</b>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/images/bake.png" alt="" width={50} height={50} />
              <b>Preparing</b>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/images/bike.png" alt="" width={50} height={50} />
              <b>On the way</b>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Image
                src="/images/delivered.png"
                alt=""
                width={50}
                height={50}
              />
              <b>Delivered</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
