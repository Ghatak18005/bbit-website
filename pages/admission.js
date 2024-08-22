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
  <div className="w-full max-w-6xl mx-auto mt-16">
    <table className="w-full border-collapse bg-[#EAE6FF] rounded-lg shadow-md">
      <thead>
        <tr className="text-center">
          <th className="border border-[#27066F] px-4 py-2">Sr.No</th>
          <th className="border border-[#27066F] px-4 py-2">{title}</th>
          <th className="border border-[#27066F] px-4 py-2">Annual Intake</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.srNo} className="text-center">
            <td className="border border-[#27066F] px-4 py-2">{item.srNo}</td>
            <td className="border border-[#27066F] px-4 py-2">{item.course}</td>
            <td className="border border-[#27066F] px-4 py-2">{item.intake}</td>
          </tr>
        ))}
        <tr className="bg-[#EAE6FF] font-bold text-center">
          <td className="border border-[#27066F] px-4 py-2" colSpan="2">Total</td>
          <td className="border border-[#27066F] px-4 py-2">{total}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Admissions = () => {
  const totalIntakeGia = getTotalIntake(admissionDataGia);
  const totalIntakeSfi = getTotalIntake(admissionDataSfi);

  return (
    <div className="flex flex-col items-center p-4 mt-24 lg:mt-24 mb-20 min-h-screen">
      <div className="py-2 bg-[#FFDE88] rounded-xl mb-6 flex justify-center px-14 lg:px-20">
        <h2 className="text-xl md:text-xl lg:text-2xl text-[#27066F] font-bold">
          Admission Process
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-b from-[#BCACFF] to-[#F3F2FF] border-[#27066F] rounded-3xl p-6 sm:p-8 lg:p-10 h-auto lg:h-80 flex items-center">
          <ol className="space-y-4 sm:space-y-5 lg:space-y-6 list-decimal list-inside text-[#27066F] text-xs sm:text-sm md:text-base lg:text-xl font-OrelegaOne font-semibold">
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

      <div className="py-2 bg-[#FFDE88] rounded-xl mb-6 flex justify-center px-4 mt-14">
        <h2 className="text-xl md:text-xl lg:text-2xl text-[#27066F] font-bold px-5 lg:px-10">
          AICTE Approved Intake
        </h2>
      </div>

      <AdmissionTable data={admissionDataGia} total={totalIntakeGia} title="Grant-in-aid (GIA) Courses Offered" />
      <AdmissionTable data={admissionDataSfi} total={totalIntakeSfi} title="SELF FINANCE(SFI) COURSES OFFERED" />
    </div>
  );
};

export default Admissions;
