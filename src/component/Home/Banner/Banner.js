import React from 'react';
import banner from "../../../recource/judges-gavel-book-wooden-table-law-justice-concept-background.jpg";
import "../Banner/Banner.css"
const Banner = () => {
    return (
        <div className='banner'>
            <div className='text-accent text-start container py-56 px-10'>
                <h3 className='text-4xl font-bold'>GUIDING SUCCESSFUL RESOLUTIONS, <br /> QUICKLY AND INTELLIGENTLY</h3>
                <h4 className='text-xl fw-bolder my-5'>Committed to unparalleled service <br /> and client satisfaction</h4>
                <button className='btn btn-secondary'>More Info</button>
            </div>
        </div>
    );
};

export default Banner;