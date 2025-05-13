import React from "react";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

type Items = { label: string; to: string };
type Props = { className: string; items: Items[] };

const MobileNav = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const listItems = props.items.map((item, i) => (
    <li key={i}>
      <NavLink onClick={handleClick} to={item.to}>
        {item.label}
      </NavLink>
    </li>
  ));

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={props.className}>
      <nav className={`${isOpen && "text-white"} relative text-4xl z-200`}>
        <button onClick={handleClick}>
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </nav>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-10 absolute top-0 right-0 z-50 flex items-center justify-center w-[80%] h-screen bg-primary text-white`}
      >
        <ul className="flex flex-col gap-10 font-semibold text-2xl items-center">
          {listItems}
        </ul>
        <NavLink
          to="/signup"
          onClick={handleClick}
          className="btn btn-white text-2xl font-sembold"
        >
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
