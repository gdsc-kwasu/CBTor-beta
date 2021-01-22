/** @format */

import React from "react";
import currencySymbol from "../../assets/img/cec.png";
import "../../assets/styles/components/dashboard.scss";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";

const Wallet = () => {
  const [coupon, setCoupon] = React.useState("");

  return (
    <section className="d-center">
      <div className="col-sm-12 col-md-10 shadow vh-100 bg-white">
        <div className="d-center flex-column py-5">
          <p className="text-center">My wallet balance</p>
          <div className="d-flex d-justify-center font-weight-medium">
            <img
              src={currencySymbol}
              alt="cbtor currency"
              className="px-1 mt-2 cec"
            />
            <h2 className="text-success text-center font-weight-bold">
              263,459<span className="small">CEC</span>
            </h2>
          </div>
          <p className="text-dark-50 py-4 col-sm-10 text-center d-center small px-5">
            Every test taken deducts 10 CEC from wallet balance. Be careful when
            taking tests as CBTor charge per access. Redeem coupon by entering
            the coupon code in the textbox below.
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
                  placeholder="----  ----  ----"
                  value={coupon}
                  className="form-auth coupon-code"
                  onChange={(e) => setCoupon(e.target.value)}
                  required
                />
                <p className="small text-success py-1 pb-1">
                  *CEC refers to “CBTor Exam Credit”
                </p>
              </div>
              <Button className="btn-primary btn-submit mt-3">
                Redeem Coupon
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
