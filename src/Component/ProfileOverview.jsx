import React from 'react';

function ProfileOverview() {
    return (
        <div className="w-full border-[#2D2D2D] border-[1px] p-6 lg:p-8 rounded-lg shadow-md  ">
            <h2 className="text-xl lg:text-3xl  font-bold  text-foreground-light  mb-4">Who I Am</h2>
            <p className="text-sm text-white lg:text-[16px] text-foreground-light-description leading-relaxed">
                I’m a passionate developer dedicated to turning ideas into impactful digital experiences. My journey in technology is fueled by curiosity and creativity.
            </p>
            <p className="text-sm pt-4 lg:text-[16px] text-foreground-light-description text-white leading-relaxed">
                I enjoy creating projects that blend functionality with great user experience, whether it’s developing responsive web applications, building mobile solutions, or exploring new tools and frameworks. I thrive on challenges that push me to think differently, adapt quickly, and keep learning. With each project, my goal is to combine innovation and purpose to craft solutions that truly make a difference.

            </p>
        </div>
    );
}

export default ProfileOverview;