import React from "react";

export default function SectiionHeading({ titile, section }) {
  return (
    <div className="mt-8">
      <h2 className="txet-[2.635em] font-black text-center ">{titile}</h2>
      <p className="text-xl mt-4 text-center text-gray-500"> {section} </p>
    </div>
  );
}
