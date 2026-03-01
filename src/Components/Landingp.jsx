import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../pics/logo.png";
import hero from "../pics/hero.png";

const LandingP = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wklopi",   
        "template_fnd67xy",  
        form.current,
        "qLUd2X5k6o2Y0APRx"   
      )
      .then(
        (result) => {
          alert("Thank you!");
          e.target.reset(); 
        },
        (error) => {
          alert("Failed to send email, check console.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-[#1F7BAA] p-4 flex justify-center items-center shadow-md">
        <img src={logo} alt="NotTutor Logo" className="h-16 md:h-20" />
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-162.5 md:h-187.5 flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            Education that sticks. <span className="text-white">Not just tutoring.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-relaxed">
            Standard tutoring focuses on the next test. At NotTutor, we focus on the next level.
            We combine curriculum expertise with personalized mentorship to help students build
            long-term academic confidence.
          </p>
        </div>
      </section>

      {/* Interest Form */}
      <section className="bg-[#1784B3] py-16 px-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto flex flex-col space-y-5 md:space-y-6"
        >
          {[
            { name: "childGrade", placeholder: "CHILD'S GRADE", type: "text" },
            { name: "schoolBoard", placeholder: "SCHOOL BOARD", type: "text" },
            { name: "academicYear", placeholder: "ACADEMIC YEAR", type: "text" },
            { name: "studentName", placeholder: "STUDENT NAME", type: "text" },
            { name: "studentEmail", placeholder: "EMAIL", type: "email" },
            { name: "phoneNumber", placeholder: "PHONE NUMBER", type: "tel" },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              className="p-4 md:p-5 border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-white placeholder-opacity-70 bg-transparent text-lg md:text-xl transition"
            />
          ))}

          {/* Country Dropdown */}
          <div className="relative">
            <select
              name="country"
              required
              defaultValue=""
              className="w-full p-4 md:p-5 border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white uppercase text-lg md:text-xl bg-transparent appearance-none transition"
            >
              <option value="" disabled className="bg-gray-800 text-white">
                SELECT COUNTRY
              </option>
              <option value="uae" className="bg-gray-800 text-white">
                UAE (UTC+4)
              </option>
              <option value="bahrain" className="bg-gray-800 text-white">
                Bahrain (UTC+3)
              </option>
              <option value="saudi_arabia" className="bg-gray-800 text-white">
                Saudi Arabia (UTC+3)
              </option>
              <option value="oman" className="bg-gray-800 text-white">
                Oman (UTC+4)
              </option>
              <option value="qatar" className="bg-gray-800 text-white">
                Qatar (UTC+3)
              </option>
              <option value="kuwait" className="bg-gray-800 text-white">
                Kuwait (UTC+3)
              </option>
              <option value="iraq" className="bg-gray-800 text-white">
                Iraq (UTC+3)
              </option>
            </select>

            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <button
            type="submit"
            className="self-center bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition text-lg md:text-xl shadow-md"
          >
            Register Interest
          </button>
        </form>
      </section>

      {/* About Us Section */}
      <section className="bg-linear-to-r from-blue-900 via-[#1F4E7A] to-blue-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-blue-800/20 rounded-2xl p-8 shadow-lg">
          <div className="h-1 w-24 bg-yellow-400 mx-auto mb-4 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Us</h2>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            NotTutor makes finding and booking qualified tutors in the Middle East fast and easy.
            Connect with the right tutor for any subject, see real-time availability, and book online
            all in just a few clicks. Learn smarter, faster, and on your own schedule. Join NotTutor
            today and take control of your learning journey.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F7BAA] py-6">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              aria-label="Social Icon"
              className="text-white hover:text-white-400 transition text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 shadow-md"
            >
              <Icon />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LandingP;