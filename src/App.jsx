import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
    // state to toggle between login and signup components
    const [isLogin, setIsLogin] = useState(false);

    return (
        // full height
        <div className="h-dvh relative flex items-center justify-center bg-gradient-to-tr from-[white] via-[#B9DCE0] to-[#1DB390]">
            {/* card */}
            <div className="text-black bg-[white] shadow-2xl p-8 w-[90%] max-w-md transition-all duration-500">
                
                {/* header section with logo and text */}
                <div className="flex gap-1 items-center justify-center">
                    <h1 className="text-5xl font-bold text-start">HPE</h1>

                    <div className="flex flex-col leading-[1.1] items-start justify-start">
                        <p className="text-xl font-bold text-[#FF8400]">
                            aruba
                        </p>
                        <p className="font-bold">networking</p>
                    </div>
                </div>

                {/* conditional rendering of login or signup form */}
                {isLogin ? <Login /> : <Signup />}

                {/* toggle text */}
                <p className="text-center text-black mt-6">
                    {isLogin
                        ? "Don’t have an account?"
                        : "Already have an account?"}
                    
                    {/* button to switch between login/signup */}
                    <button
                        className="text-black font-semibold ml-2 hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Sign up" : "Log in"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default App;
