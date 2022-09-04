import React from "react";

import Img from "../img/pattern.svg";
import Card from "../img/Group 255.svg";
import Logo from "../img/Logo.svg";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import Indicator from "../img/indicator.svg";
import { FaRegEyeSlash } from "react-icons/fa";

function SignIn() {
  return (
    <div>
      <section class="  h-full px-5 sm:px-20 md:h-screen ">
        <div class="container h-full ">
          <div class="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
            <div class=" w-full  p-10">
              <div class=" bg-white">
                <div class="g-0 items-center justify-center lg:flex  lg:flex-wrap">
                  <div class=" w-full md:w-2/3 ">
                    <img src={Logo} alt="" className=" absolute top-10" />
                    <div className="my-10 flex flex-col items-center justify-center ">
                      <form className="w-full text-center md:w-2/5 ">
                        <div className=" my-7 ">
                          <p class="my-2 text-3xl font-bold">
                            Sign in to Overpay
                          </p>
                          <p className="text-sm text-gray-400">
                            Send, spend and save smarter
                          </p>
                        </div>
                        <button className=" mb-5 flex w-full items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-100">
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
                        <div class="mb-4 ">
                          <input
                            type="text"
                            class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div class="relative mb-4 flex items-center justify-end">
                          <input
                            type="password"
                            class="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                          <span className="absolute px-5 text-xl text-gray-400">
                            <FaRegEyeSlash />
                          </span>
                        </div>
                        <div class="mb-6 flex items-center justify-between">
                          <div class="form-group form-check">
                            <input
                              type="checkbox"
                              class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                              id="exampleCheck2"
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="exampleCheck2"
                            >
                              Remember me
                            </label>
                          </div>
                          <a
                            href="/otp-auth"
                            class="font-semibold text-blue-700 hover:text-blue-900 "
                          >
                            Forgot password?
                          </a>
                        </div>
                        <div class="mb-5 pt-1 pb-1 text-center">
                          <button
                            class="text-md mb-3 inline-block w-full rounded-lg bg-secondary-color px-6 py-3 font-medium text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Sign in
                          </button>
                        </div>
                        <a class="text-lg text-gray-500" href="#!">
                          Don’t have an account?{" "}
                          <a href="/signup" className="">
                            <span className="font-semibold text-gray-800 hover:text-black">
                              Sign Up
                            </span>
                          </a>
                        </a>
                      </form>
                    </div>
                    <div className="px-10 pb-10">
                      <Footer />
                    </div>
                  </div>

                  <div class=" relative flex flex-1  items-center bg-secondary-color">
                    <img src={Img} alt="" className=" object-cover  " />
                    <div class="absolute text-center text-white md:mx-6 md:p-2">
                      <div className="mt-20 flex items-center justify-center ">
                        <img src={Card} alt="" className=" " />
                      </div>
                      <div className=" mt-10">
                        <h4 class="mb-6 text-xl font-bold sm:text-3xl ">
                          Get better with money
                        </h4>
                        <p class="text-xs text-gray-200 sm:text-sm">
                          Overpay help you set saving goals, earn cash back
                          offers, Go to disclaimer for more details and get
                          paychecks up to two days early. Get a $20 bonus when
                          you receive qualifying direct deposits
                        </p>
                      </div>
                      <div className=" mt-10 flex items-center justify-center">
                        <img src={Indicator} alt="" />
                      </div>
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

export default SignIn;
