import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-white p-8">
        <div className="flex justify-between">
          <ul>
            <h1 className="text-blue-900 font-bold text-left">
              Small-to-Medium Business
            </h1>
            <hr className="border-gray-300 my-2" />
            <div className="flex justify-between space-x-8 ">
              <ul className="text-left mb-4">
                <p className="my-2 font-bold">Introduction</p>
                <li className="my-2 font-bold">Getting Started</li>
              </ul>

              <ul className="text-left mb-4">
                <p className="font-bold">All Solutions</p>
                <li className="my-2">Accept Payments</li>
                <li className="my-2">Make Payments</li>
                <li className="my-2">Manage Risk</li>
                <li className="my-2">Accelerate Growth</li>
                <li className="my-2">Streamline Operations</li>
              </ul>
            </div>
          </ul>
          <ul>
            <h1 className="text-blue-900 font-bold text-left">Enterprise</h1>
            <hr className="border-gray-300 my-2" />
            <div className="flex justify-between space-x-8">
              <ul className="text-left mb-4">
                <p className="my-2 font-bold">Introduction</p>
                <li className="my-2 font-bold">Marketplace & Partners</li>
              </ul>

              <ul className="text-left mb-4">
                <p className="my-2 font-bold">Platform & Solutions</p>
                <li className="my-2" >Accept Payments</li>
                <li className="my-2" >Make Payments</li>
                <li className="my-2" >Manage Risk</li>
                <li className="my-2" >Accelerate Growth</li>
                <li className="my-2" >Streamline Operations</li>
              </ul>
            </div>
          </ul>
          <ul>
            <h1 className="text-blue-900 font-bold text-left">More</h1>
            <hr className="border-gray-300 my-2" />
            <li className="text-left mb-4 font-bold">Nonprofits</li>
            <li className="text-left mb-4 font-bold">Pricing</li>
            <li className="text-left mb-4 font-bold">Resource Center</li>
          </ul>
        </div>
      </div>
    </>
  );
}
