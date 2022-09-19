import Image from "next/image";
import { useState } from "react";
import AccountSet from "../../components/profile/AccountSet";
import Orders from "../../components/profile/Orders";
import Password from "../../components/profile/Password";

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
              src="/images/customer-1.jpg"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-center">Agatha Wizard</h2>
          </div>
          <div className="profile-nav d-flex flex-column ">
            <button
              onClick={() => setTabs(0)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 0 && "active"
              }`}
            >
              <i className="bi bi-house-door text-dark "></i>
              <span>Account</span>
            </button>
            <button
              onClick={() => setTabs(1)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 1 && "active"
              }`}
            >
              <i className="bi bi-key-fill text-dark"></i>
              <span>Password</span>
            </button>
            <button
              onClick={() => setTabs(2)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 2 && "active"
              }`}
            >
              <i className="bi bi-list-ul text-dark"></i>
              <span>Orders</span>
            </button>
            <button
              onClick={() => setTabs(3)}
              className={`d-flex gap-2 align-items-center border border-top-0 text-warning border-bottom bg-white ps-2 py-2 ${
                tabs === 3 && "active"
              }`}
            >
              <i className="bi bi-box-arrow-left text-dark"></i>
              <span>Exit</span>
            </button>
          </div>
        </div>
        <div className=" col-12 p-0 col-lg-9 mx-auto">
          {tabs === 0 && <AccountSet />}
          {tabs === 1 && <Password />}
          {tabs === 2 && <Orders />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
