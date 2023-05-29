import { Sidebar, TextInput } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSidebar } from "../api/features/account";
import { Link } from "react-router-dom";

const ExampleSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  const showSidebar = useSelector((state: any) => state.account.showSidebar);

  const dispatch = useDispatch();

  useEffect(() => {
    const newPage = window.location.pathname;
    setCurrentPage(newPage);
  }, [setCurrentPage]);

  const handleToggleSidebar = () => {
    dispatch(toggleShowSidebar());
  };

  return (
    <>
      <button
        className="absolute top-2 left-2 bg-gray-300 px-2 py-1 rounded-md"
        onClick={handleToggleSidebar}
      >
        Toggle Sidebar
      </button>
      <Sidebar
        className={`${showSidebar ? "flex" : "hidden"} md:flex`}
        aria-label="Sidebar with multi-level dropdown example"
      >
        <div className="flex h-full flex-col justify-between py-2">
          <div>
            <form className="pb-3 md:hidden">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                size={32}
              />
            </form>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="/"
                  icon={HiChartPie}
                  onClick={handleToggleSidebar}
                  className={
                    "/" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                  }
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  icon={HiShoppingBag}
                  onClick={handleToggleSidebar}
                  className={
                    "/e-commerce/products" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                >
                  <Link to="/e-commerce/products">Products</Link>
                </Sidebar.Item>
                <Sidebar.Item
                  href="/users/list"
                  icon={HiUsers}
                  onClick={handleToggleSidebar}
                  className={
                    "/users/list" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                >
                  Users list
                </Sidebar.Item>
                <Sidebar.Item
                  onClick={handleToggleSidebar}
                  href="/authentication/sign-in"
                  icon={HiLogin}
                >
                  Sign in
                </Sidebar.Item>
                <Sidebar.Item
                  onClick={handleToggleSidebar}
                  href="/authentication/sign-up"
                  icon={HiPencil}
                >
                  Sign up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default ExampleSidebar;
