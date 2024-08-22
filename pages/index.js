import React, { useEffect, useState } from "react";
import MessageCard from "../components/ui/MessageCard";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};

const staticNews = [
  {
    created_at: "2024-08-01T00:00:00Z",
    desc: "Our institution has launched a new program focused on AI and Machine Learning. Enroll now to be a part of this innovative journey.",
  },
  {
    created_at: "2024-07-15T00:00:00Z",
    desc: "Congratulations to our students for winning the national debate competition. Your hard work and dedication have paid off!",
  },
  {
    created_at: "2024-06-30T00:00:00Z",
    desc: "The summer internship program has been a great success. We look forward to seeing our students apply their skills in real-world scenarios.",
  },
];

const topButts = [
  {
    name: "Awards & Achievements",
    icon: "/home/btnawards.svg",
    href: "/awards",
  },
  {
    name: "Events Held",
    icon: "/home/btnevents.svg",
    href: "/events",
  },
  {
    name: "Newsletter",
    icon: "/home/btnnewsletter.svg",
    href: "/newsletter",
  },
];

export default function Home() {
  const [latestNews, setLatestNews] = useState(staticNews);

  useEffect(() => {
    setTimeout(() => {
      setLatestNews(staticNews);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen mt-20 w-full">
      <div className="text-[#27066F] flex flex-col items-center lg:items-start lg:ml-20 lg:mt-24 px-4 lg:px-0 md:mt-32">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
          Welcome to <br /> B & B Institute of Technology
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-3 text-center lg:text-left">
          Unlock your potential with innovative <br />
          courses and hands-on learning opportunities.
        </h3>
        <h5 className="text-xs sm:text-sm lg:text-base font-light mt-3 text-center lg:text-left">
          Contact us to know more: <br /> Phone: 02692 - 237240 <br />
          Email: principal@bbit.ac.in
        </h5>
      </div>

      <div className="relative lg:flex justify-center mt-96 lg:mb-10 items-center lg:mt-96 md:mt-96 md:flex">
        <svg
          viewBox="0 0 2158 770"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
        >
          <path
            d="M89.1505 263.12C48.1347 255.76 0 252.615 0 252.615V786H1046.79H2158V0C2158 0 2127.62 0.500308 2020.16 36.5747C1912.69 72.6491 1266.93 343.016 818.006 401.463C564.394 434.483 319.853 304.517 89.1505 263.12Z"
            fill="url(#paint0_linear_86_118)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_86_118"
              x1="1079"
              y1="767.492"
              x2="1079"
              y2="0.141304"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F2FF" />
              <stop offset="0.15" stopColor="#AB86F7" />
              <stop offset="0.24" stopColor="#8146F2" />
              <stop offset="0.75" stopColor="#5F13EE" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute bottom-10 flex lg:flex-row justify-center items-center gap-10 lg:gap-52 md:gap-10">
          {topButts.map((item, index) => (
            <div
              key={index}
              className="z-10 lg:flex flex-col items-center hidden md:flex"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="md:w-10 md:h-12 lg:h-16 lg:w-20"
              />
              <button
                className="text-white w-20 lg:w-52 py-2 mt-4 rounded-full border-2 text-xs cursor-pointer md:w-56"
                onClick={() => (window.location.href = item.href)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[77%] mx-auto mt-96 md:mt-16 lg:w-full">
        <div className="bg-[#D8D1FF] rounded-xl p-5 flex flex-col justify-between w-80 md:w-full lg:w-full sm:w-10 mx-auto lg:mt-0 mt-10 md:mt-0">
          <h1 className="text-[#110d18] text-2xl font-bold mb-16 text-center">
            Latest News
          </h1>
          <div className="flex-grow flex flex-col space-y-4">
            {latestNews.map((news, index) => (
              <div key={index} className="flex-grow flex flex-col">
                <div className="flex items-start space-x-5">
                  <div>
                    <p className="font-medium text-lg mt-1">
                      {formatDate(news.created_at)}
                    </p>
                    <p className="text-lg text-[#27066F] mt-2">{news.desc}</p>
                  </div>
                </div>
                <hr className="h-1 bg-[#27066F] rounded-2xl mt-4" />
              </div>
            ))}
          </div>
          <button className="bg-[#eae6ff] rounded-xl mt-5 w-44 mx-auto lg:w-full">
            View All
          </button>
        </div>

        <div className="md:px-5 mt-12 md:mt-0 sm:w-full md:w-3/4 lg:w-full">
          <div className="bg-[#D8D1FF] rounded-xl p-4 md:p-6 lg:p-8 w-80 lg:w-full mx-auto">
            <h1 className="text-[#27066F] text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-center">
              Our Vision
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#27066F]">
              At BBIT, our vision is to create an innovative and nurturing
              environment where students thrive academically, socially, and
              personally. We aim to be a leading institution known for
              educational excellence, inclusivity, critical thinking, and
              lifelong learning. Through cutting-edge research, community
              engagement, and sustainability, we empower students to become
              compassionate leaders and impactful global citizens.
            </p>
          </div>
          <div className="bg-[#D8D1FF] rounded-xl p-4 md:p-6 lg:p-8 mt-5 mx-auto w-80 lg:w-full">
            <h1 className="text-[#27066F] text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-center">
              Our Mission
            </h1>
            <ul className="list-disc text-base md:text-lg lg:text-xl text-[#27066F] ml-4 md:ml-6 lg:ml-8">
              <li>
                Develop strong fundamental concepts, analytical abilities, and
                problem-solving skills.
              </li>
              <li>
                Provide an environment that fosters creativity and innovation.
              </li>
              <li>
                Deliver quality training to enhance skills and entrepreneurship.
              </li>
              <li>
                Create opportunities for lifelong learning to meet evolving
                global technological standards.
              </li>
              <li>Encourage excellence in technical education.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[77%] mx-auto mt-0 md:mt-16 lg:w-full">
        <MessageCard
          title="Chairman's Message"
          imgSrc="../home/chairman.svg"
          message="We at BBIT strongly believe in imparting quality education with a focus on developing strong character and value-based leadership among students. Our goal is to nurture talent and innovation, and we are dedicated to ensuring that our students are equipped with the knowledge, skills, and ethical values needed to succeed in a rapidly changing world."
        />
        <MessageCard
          title="Principal's Message"
          imgSrc="/message/principal.png"
          message="Welcome to BBIT! As the Principal, I am proud to lead this dynamic institution committed to academic excellence and holistic student development. Our curriculum is designed to foster critical thinking, creativity, and leadership qualities. I invite you to explore our innovative programs, and be part of a community that strives for excellence in every endeavor."
        />
      </div>
    </div>
  );
}
