"use client";

import React, { useState } from "react";

export const Several = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full mb-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-300 p-2 text-lg font-bold line-clamp-2 border-l-4 border-blue-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          neque!
        </div>
        <div className="px-4 py-3 bg-green-300">Item 01</div>
        <div className="px-4 py-3 bg-red-300 border-2 border-red-600 border-separate">
          Item 01
        </div>
        <div className="px-4 py-3 bg-orange-300">Item 01</div>
      </div>
      <div className="w-40 bg-green-200 p-2 mt-4 text-black font-bold line-clamp-2 rounded-l-lg rounded-br-[30px] border-l-4 border-orange-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fuga
        libero maxime quod porro. Eveniet delectus omnis alias corrupti aliquid,
        ut possimus numquam sed doloremque aspernatur ex debitis illo voluptate!
      </div>
    </div>
  );
};
