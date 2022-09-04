import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Auth() {
  const [showcard, setshowcard] = useState("false");
  function card() {
    if (showcard === "false") {
      setshowcard("true");
    }
    if (showcard === "true") {
      setshowcard("complete");
    }
  }
  return (
    <div className="bg-gray-100">
      <Nav />
      {/* Verify Otp */}
      {showcard === "false" && (
        <div className=" flex h-screen items-center justify-center px-2 ">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md ">
            <p className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">
              Verify your email
            </p>
            <p className="py-5 text-center text-gray-400">
              We have sent code to your email{" "}
              <span className="font-semibold text-gray-800">
                alesiaka******@mail.com
              </span>
            </p>
            <div className="grid grid-cols-5 gap-x-4 py-5">
              <div className="mb-4 ">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding  p-3 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-4 ">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-4 ">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-4 ">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-4 ">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>

            <button
              onClick={card}
              className=" w-full rounded-lg bg-secondary-color py-2 text-white"
            >
              Verify Account
            </button>
            <p className=" py-5 text-center text-gray-400">
              Resend code in{" "}
              <span className="font-medium text-gray-800">59:00</span>
            </p>
          </div>
        </div>
      )}
      {showcard === "true" && (
        <>
          {/* Send Link */}
          <div className=" flex h-screen items-center justify-center px-2 ">
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md ">
              <p className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">
                Need help with your account?
              </p>
              <p className="py-5 text-center text-gray-400">
                Enter the email address associated with your account and we will
                send you a link to reset your password.
              </p>
              <div className="mb-7 ">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="enter your email"
                />
              </div>

              <button
                onClick={card}
                className=" w-full rounded-lg bg-secondary-color py-3 text-white"
              >
                Send Link
              </button>
              <p className=" py-5 text-center font-semibold text-gray-800">
                Forgot your email ?
              </p>
            </div>
          </div>
        </>
      )}
      {showcard === "complete" && (
        <>
        <div className=" flex h-screen items-center justify-center px-2">
            <div className="max-w-sm w-full py-10 rounded-lg border border-gray-200 bg-white shadow-md ">
              <p className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">
              Hi, Johne Doe!
              </p>
              <p className="py-2 text-center text-gray-400">
              You’re logged in. Well done!
              </p>
             
              <div className=" p-5">
              <a href="/" className="">
              <button
                
                className=" w-full    rounded-lg bg-secondary-color py-2  text-white"
              >
                Log out
              </button>
              </a>
              </div>
            </div>
          </div>
          
        </>
      )}

      <div className="px-5 pb-10">
        <Footer />
      </div>
    </div>
  );
}

export default Auth;
