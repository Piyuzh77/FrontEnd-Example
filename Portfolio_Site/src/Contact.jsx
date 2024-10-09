import email from "./assets/email.png";
import phone from "./assets/phone.png";
import location from "./assets/location.png";
import Footer from "./footer";
import Skills from "./Skills";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly  items-baseline p-8 relative bg-gray-100 font-inter">
        <h2 className="font-inter font-bold text-2xl relative top-[45px] left-[960px]">Contact Information</h2>
        <h2 className="text-2xl font-bold mb-8 p-3 relative top-0 left-[380px] text-center">
          Leave Me Your Info
        </h2>
        <div className="flex space-x-8 w-full justify-center">
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Your Full Name (required)
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-[#F0F0F6] rounded-md focus:outline-none focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Your Email Id (required)
                </label>
                <input
                  type="email"
                  className="w-full p-2 bg-[#F0F0F6] rounded-md focus:outline-none focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-[#F0F0F6] rounded-md focus:outline-none focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full p-2 bg-[#F0F0F6] rounded-md focus:outline-none focus:border-yellow-500"
                ></textarea>
              </div>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-card font-inter">
            <div className="flex flex-col items-center w-[372px] bg-white mb-6 p-4 shadow-md rounded-lg">
              <div className=" p-2 rounded-full mb-4">
                <img src={location} className="w-10 h-10" alt="Location Icon" />
              </div>
              <div className="grid grid-cols-2 w-full font-bold">
                <div className="text-left">
                  <p className="mb-2">Country:</p>
                  <p className="mb-2">City:</p>
                  <p className="mb-2">Street:</p>
                </div>
                <div className="text-right font-normal text-slate-400">
                  <p className="mb-2">India</p>
                  <p className="mb-2">Lucknow</p>
                  <p className="mb-2">590-IP Road</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-[372px] bg-white mb-6 p-4 shadow-md rounded-lg">
              <div className=" p-2 rounded-full mb-4">
                <img src={email} className="w-10 h-10" alt="Email Icon" />
              </div>
              <div className="grid grid-cols-2 w-full font-bold">
                <div className="text-left">
                  <p className="mb-2">Email:</p>
                  <p className="mb-2">Skype:</p>
                  <p className="mb-2">Telegram:</p>
                </div>
                <div className="text-right font-normal text-slate-400">
                  <p className="mb-2">emailexample@abc.com</p>
                  <p className="mb-2">1234</p>
                  <p className="mb-2">590-134-134-1d</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-[372px] bg-white mb-6 p-4 shadow-md rounded-lg">
              <div className=" p-2 rounded-full mb-4">
                <img src={phone} className="w-10 h-10" alt="Phone Icon" />
              </div>
              <div className="grid grid-cols-2 w-full font-bold">
                <div className="text-left">
                  <p className="mb-2">Support Service:</p>
                  <p className="mb-2">Office:</p>
                  <p className="mb-2">Personal:</p>
                </div>
                <div className="text-right font-normal text-slate-400">
                  <p className="mb-2">193-2394-244</p>
                  <p className="mb-2">983-134-13-411</p>
                  <p className="mb-2">7080304837</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills></Skills>
    </>
  );
};

export default ContactForm;
