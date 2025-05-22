import React from 'react';
import Header from "../Component/Header.jsx";
import SocialMedia from "../Component/SocialMedia.jsx";

function Contact() {
    return (
        <section className=" h-full w-full flex flex-col">
            <div>
                <Header
                    title={"Contact Me"}
                    description={"Get in touch with me for any inquiries or collaborations."}
                  />
                <div className=" lg:px-[8rem] px-5 lg:pb-[3rem]">

                    <SocialMedia/>





x



                </div>

            </div>
        </section>
    );
}

export default Contact;