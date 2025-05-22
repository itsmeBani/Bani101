import React from 'react';
import {SocialMediaLink} from "../ProjectData.js";

function SocialMedia(props) {
    return (
        <div className="flex gap-2 place-items-start justify-start  w-full">
            {SocialMediaLink?.map((link, index) => (
                <a key={index} href={link.href} className="SocialMediaLinks">
                    <img alt={link.alt} src={link.src} />
                </a>
            ))}
        </div>
    );
}

export default SocialMedia;