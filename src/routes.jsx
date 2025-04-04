import { Routes as Router, Route } from "react-router";
import Layout from "@components/index";
import Home from "@components/home";
import Constitution from "@components/constitution";
import Community from "@components/community";
import About from "@components/about";
import Contact from "@components/contact";
import Signup from "@components/signup";
import Gallery from "@components/gallery";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="constitution" element={<Constitution />} />
        <Route path="community" element={<Community />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Router>
  );
};

export default Routes;
