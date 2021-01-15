/** @format */

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Modal from "./Modal";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row no-gutters vh-100">
        {isOpen && <div className="modal-bg d-lg-none"></div>}

        {/* Sidebar */}
        <Sidebar
          className={isOpen ? "open" : "sidebar"}
          closer={() => setIsOpen(false)}
        />

        {/* dashboard main content */}
        <main className="col d-flex flex-column bg-light vh-max-100 overflow-scroll dashboard">
          <Navbar
            toggler={() => setIsOpen(true)}
            setModal={() => setModal(true)}
          />
          {modal && <Modal setModal={setModal} />}
          <section className="w-100 h-100 app-container px-2 px-lg-3 px-xxl-0 py-3 py-xl-4">
            {children}
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
