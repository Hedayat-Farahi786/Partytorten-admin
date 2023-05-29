import type { FC } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { useDispatch } from "react-redux";
import { toggleShowSidebar } from "../api/features/account";
import { FaBars } from "react-icons/fa";

const ExampleNavbar: FC = function () {
  const dispatch = useDispatch();
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaBars
              className="mr-3 text-xl"
              onClick={() => dispatch(toggleShowSidebar())}
            />

            <Navbar.Brand href="/">
              <img
                alt=""
                src="/images/text-logo.png"
                className="ml-3 h-6 sm:h-8"
              />
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ExampleNavbar;
