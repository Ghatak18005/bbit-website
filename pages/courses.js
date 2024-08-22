import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const cardsData = [
  { name: "Civil", path: "/courses/civil.svg", type: ["GIA", "SFI"] },
  { name: "Computer", path: "/courses/comp.svg", type: ["GIA", "SFI"] },
  { name: "Electrical", path: "/courses/electrical.svg", type: ["GIA", "SFI"] },
  {
    name: "Electronic & Communication",
    path: "/courses/ec.svg",
    type: ["GIA", "SFI"],
  },
  { name: "Information Technology", path: "/courses/it.svg", type: ["SFI"] },
  { name: "Mechanical", path: "/courses/mechanical.svg", type: ["GIA", "SFI"] },
  { name: "Mechatronics", path: "/courses/mechatronics.svg", type: ["SFI"] },
  {
    name: "Science & Humanities",
    path: "/courses/book.svg",
    type: ["GIA", "SFI"],
  },
];

const Courses = () => {
  const router = useRouter();
  const [deptsData, setDeptsData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const data = cardsData.reduce((acc, curr) => {
        if (!acc[curr.name]) acc[curr.name] = [];
        acc[curr.name].push(curr);
        return acc;
      }, {});
      setDeptsData(data);
    };

    setTimeout(fetchData, 1000); 
  }, []);

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mx-auto mb-5 lg:mb-20 md:mb-10 mt-12 min-h-screen max-w-6xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mx-auto">
        {deptsData ? (
          Object.keys(deptsData).map((key, index) => {
            const item = deptsData[key][0];
            const buttons = item.type.map((type, typeIndex) => (
              <button
                className="px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg rounded-lg text-white font-bold border-2 border-white hover:bg-white hover:text-black"
                key={typeIndex}
                onClick={() =>
                  router.push(`/course/${item.name.toLowerCase().replace(/\s+/g, "-")}_${type.toLowerCase()}`)
                }
              >
                {type}
              </button>
            ));

            return (
              <div
                className="relative text-sm sm:text-base md:text-lg lg:text-xl h-36 bg-[#FFB224] rounded-3xl text-[#FFFAEB] text-start flex flex-col p-4 w-50 lg:w-80 md:w-64 md:h-48 lg:h-52 mt-3"
                key={index}
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold">{item.name}</span>
                  <div className="flex flex-wrap justify-center gap-2 absolute lg:mt-32 mt-20 md:mt-28">
                    {buttons}
                  </div>
                </div>
                <img
                  src={item.path}
                  alt={item.name}
                  className="w-16 h-14 sm:w-28 sm:h-24 md:w-28 md:h-20 lg:w-28 lg:h-24 lg:mt-7 mt-4 lg:ml-44 md:ml-32 ml-14 absolute"
                />
              </div>
            );
          })
        ) : (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              className="relative text-sm sm:text-base md:text-lg lg:text-xl h-36 bg-[#FFB224] rounded-3xl text-[#FFFAEB] text-start flex flex-col p-4 w-50 lg:w-80 md:w-64 md:h-48 lg:h-52 mt-3"
              key={index}
            >
              <div className="p-4">
                <div className="animate-pulse flex flex-col space-y-4">
                  <div className="h-6 bg-[#94671a] rounded w-3/4 mx-auto"></div>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <div className="h-4 bg-[#94671a] rounded w-20"></div>
                    <div className="h-4 bg-[#94671a] rounded w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
