import React from 'react';

function PhotoCollage(props) {
    return (
        <section className="w-full   px-5    lg:px-[12rem] ">

            <div className=" w-full h-full group  p-5  rounded-lg border-[#2D2D2D] border-[1px]   grid gap-3 grid-cols-1 lg:grid-cols-3">
                {Array.from({length:6}).map((_, index)=>{
                    return (
                        <div className="w-full  bg-[#1E1E1E] rounded-md h-[200px]"></div>
                    )
                })}
            </div>

        </section>
    );
}

export default PhotoCollage;