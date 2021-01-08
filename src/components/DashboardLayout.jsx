/** @format */

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row no-gutters vh-100">
        {isOpen && <div className="modal-bg d-md-none"></div>}

        {/* Sidebar */}

        <Sidebar
          className={isOpen ? "open" : "sidebar"}
          closer={() => setIsOpen(false)}
        />

        {/* dashboard maon content */}

        <main className="col d-flex flex-column">
          <Navbar toggler={() => setIsOpen(true)} />
          <section className="w-100 h-100 app-container px-3 px-lg-0 py-3">{children}</section>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
