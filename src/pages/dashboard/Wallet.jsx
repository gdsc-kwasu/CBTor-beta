/** @format */

import React from "react";
import currencySymbol from "../../assets/img/cec.png";
import "../../assets/styles/components/dashboard.scss";
import Button from "../../components/Buttons";

const Wallet = () => {
  const [coupon, setCoupon] = React.useState("");

  return (
    <section className="d-justify-center bg-white shadow rounded h-100">
      <div className="col-11 col-xl-9 px-md-4">
        <div className="d-center flex-column py-5">
          <p className="text-center">My wallet balance</p>
          <div className="d-align-center font-weight-medium">
            <img
              src={currencySymbol}
              alt="cbtor currency"
              className="px-1 cec"
            />
            <h1 className="text-success text-center font-weight-bold wallet-amount mb-0">
              263,459<span className="small">CEC</span>
            </h1>
          </div>
          <p className="text-dark-50 py-4 col-sm-10 text-center d-center small">
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
                <div className="form-control form-auth d-center position-relative">
                  <input
                    type="text"
                    className="wallet-input wallet-control"
                    maxLength="12"
                    name="coupon-code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    required
                  />
                  <span className="spacer wallet-input border d-align-center">
                    {Array.from({ length: coupon.length }).map((i, idx) => (
                      <span className="v-hidden" key={idx}>
                        -
                      </span>
                    ))}
                    {Array.from({ length: 12 - coupon.length }).map(
                      (i, idx) => (
                        <span key={idx}>-</span>
                      )
                    )}
                  </span>
                </div>
                {/* <Input
                  type="text"
                  name="coupon-code"
                  placeholder="----  ----  ----"
                  value={coupon}
                  className="form-auth coupon-code"
                  onChange={(e) => setCoupon(e.target.value)}
                  required
                /> */}
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
