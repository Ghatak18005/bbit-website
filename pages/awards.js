import { useState } from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}`;
};

export default function Awards() {
  const [selectedYear, setSelectedYear] = useState(2024);

  const awardsData = {
    2023: [
      {
        title: "Best Innovation Award",
        desc: "Awarded for outstanding innovation in technology.",
        date: "2024-03-15",
        image: "/awards/comp.jpg",
      },
      {
        title: "Community Service Award",
        desc: "Recognized for significant contributions to community service.",
        date: "2024-06-10",
        image: "/awards/comp.jpg",
      },
      {
        title: "Excellence in Research",
        desc: "For exemplary achievements in research.",
        date: "2024-09-20",
        image: "/awards/comp.jpg",
      },
    ],
    2024: [
      {
        title: "Lifetime Achievement Award",
        desc: "Awarded for outstanding contribution over a lifetime.",
        date: "2012-02-10",
        image: "/awards/comp.jpg",
      },
      {
        title: "Pioneer Award",
        desc: "Recognized for groundbreaking research in technology.",
        date: "2012-07-20",
        image: "/awards/comp.jpg",
      },
      {
        title: "Pioneer Award",
        desc: "Recognized for groundbreaking research in technology.",
        date: "2012-07-20",
        image: "/awards/comp.jpg",
      },
      {
        title: "Pioneer Award",
        desc: "Recognized for groundbreaking research in technology.",
        date: "2012-07-20",
        image: "/awards/comp.jpg",
      },
      {
        title: "Pioneer Award",
        desc: "Recognized for groundbreaking research in technology.",
        date: "2012-07-20",
        image: "/awards/comp.jpg",
      },
      {
        title: "Pioneer Award",
        desc: "Recognized for groundbreaking research in technology.",
        date: "2012-07-20",
        image: "/awards/comp.jpg",
      },
    ],
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20 lg:mt-24 overflow-hidden min-h-screen">
      <div className="py-2 bg-[#D8D1FF] rounded-xl mb-6 flex justify-center px-4">
        <h2 id="awards" className="text-xl md:text-2xl text-[#27066F] font-bold">
          Awards for {selectedYear}
        </h2>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex items-center">
          <span className="text-lg md:text-xl font-semibold text-[#27066F] mr-2">
            Select a year:
          </span>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="p-2 text-base md:text-lg font-semibold border-2 border-[#27066F] rounded-lg text-[#27066F] bg-[#F3F2FF]"
          >
            {Object.keys(awardsData).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {awardsData[selectedYear]?.map((award, i) => (
            <div
              key={i}
              className="relative bg-purple-100 border-2 border-[#27066F] rounded-xl shadow-lg"
            >
              <img
                src="/awards/award.svg"
                className="absolute -top-6 -right-9 w-20 h-16 z-0"
                alt="badge"
              />
              <div className="absolute -top-3 -right-3 flex items-center justify-center z-10 ">
                <div className="relative bg-white text-purple-600 font-bold text-xs rounded-full w-8 h-8 flex items-center justify-center border border-[#27066F]">
                  {formatDate(award.date)}
                </div>
              </div>

              <div
                className="w-full h-48 bg-cover bg-center rounded-t-xl"
                style={{ backgroundImage: `url(${award.image})` }}
              ></div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{award.title}</h3>
                <p className="text-sm mt-1">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
