import React from 'react'
import openBook from '../img/openBook.jpg';

 const IntroSection = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Welcome to</h2>
                </div>
                <div>
                    <h2>All In</h2>
                </div>
                <div>
                    <h2>One</h2>
                </div>
            </div>
            <div>
                <img src={openBook} alt="" />
            </div>

        </div>

    );
}

export default IntroSection;
