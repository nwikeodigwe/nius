import React from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";
import { Header, Footer } from "@components/common";

const Index = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
