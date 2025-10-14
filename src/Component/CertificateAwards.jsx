import React, {useState} from 'react';
import {CertificateData, PhotoCollageData} from "../ProjectData.js";
import {motion} from "motion/react";
import {HomeModernIcon} from "@heroicons/react/16/solid/index.js";
import {AwardIcon, DownloadIcon, ExpandIcon} from "lucide-react";
import Modal from "./Modal.jsx";


function CertificateAwards(props) {

    const [showModal, setShowModal] = useState(false);
    const [previewCert, setPreviewCert] = useState(null)


    const HandlePreviewCert=(cert)=>{
        setShowModal(true)
        setPreviewCert(cert)
    }
    const handleDownload = (filepath,description) => {
        const link = document.createElement('a');
        link.href = filepath;
        link.download = description;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="w-full   px-5    lg:px-[12rem] ">
            <div className="w-full h-full group  p-5  rounded-lg border-[#2D2D2D] border-[1px] ">
                <h1 className="text-lg lg:text-[25px] flex place-items-center gap-3 font-semibold text-foreground-light  mb-2">
                    <div className="p-2  bg-[#00311D] rounded-md">
                        <AwardIcon className="w-5 text-brand-600 "/>
                    </div>
                    Certificates
                </h1>
                <p className="text-foreground-light-description leading-5 mb-6">
                    A collection of certificates and awards that highlight our efforts, achievements, and dedication
                    throughout various projects and activities.
                </p>
                <div className="   grid gap-3 grid-cols-1 lg:grid-cols-3">
                    {CertificateData.map((file, index) => {
                        return (
                            <div key={index}
                                        className="overflow-hidden relative w-full  group/item  rounded-md ">
                                <img src={file.url} className="object-top scale-100  "/>

                                <div
                                    className="absolute w-full h-full group-hover/item:flex  hidden  bg-black/70  top-0 "/>
                                <div className=" group-hover/item:flex right-3 hidden gap-2 absolute top-4">
                                    <button onClick={()=>HandlePreviewCert(file.url)}><ExpandIcon size={18} color="white"/>
                                    </button>
                                    <button onClick={()=>handleDownload(file?.fileDownload,file?.description)}><DownloadIcon size={18} color={"white"}/></button>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
            <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
                {previewCert &&   <img src={previewCert} alt={""} className="flex rounded-xl overflow-hidden object-contain w-[90%]  lg:w-[100%] lg:h-[70dvh]    "></img>}
            </Modal>
        </section>
    );
}

export default CertificateAwards;