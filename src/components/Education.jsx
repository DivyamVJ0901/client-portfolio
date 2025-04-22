import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2015 - 2019",
    institute: "American International University-Bangladesh",
    degree: "Bachelor of Science",
    details: [
      "CGPA: 3.75 out of 4.00",
      "Department: Computer Science & Engineering",
    ],
  },
  {
    year: "2012 - 2014",
    institute: "Cantonment College, Jessore",
    degree: "Higher Secondary Certificate (HSC)",
    details: [
      "CGPA: 4.80 out of 5.00",
      "Group: Science",
    ],
  },
  {
    year: "2007 - 2012",
    institute: "Chowgacha Shahadat Pilot High School",
    degree: "Secondary School Certificate (SSC)",
    details: [
      "CGPA: 5.00 out of 5.00",
      "Group: Science",
    ],
  },
];

const Education = () => {
  return (
    <section className="py-12 bg-[#F0F2F5]" id="education">
      <div className="max-w-6xl mx-auto">
      <h2
          className='text-center mb-12 uppercase '
          style={{
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '36px',
            color: 'rgb(107, 114, 128)',
            letterSpacing: '3px' 
          }}
        >
          Education
        </h2>
        <div className="bg-white rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] p-8">
          <div className="relative pl-6 border-l-2 border-gray-300 space-y-10">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex items-start gap-6 relative">
                <div className="absolute -left-[14px] bg-white">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-md">
                    <FaGraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <div className="ml-4">
                  <p className="text-sm text-gray-500">{edu.year}</p>
                  <h3 className="text-lg font-semibold text-gray-800">{edu.institute}</h3>
                  <p className="text-gray-700 font-medium">{edu.degree}</p>
                  <ul className="list-disc ml-5 text-gray-600 text-sm mt-1">
                    {edu.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
