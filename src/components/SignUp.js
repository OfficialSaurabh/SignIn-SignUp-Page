import React from "react";
import Img from "../img/pattern.svg";
import Card from "../img/Group 254.svg";
import Logo from "../img/Logo1.svg";
import Indicator from "../img/indicator.svg";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  return (
    <div>
      <section className=" h-full px-5 sm:px-20 md:h-screen  ">
        <div className=" container h-full  ">
          <div className="g-6  flex h-full flex-wrap items-center justify-center text-gray-800">
            <div className=" w-full ">
              <div className=" bg-white ">
                <div className="g-0 items-center justify-center lg:flex  lg:flex-wrap ">
                  <div className=" relative flex flex-1  items-center bg-secondary-color">
                    <img src={Img} alt="" className=" object-cover  " />
                    <img
                      src={Logo}
                      alt=""
                      className=" absolute top-6 left-7 "
                    />

                    <div className="absolute text-center text-white md:mx-6 md:p-2">
                      <div className="mt-20 flex items-center justify-center ">
                        <img src={Card} alt="" className=" " />
                      </div>
                      <div className=" sm:mt-10 mt-10 px-2">
                        <h4 className="mb-6 text-xl font-bold sm:text-3xl ">
                        Speady, Easy and Fast
                        </h4>
                        <p className="text-xs text-gray-200 sm:text-sm">
                          Overpay help you set saving goals, earn cash back
                          offers, Go to disclaimer for more details and get
                          paychecks up to two days early. Get a <span className="text-yellow-400">$20</span> bonus when
                          you receive qualifying direct deposits
                        </p>
                      </div>
                      <div className=" mt-10 flex items-center justify-center">
                        <img src={Indicator} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className=" w-full lg:w-2/3 ">
                    <div className="my-10 flex flex-col items-center justify-center ">
                      <form className="w-full  text-center md:w-2/5 ">
                        <div className=" my-7 ">
                          <p className="my-2 text-3xl font-bold">
                            Sign up for an account
                          </p>
                          <p className="text-sm text-gray-400">
                            Send, spend and save smarter
                          </p>
                        </div>
                        <button className=" mb-5 flex  w-full items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-100">
                          <span className=" px-2 text-xl">
                            <FcGoogle />
                          </span>{" "}
                          Sign in with Google
                        </button>
                        <span className="flex items-center justify-center space-x-2 py-4">
                          <span className="h-px w-28 bg-gray-300 "></span>
                          <span className="font-normal text-gray-400">
                            Or with email{" "}
                          </span>
                          <span className="h-px w-28 bg-gray-300 "></span>
                        </span>
                        <div className="grid grid-cols-2 gap-x-4">
                          <div className="mb-4 ">
                            <input
                              type="text"
                              className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="mb-4 ">
                            <input
                              type="text"
                              className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="mb-4 ">
                          <input
                            type="text"
                            className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div className="relative mb-4 flex items-center justify-end">
                          <input
                            type="password"
                            className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                          <span className="absolute px-5 text-xl text-gray-400">
                            <FaRegEyeSlash />
                          </span>
                        </div>
                        <div className="mb-6 flex flex-wrap items-center justify-center ">
                          <a href="#!" className="text-left text-gray-400 ">
                            By creating an account, you agreeing to our{" "}
                            <a
                              href="#!"
                              className=" font-semibold text-gray-700"
                            >
                              Privacy Policy
                            </a>
                            , and{" "}
                            <a
                              href="#!"
                              className="font-semibold text-gray-700"
                            >
                              {" "}
                              Electronics Communication Policy.
                            </a>
                          </a>
                        </div>
                        <div className="mb-5 pt-1 pb-1 text-center">
                          <button
                            className="text-md mb-3 inline-block w-full rounded-lg bg-secondary-color px-6 py-3 font-medium text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Sign in
                          </button>
                        </div>
                        <p className="text-lg text-gray-500">
                          Already have an account?
                          <a className="" href="/">
                            <span className="font-semibold text-gray-800 hover:text-black ">
                              {" "}
                              Sign In
                            </span>
                          </a>
                        </p>
                      </form>
                    </div>
                    <div className="px-10 pb-10 ">
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
