/** @format */

import React from "react";
import currencySymbol from "../../assets/img/cec.png";
import "../../assets/styles/components/dashboard.scss";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";

const Wallet = () => {
  const [coupon, setCoupon] = React.useState("");

  return (
    <section className="col-12 col-md-12 col-sm-12 col-xl-12 shadow py-3 pb-4">
      <p className="text-center">My wallet balance</p>
      <div id="wallet_balance" className="d-flex d-justify-center">
        <img
          src={currencySymbol}
          alt="cbtor currency"
          className="px-1 mt-2 cec"
        />
        <h2 className="text-success text-center font-weight-medium">
          263,459<span className="small">CEC</span>
        </h2>
      </div>
      <p className="text-dark-50 py-4 text-center small px-5">
        Every test taken deducts 10 CEC from wallet ballance. Be careful when
        taking tests as CBTor charge per access. Redeem coupon by entering the
        coupon code in the textbox below.
      </p>
      <div className="coupon_root d-justify-center">
        <form>
          <div>
            <label htmlFor="coupon code" className="p d-block text-dark-50">
              Enter Coupon Code
            </label>
            <Input
              type="text"
              name="coupon-code"
              placeholder="---- ---- ----"
              value={coupon}
              className="form-auth"
              onChange={(e) => setCoupon(e.target.value)}
            />
            <p className="small text-success py-1 pb-1">
              *CEC refers to “CBTor Exam Credit”
            </p>
          </div>
          <Button className="btn-primary btn-submit mt-3">Redeem Coupon</Button>
        </form>
      </div>
    </section>
  );
};

export default Wallet;
