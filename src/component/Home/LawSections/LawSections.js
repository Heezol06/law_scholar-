import React from 'react';

const LawSections = () => {
    return (
        <div className='container px-5 col-3 bg-secondary text-white flex py-10'>
            <div className='text-start'>
                <i class="fa-solid fa-user-tie fa-3x"></i>
                <h1 className='text-3xl'>CIVIL <br /> LITIGATION</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda eos impedit voluptate numquam accusamus maxime non, eaque alias sint.</p>
                <p>READ MORE</p>
            </div>
            <div className='text-start px-6'>
                <i class="fa-solid fa-unlock-keyhole fa-3x"></i>
                <h1 className='text-3xl'>CRIMINAL <br /> DEFENSE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda eos impedit voluptate numquam accusamus maxime non, eaque alias sint.</p>
                <p>READ MORE</p>
            </div>
            <div className='text-start'>
                <i class="fa-solid fa-gavel fa-3x"></i>
                <h1 className='text-3xl'>LAW OF <br />AGENCY </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda eos impedit voluptate numquam accusamus maxime non, eaque alias sint.</p>
                <p>READ MORE</p>
            </div>
        </div>
    );
};

export default LawSections;