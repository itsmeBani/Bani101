import React from 'react';

function Header({title,description}) {
    return (
        <div className=" px-5  lg:px-[8rem] py-5 lg:py-[3rem]  ">
            <h1 className="Kerif text-white text-xl lg:text-3xl mb-2 flex place-items-center gap-2">{title} <div className="w-[120px] h-[2px] lg:h-[3px]  bg-[#00e673]" ></div></h1>
            <p className="text-gray-200 opacity-70 leading-5 text:sm lg:text-lg max-w-xl">
                {description}
             </p>
        </div>

    );
}

export default Header;