import Image from "next/image";
import { useState } from "react";
import Catagory from "../../components/admin/Catagory";
import Footer from "../../components/admin/Footer";
import Order from "../../components/admin/Order";
import Products from "../../components/admin/Products";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div
      className="w-max pb-3"
      style={{ paddingTop: "80px", minHeight: "600px" }}
    >
      <div className="row mx-auto col-10   ">
        <div className="col-12 col-lg-3 mx-auto p-0   ">
          <div className="d-flex flex-column border pt-3 gap-2 justify-content-center align-items-center">
            <Image
              className="rounded-circle"
              src="/images/admin.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-center">Admin</h2>
          </div>
          <div className="profile-nav d-flex flex-column ">
            <button
              onClick={() => setTabs(0)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 0 && "active"
              }`}
            >
              <i className="bi bi-egg-fried text-dark"></i>
              <span>Products</span>
            </button>
            <button
              onClick={() => setTabs(1)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 1 && "active"
              }`}
            >
              <i className="bi bi-list-ul text-dark"></i>
              <span>Orders</span>
            </button>
            <button
              onClick={() => setTabs(2)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 2 && "active"
              }`}
            >
              <i className="bi bi-three-dots text-dark"></i>
              <span>Catagories</span>
            </button>
            <button
              onClick={() => setTabs(3)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 3 && "active"
              }`}
            >
              <i className="bi bi-back text-dark"></i>
              <span>Footer</span>
            </button>

            <button
              onClick={() => setTabs(4)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 4 && "active"
              }`}
            >
              <i className="bi bi-box-arrow-left text-dark"></i>
              <span>Exit</span>
            </button>
          </div>
        </div>
        <div className=" col-12 p-0 col-lg-9 mx-auto">
          {tabs === 0 && <Products />}
          {tabs === 1 && <Order />}
          {tabs === 2 && <Catagory />}
          {tabs === 3 && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
