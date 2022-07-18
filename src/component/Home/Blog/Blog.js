import React from 'react';

const Blog = () => {
    return (
        <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-accent mt-6  shadow-lg rounded-lg text-black">
                <div class="flex-shrink-0">
                    <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <img src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png" alt="" />
                    </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-black font-semibold py-4">
                    Public International Law
                </h3>
                <p class="text-md  text-black  py-4">
                    international law, also called public international law or law of nations, the body of legal
                </p>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-accent shadow-lg rounded-lg text-black">
                <div class="flex-shrink-0">
                    <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <img src="https://cdn-icons-png.flaticon.com/512/1001/1001218.png" alt="" />
                    </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-black font-semibold py-4">
                    Industrial Law
                </h3>
                <p class="text-md text-black py-4">
                    Industrial Law relates to the laws governing industrial enterprises. These can include a wide range of
                </p>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-accent shadow-lg rounded-lg text-black">
                <div class="flex-shrink-0">
                    <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <img src="https://cdn-icons-png.flaticon.com/512/4252/4252299.png" alt="" />
                    </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-black font-semibold py-4">
                    Land Law
                </h3>
                <p class="text-md  text-black py-4">
                    Land Law  law is designed to regulate the relationship of persons to things whether tangible or intangible,
                </p>
            </div>
        </div >


    );
};

export default Blog;