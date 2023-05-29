import { Sidebar, TextInput } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
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
    <div
      className={`${showSidebar ? "flex" : "hidden"}`}
    >
      <Sidebar
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
                <Link to="/">
                  <Sidebar.Item
                    icon={HiChartPie}
                    onClick={handleToggleSidebar}
                    className={
                      "/" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                    }
                  >
                    Dashboard
                  </Sidebar.Item>
                </Link>
                <Link to="/admin/products">
                  <Sidebar.Item
                    icon={HiShoppingBag}
                    onClick={handleToggleSidebar}
                    className={
                      "/admin/products" === currentPage
                        ? "bg-gray-100 dark:bg-gray-700"
                        : ""
                    }
                  >
                    Products
                  </Sidebar.Item>
                </Link>
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
    </div>
  );
};

export default ExampleSidebar;
