import React from "react";
import { CheckCircle2 } from "lucide-react";

const Welcome = ({ props }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center backdrop-blur-sm ">
      <div className="bg-white px-8 py-6 rounded-2xl shadow-xl flex flex-col items-center gap-3 transform transition-all duration-300">
        <CheckCircle2 className="text-green-500 w-12 h-12 " />
        <h2 className="text-xl font-semibold text-gray-800">
          {props} Successful!
        </h2>
        <p className="text-gray-500 text-sm text-center">
          You’ve successfully {props.toLowerCase()} your account.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
