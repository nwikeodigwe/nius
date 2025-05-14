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
      {isOpen && (
        <div
          onClick={handleClick}
          className={`fixed flex inset-0 h-screen z-50 justify-end bg-black/15 backdrop-blur-2xl w-full `}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`flex flex-col gap-10 items-center justify-center w-[80vw] h-full bg-primary text-white transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col gap-10 font-semibold sm:text-xl md:text-2xl items-center">
              {listItems}
            </ul>
            <NavLink
              to="/signup"
              onClick={handleClick}
              className="btn btn-white sm:text-xl md:text-2xl font-sembold"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
