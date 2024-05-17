import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone, MapPin } from "lucide-react";

function ContactForm() {
  const form = useRef();

  const notifyError = () => toast.error("Please fill out all fields.");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let hasEmptyField = false;
    for (let [key, value] of formData.entries()) {
      if (key !== "phone" && value.trim() === "") {
        hasEmptyField = true;
        break;
      }
    }

    if (hasEmptyField) {
      notifyError();
    } else {
      emailjs
        .sendForm("service_l8c1a4d", "template_itd52m2", form.current, {
          publicKey: "yG_II5-rOzHb1knZe",
        })
        .then(
          () => {
            toast.success("The message has been successfully sent!✅");
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  
  return (
    <div id="contacts" className="py-10 lg:py-20 ">
      <h3 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-10 lg:mb-20">
        Get in touch with us
      </h3>
      <div className="flex justify-center">
        <div className="container flex flex-col sm:flex-row justify-between bg-white shadow-md rounded-lg p-5 gap-8">
          <div className="contact-info max-w-xs sm:max-w-1/3 lg:max-w-none flex flex-col justify-between gap-2">
            <div>
              <h3 className="title font-semibold text-xl mb-3">
                Let's get in touch:
              </h3>
              <p className="text text-[#444]">
                Please ensure all fields are correctly filled out before
                submitting your inquiry. Thank you for choosing our tour agency!
              </p>
            </div>
            <div className="social-media">
              <div className="pyramid">
                <a
                  href="tel:+998998373560"
                  className="level level-1 flex items-end gap-3"
                >
                  <span>
                    <Phone />
                  </span>
                  <p className="text-[#222] mt-2 decoration-solid">
                    +998 99 837 35 60
                  </p>
                </a>
                <a
                  href="mailto:munism889@gmail.com"
                  className="level level-2 mt-2 flex items-end gap-3"
                >
                  <span>
                    <Mail />
                  </span>
                  <p className="text-[#222] mt-2">munism889@gmail.com</p>
                </a>
                <span className="level level-3 mt-2 flex items-end gap-3">
                  <span>
                    <MapPin />
                  </span>
                  <p className="text-[#222] mt-2">
                    Uzbekistan, Tashkent, Chilanzar district
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-form relative max-w-full sm:w-1/2">
            <form ref={form} onSubmit={sendEmail}>
              <h3 className="title text-[#222] font-semibold text-xl mb-3">
                Contact with us:
              </h3>
              <div className="input-container mb-4">
                <p className="text-[#222] mb-1">Full Name</p>
                <input
                  type="text"
                  name="to_name"
                  className="input border border-gray-500 border-solid bg-white w-full text-[#222] outline-none rounded-md text-center py-2"
                  placeholder="Li Sergey"
                  required
                />
              </div>
              <div className="input-container mb-4">
                <p className="text-[#222] mb-1">Phone</p>
                <input
                  className="input border border-gray-500 border-solid bg-white w-full text-[#222] outline-none resize-none rounded-md text-center py-2"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+998 123 45 67"
                />
              </div>
              <div className="input-container textarea mb-4">
                <p className="text-[#222] mb-1">Leave us a message...</p>
                <textarea
                  name="message"
                  className="input border border-gray-500 border-solid bg-white w-full text-[#222] outline-none resize-none rounded-md text-center py-2"
                  placeholder="Input a message...."
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn bg-[#222] text-white font-semibold py-2 px-4 rounded-lg mt-4 cursor-pointer"
              />
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
