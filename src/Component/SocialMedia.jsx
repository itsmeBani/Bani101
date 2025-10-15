import React from 'react';
import {SocialMediaLink} from "../ProjectData.js";

function SocialMedia() {
    return (
        <div className="flex flex-wrap gap-2 items-start justify-start w-full lg:justify-start justify-center">
            {SocialMediaLink?.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="SocialMediaLinks transition-transform transform hover:scale-110"
                >
                    <img
                        alt={link.alt}
                        src={link.src}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6"
                    />
                </a>
            ))}
        </div>

    );
}

export default SocialMedia;