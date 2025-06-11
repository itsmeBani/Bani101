import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Loader, Loader2} from "lucide-react";
import {toast} from "sonner";
import { z } from 'zod';

function ContactForm() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false)

    const contactSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        message: z.string().min(1, "Message cannot be empty")
    });
    const sendEmail = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim()
        };

        const validation = contactSchema.safeParse(formData);

        if (!validation.success) {
            const firstError = validation.error.errors[0];
            toast.error('Validation error', {
                description: firstError.message
            });
            return;
        }

        setLoading(true);

        try {
            const emailResponse = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );

            if (emailResponse.status === 200) {
                form.reset();
                toast.success('Email sent successfully', {
                    description: 'Your message has been delivered to Jiovani.',
                });
            }
        } catch (e) {

            toast.error('Failed to send email', {
                description: 'There was a problem delivering your message. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">

            <div className="w-full ">
                <label className="block mb-2  text-xs lg:text-sm  text-foreground-light-description ">
                    Name
                </label>
                <input name="name" type="text"
                       className="w-full bg-background border-[#2D2D2D] placeholder:text-white/50   text-white text-sm border  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                       placeholder="John Doe"/>
            </div>
            <div className="w-full ">
                <label className="block mb-2 text-xs lg:text-sm  text-foreground-light-description">
                    Email
                </label>
                <input name="email"
                       className="w-full bg-background border-[#2D2D2D] placeholder:text-white/50   text-white text-sm border  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                       placeholder="johndoe@gmail.com"/>
            </div>
            <div className="h-full  flex flex-col">
                <label htmlFor="first_name"
                       className="block  text-xs lg:text-sm text-foreground-light-description  mb-1  ">Message</label>
                <textarea name="message"
                          className="w-full resize-none  h-full md:h-[120px] bg-transparent placeholder:text-white/50   bg-background border-[#2D2D2D]  text-white text-sm border  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                          placeholder="...."/>

            </div>

            <div className="flex w-full ">
                <button  disabled={loading}   type={"submit"}
                         className="w-full h-[40px] px-4 py-2 flex justify-center text-white place-items-center   bg-[#006239]  text-foreground-light border border-[#00e673] rounded-[6px] text-[14px] relative"
                        style={{textShadow: '2px 4px 3px rgba(0, 0, 0, 0.1)'}}>{loading? <Loader className="animate-spin "  size={20}/> : "Send"}
                </button>

            </div>
        </form>
    );
}

export default ContactForm;