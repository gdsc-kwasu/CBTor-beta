/** @format */

import React from "react";
import avatar from "../../assets/img/dunni.png";
import "../../assets/styles/components/dashboard.scss";
import Input, { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";

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

  const handleChange = (input) => (e) => {
    setAccountDetails({
      [input]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <section id="profile-root">
      <div className="background vw-100" />
      <div className="profile-details d-justify-between col-sm-12">
        <div className="col-md-4 shadow py-3 mx-1 bg-white profile-card">
          <div className="d-center">
            <img src={avatar} alt="user profile image" />
          </div>
          <p className="small text-center text-dark font-weight-bold">
            Omodunni Alake
          </p>
          <p className="small text-center text-dark-50 pb-2">
            omodunni.alake@gmail.com
          </p>
          <hr className="mb-3 profile-divider" />
          {tests.map((test, index) => {
            return (
              <div key={index} className="d-justify-between px-2">
                <p className="small text-dark">{test.title}</p>
                <p className="text-success">{test.score}</p>
              </div>
            );
          })}
        </div>
        <div className="col-md-8 shadow bg-white account-details">
          <p className="small divide pt-3 pb-1 px-2">Account settings</p>
          <hr className="mb-3 profile-divider" />
          <form onSubmit={handleUpdate}>
            <div className="d-flex pb-1">
              <div className="col-sm-6">
                <label htmlFor="First Name" className="text-dark-50 d-block">
                  First Name
                </label>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Omodunni"
                  value={accountDetails.firstName}
                  className="form-control w-100"
                  onChange={handleChange("firstname")}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="First Name" className="text-dark-50 d-block">
                  First Name
                </label>
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Alake"
                  value={accountDetails.lastName}
                  className="form-control w-100"
                  onChange={handleChange("lastname")}
                  required
                />
              </div>
            </div>
            {/* line 2 */}
            <div className="d-flex py-2">
              <div className="col-sm-6">
                <label htmlFor="phone" className="text-dark-50 d-block">
                  Phone Number
                </label>
                <Input
                  type="text"
                  name="phone"
                  placeholder="+234 812 345 6789"
                  value={accountDetails.phoneNumber}
                  className="form-control w-100"
                  onChange={handleChange("phone")}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="email" className="text-dark-50 d-block">
                  Email address
                </label>
                <Input
                  type="email"
                  name="lastname"
                  placeholder="omodunni.alake@gmail.com"
                  value={accountDetails.emailAddr}
                  className="form-control w-100"
                  onChange={handleChange("email")}
                  required
                />
              </div>
            </div>
            {/* line 3 */}
            <div className="d-flex py-2">
              <div className="col-sm-6">
                <label htmlFor="old password" className="text-dark-50 d-block">
                  Old password
                </label>
                <InputPassword
                  value={accountDetails.oldPassword}
                  className="form-control w-100"
                  onChange={handleChange("oldpassword")}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="new password" className="text-dark-50 d-block">
                  New Password
                </label>
                <InputPassword
                  placeholder="Baby123"
                  value={accountDetails.newPassword}
                  className="form-control w-100"
                  onChange={handleChange("lastname")}
                  required
                />
              </div>
            </div>
            <hr className="mb-3 profile-divider my-3" />
            <div className="mt-2 pb-2">
              <Button className="btn-primary btn-md mx-2" type="submit">
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
