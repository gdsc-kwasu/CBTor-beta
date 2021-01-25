/** @format */

import React, { useState } from "react";
import avatar from "../../assets/img/dunni.png";
import "../../assets/styles/components/dashboard.scss";
import Input, { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";
import cam from "../../assets/img/camera.svg";

const tests = [
  { title: "Attempeted Tests", score: 54 },
  { title: "Highest Score", score: 86 },
  { title: "Average Percentage", score: "73%" },
];

const Profile = () => {
  const [accountDetails, setAccountDetails] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddr: "",
    oldPassword: "",
    newPassword: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (input) => (e) => {
    setAccountDetails({
      [input]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  const handleImageUpload = (e) => {
    e.preventDefault;
    const img = e.target.files[0];
    setImage(URL.createObjectURL(img));
  };

  return (
    <section id="profile-root">
      <div className="background vw-100" />
      <div className="profile d-flex flex-wrap pb-5">
        <div className="col-12 col-md-4 col-xl-3 px-0 h-100 pr-xl-0">
          <div className="bg-white rounded shadow py-3">
            <div className="d-center">
              <img
                src={image || avatar}
                className="profile-avatar rounded-circle"
                alt=""
              />
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="d-none"
              />
              <label className="upload-btn d-center" htmlFor="image">
                <img src={cam} alt="" />
              </label>
            </div>
            <h6 className="text-center text-dark font-weight-bold mt-1 mb-0 px-3">
              Omodunni Alake
            </h6>
            <p className="small text-center text-dark-50 pb-2 px-3">
              omodunni.alake@gmail.com
            </p>
            <div className="border-bottom-light mb-4" />
            {tests.map((test, index) => {
              return (
                <div key={index} className="d-justify-between px-3">
                  <p className="small text-dark">{test.title}</p>
                  <p className="text-success">{test.score}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 mt-3 mt-md-0 px-0 col-md-8 col-xl-9 pl-md-3 pl-xl-3">
          <div className="shadow bg-white rounded">
            <p className="pt-3 pb-2 px-4 font-weight-bold border-bottom-light">
              Account settings
            </p>
            <form onSubmit={handleUpdate}>
              <div className="d-flex pb-1 flex-wrap px-2 border-bottom-light py-2">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="First Name" className="text-dark-50 d-block">
                    First Name
                  </label>
                  <Input
                    name="firstname"
                    placeholder="Omodunni"
                    value={accountDetails.firstName}
                    className="form-auth w-100"
                    onChange={handleChange("firstname")}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="First Name" className="text-dark-50 d-block">
                    First Name
                  </label>
                  <Input
                    name="lastname"
                    placeholder="Alake"
                    value={accountDetails.lastName}
                    className="form-auth w-100"
                    onChange={handleChange("lastname")}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="phone" className="text-dark-50 d-block">
                    Phone Number
                  </label>
                  <Input
                    type="phone"
                    name="phone"
                    placeholder="+234 812 345 6789"
                    value={accountDetails.phoneNumber}
                    className="form-auth w-100"
                    onChange={handleChange("phone")}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="email" className="text-dark-50 d-block">
                    Email address
                  </label>
                  <Input
                    type="email"
                    name="lastname"
                    placeholder="omodunni.alake@gmail.com"
                    value={accountDetails.emailAddr}
                    className="form-auth w-100"
                    onChange={handleChange("email")}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label
                    htmlFor="old password"
                    className="text-dark-50 d-block"
                  >
                    Old password
                  </label>
                  <InputPassword
                    value={accountDetails.oldPassword}
                    className="form-auth w-100"
                    onChange={handleChange("oldpassword")}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label
                    htmlFor="new password"
                    className="text-dark-50 d-block"
                  >
                    New Password
                  </label>
                  <InputPassword
                    placeholder="Baby123"
                    value={accountDetails.newPassword}
                    className="w-100"
                    onChange={handleChange("lastname")}
                  />
                </div>
              </div>

              <div className="mt-2 pb-4 px-2">
                <Button
                  className="btn-primary btn-submit col-4 mx-2"
                  type="submit"
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
