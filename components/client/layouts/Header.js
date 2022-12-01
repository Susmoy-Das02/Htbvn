import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import logo from "../../../public/htb-logo.png";
import Language from "../../common/Language";
import { en } from "../../../public/locales/common/en";
import { vn } from "../../../public/locales/common/vn";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;
  return (
    <header
      aria-label="Site Header"
      className="bg-[#251B37]  oswald fixed w-full shadow-lg shadow-[#ff78784b] z-50"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-[#FFECEF] dark:text-teal-300" href="/">
              <div className="w-20 mx-5 cursor-pointer ">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-100 transition hover:text-[#FFECEF] dark:text-white dark:hover:text-white/75"
                    href="/About"
                  >
                    {t.AboutUs}
                  </Link>
                </li>
                <li className=" p-4 text-sm font-normal text-gray-100 transition hover:text-[#FFECEF]">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center">
                        {t.Products}
                        <HiOutlineChevronDown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                All Products
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Garments Products
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Wood Products
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Minerals Products
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                <li className=" p-4 text-sm font-normal text-gray-100 transition hover:text-[#FFECEF]">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center">
                        {t.Services}
                        <HiOutlineChevronDown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                All Service
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Logistic Service
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                It Service
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/Product"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Other Service
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                <li>
                  <Link
                    className="text-gray-100 transition hover:text-[#FFECEF] dark:text-white dark:hover:text-white/75"
                    href="/Audit"
                  >
                    {t.Audit}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-100 transition hover:text-[#FFECEF] dark:text-white dark:hover:text-white/75"
                    href="/Clients"
                  >
                    {t.Clients}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-100 transition hover:text-[#FFECEF] dark:text-white dark:hover:text-white/75"
                    href="/OurTeam"
                  >
                    {t.OurTeam}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-100 transition hover:text-[#FFECEF] dark:text-white dark:hover:text-white/75"
                    href="/Contact"
                  >
                    {t.ContactUs}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-[#FFCACA] px-5 py-2.5 text-sm font-medium text-[#251B37]"
                  href="/Login"
                >
                  {t.Login}
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#251B37] dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    href="/Register"
                  >
                    {t.Register}
                  </Link>
                </div>
                <Language />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
