import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
    return (
        <>
            <div className="w-full text-white">
                <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/e5fd7c1e-45e0-4cce-80a2-5f093fc44ef8/GB-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />

                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl font-bold md:text-5xl">My Movies</h1>
                </div>
            </div>
            <SavedMovies />
        </>
    );
};

export default Account;
