import React,{useRef} from "react";
import GradientBtn from "./GradientBtn";
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="p-4 text-left">
      <form
        ref={form} onSubmit={sendEmail}
      >
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light text-purple-500">Ad-Soyad</label>
            <input
              type="text"
              name="name"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none bg-gradient-to-r from-thOrange to-thBlue"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light text-red-500">Telefon</label>
            <input
              type="text"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none bg-gradient-to-r from-thOrange to-thBlue"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light text-blue-500">E-Mail</label>
            <input
              type="email"
              name="email"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none bg-gradient-to-r from-thOrange to-thBlue"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light text-green-500bg-gradient-to-r from-thOrange to-thBlue">
              Mesaj
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none bg-gradient-to-r from-thOrange to-thBlue"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <GradientBtn className="ml-4 mt-4 capitalize" title="Bize Ulaş!" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
