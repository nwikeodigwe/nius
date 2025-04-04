import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const TabContext = React.createContext();

const Tab = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(props.open || false);

  return (
    <TabContext.Provider value={{ open, setOpen }}>
      <div className={`flex flex-col ${props.className}`}>{children}</div>
    </TabContext.Provider>
  );
};

const TabTrigger = ({ children, ...props }) => {
  const { open, setOpen } = React.useContext(TabContext);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`flex items-center justify-between cursor-pointer ${props.className}`}
    >
      {children}
      {open ? <FaAngleDown /> : <FaAngleRight />}
    </div>
  );
};

const TabContent = ({ children, ...props }) => {
  const { open } = React.useContext(TabContext);
  return (
    <div className={`${open ? props.className : "hidden"}`}>{children}</div>
  );
};

export { Tab, TabTrigger, TabContent };
