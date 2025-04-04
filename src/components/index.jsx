import React from "react";
import { Outlet } from "react-router";
import { Header, Footer } from "@components/common";

const Index = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
