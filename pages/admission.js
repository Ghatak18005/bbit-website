import React from 'react';

// Sample data
const admissionDataGia = [
  { srNo: 1, course: "Diploma in Civil Engineering", intake: 60 },
  { srNo: 2, course: "Diploma in Computer Engineering", intake: 60 },
  { srNo: 3, course: "Diploma in Electrical Engineering", intake: 60 },
  { srNo: 4, course: "Diploma in Electronic & Communication Engineering", intake: 60 },
  { srNo: 5, course: "Diploma in Mechanical Engineering", intake: 120 },
];

const admissionDataSfi = [
  { srNo: 1, course: "Diploma in Civil Engineering", intake: 30 },
  { srNo: 2, course: "Diploma in Computer Engineering", intake: 120 },
  { srNo: 3, course: "Diploma in Electrical Engineering", intake: 60 },
  { srNo: 4, course: "Diploma in Electronic & Communication Engineering", intake: 30 },
  { srNo: 5, course: "Diploma in Mechanical Engineering", intake: 30 },
  { srNo: 6, course: "Diploma in Information Technology Engineering", intake: 120 },
  { srNo: 7, course: "Diploma in Mechatronics Engineering", intake: 30 }
];

// Calculate the total intake
const getTotalIntake = (data) => data.reduce((total, item) => total + item.intake, 0);

// Table Component
const AdmissionTable = ({ data, total, title }) => (
  <div className="w-full max-w-6xl mx-auto mt-16 xl:mt-20">
    <table className="w-full border-collapse bg-[#EAE6FF] rounded-lg shadow-md xl:text-lg">
      <thead>
        <tr className="text-center">
          <th className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4">Sr.No</th>
          <th className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4">{title}</th>
          <th className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4">Annual Intake</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.srNo} className="text-center">
            <td className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4">{item.srNo}</td>
            <td className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4">{item.course}</td>
            <td className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4">{item.intake}</td>
          </tr>
        ))}
        <tr className="bg-[#EAE6FF] font-bold text-center">
          <td className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4" colSpan="2">Total</td>
          <td className="border border-[#27066F] px-4 py-2 xl:px-6 xl:py-4">{total}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Admissions = () => {
  const totalIntakeGia = getTotalIntake(admissionDataGia);
  const totalIntakeSfi = getTotalIntake(admissionDataSfi);

  return (
    <div className="flex flex-col items-center p-4 mt-24 lg:mt-24 mb-20 min-h-screen xl:mt-28">
      <div className="py-2 bg-[#FFDE88] rounded-xl mb-6 flex justify-center px-14 lg:px-20 xl:px-28">
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#27066F] font-bold">
          Admission Process
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-b from-[#BCACFF] to-[#F3F2FF] border-[#27066F] rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 h-auto lg:h-80 xl:h-auto flex items-center">
          <ol className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 list-decimal list-inside text-[#27066F] text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-OrelegaOne font-semibold">
            <li>
              We follow guidelines given by the state government for admission in Under Graduate courses.
            </li>
            <li>
              As per state rules, 75% of seats are filled by the Admission Committee for Professional Diploma Courses - ACPDC (www.acpdc.in). The remaining 25% seats are divided into a 10% management quota and a 15% NRI/NRI-sponsored quota.
            </li>
            <li>
              We follow ACPDC guidelines for giving admission under the management quota and the NRI/NRI-sponsored quota.
            </li>
          </ol>
        </div>
      </div>

      <div className="py-2 bg-[#FFDE88] rounded-xl mb-6 flex justify-center px-4 mt-14 xl:mt-20">
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#27066F] font-bold px-5 lg:px-10 xl:px-16">
          AICTE Approved Intake
        </h2>
      </div>

      <AdmissionTable data={admissionDataGia} total={totalIntakeGia} title="Grant-in-aid (GIA) Courses Offered" />
      <AdmissionTable data={admissionDataSfi} total={totalIntakeSfi} title="SELF FINANCE(SFI) COURSES OFFERED" />
    </div>
  );
};

export default Admissions;
