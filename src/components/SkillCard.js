import React from "react";

const SkillCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.5)]  transition duration-300">
      <img src={icon} alt={title} className="w-8 h-16 mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default SkillCard;
