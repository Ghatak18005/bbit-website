import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { departmentData } from "../../data/departmentData";
import Sidebar from "../../components/Sidebar";

const CourseDetails = () => {
  const router = useRouter();
  const { course } = router.query;
  const [deptData, setDeptData] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState("Year 1");
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (course) {
      const normalizedCourse = course.replace(/-/g, "_");
      setDeptData(departmentData[normalizedCourse]);
    }
  }, [course]);

  useEffect(() => {
    if (deptData && deptData.timeTable) {
      setPdfUrl(deptData.timeTable[selectedSemester] || "");
    }
  }, [selectedSemester, deptData]);

  if (!deptData) {
    return (
      <div className="text-2xl mt-60 text-center mb-64">
        Page is not made for this department!!! Check comp_gia
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row p-10 sm:p-8 md:p-10 lg:p-12 xl:p-16 mx-auto min-h-screen lg:max-w-6xl mt-20 text-[#27066F]">
      <div className="w-full md:w-1/4 lg:w-1/6">
        <Sidebar />
      </div>

      <div className="w-full md:w-3/4 lg:w-4/5">
        <div id="about" className="mb-8">
          <h2 className="text-xl font-bold lg:mt-0 mt-20">Vision</h2>
          <p className="mt-5">{deptData.vision}</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold">Mission</h2>
          <div className="mt-5">
            {Array.isArray(deptData.mission) ? (
              deptData.mission.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <span className="mr-2">{item.point}</span>
                  <p>{item.text}</p>
                </div>
              ))
            ) : (
              <p>{deptData.mission}</p>
            )}
          </div>
        </div>

        <div id="faculty members" className="mb-8">
          <h2 className="flex justify-center items-center text-base font-bold w-52 h-10 bg-[#D8D1FF] rounded-2xl mx-auto">
            Faculty Members
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-6 gap-x-12 gap-y-5 mt-5 mx-auto justify-items-center">
            {deptData.faculty.map((member, index) => (
              <div
                key={index}
                className="border-2 border-[#27066F] rounded-lg lg:w-52 w-40 bg-[#EAE6FF]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 rounded-t-lg"
                />
                <div className="mt-1 text-center">
                  <h3 className="text-base font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.designation}</p>
                  <p className="text-sm">{member.qualification}</p>
                  <p className="text-sm">
                    Years of Experience: {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="laboratory" className="mb-8">
  <h2 className="text-xl font-bold w-52 h-10 bg-[#D8D1FF] rounded-2xl mx-auto flex justify-center items-center mb-4">
    Laboratory
  </h2>
  {deptData.labs.map((lab, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row items-center mb-8 md:mb-12 text-center md:text-left"
    >
      <img
        src={lab.image}
        alt={lab.name}
        className="w-full h-60 md:w-72 md:h-60 lg:w-80 lg:h-72 xl:w-96 xl:h-80 mb-4 md:mb-0 md:mr-4 rounded-lg object-cover"
      />
      <div className="mt-4 md:mt-0 w-full md:w-2/4 xl:w-1/2">
        <h3 className="text-lg font-semibold mb-2">{lab.name}</h3>
        <p className="text-sm md:text-base">{lab.description}</p>
      </div>
    </div>
  ))}
</div>


        <div id="timetable" className="mb-8">
          <h2 className="text-xl font-bold flex w-52 h-10 bg-[#D8D1FF] justify-center items-center rounded-2xl mx-auto">
            Time Table
          </h2>
          <div className="bg-[#D8D1FF] mx-auto border-2 border-[#27066F] overflow-hidden mb-0 md:ml-4 mt-5">
            <table className="table-fixed w-full border-collapse">
              <thead>
                <tr>
                  {["Year 1", "Year 2", "Year 3"].map((sem) => (
                    <th
                      key={sem}
                      onClick={() => setSelectedSemester(sem)}
                      className={`cursor-pointer text-[#27066F] text-center py-3 px-2 font-semibold text-base border-t-1 border-b-1 border-[#27066F] ${
                        selectedSemester === sem ? "bg-[#B3A1FF]" : ""
                      }`}
                    >
                      {sem}
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
            {pdfUrl && (
            <div className="mt-0">
              <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                style={{ border: "none" }}
                title="Time Table"
              />
            </div>
          )}
          </div>

         
        </div>

        <div id="syllabus" className="mb-8">
          <h2 className="text-xl font-bold flex w-52 h-10 bg-[#D8D1FF] justify-center items-center rounded-2xl mx-auto">
            Syllabus
          </h2>
          <div className="border-2 border-[#27066F] h-24 w-full rounded-xl mt-5 flex items-center justify-center bg-[#c6c0ef]">
            <p className="font-semibold text-sm lg:text-base text-center">
              Access the most recent syllabus by visiting the Official GTU
              Website. <br />
              <a
                href="https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI"
                target="_blank"
                className="font-semibold text-[#000000]"
                rel="noopener noreferrer"
              >
                https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI
              </a>
            </p>
          </div>
        </div>

        <div id="activities" className="mb-8">
          <h2 className="text-xl font-bold flex w-52 h-10 bg-[#D8D1FF] justify-center items-center rounded-2xl mx-auto mb-4">
            Activities
          </h2>
          {deptData.activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center mb-4 border-2 rounded-xl border-[#27066F] lg:w-full lg:h-full mt-5 bg-[#c6c0ef] p-2 h-full w-68"
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full md:w-72 h-auto rounded-xl mb-4 md:mb-0 md:mr-4 object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold">{activity.name}</h3>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
