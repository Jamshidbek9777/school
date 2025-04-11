import React from "react";

const Topbar = () => {
  return (
    <div className="bg-sky-400 text-white text-sm py-2 px-6 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <span>📍 198 West 21th Street, Suite 721 New York NY 10016</span>
        <span>📧 youremail@email.com</span>
        <span>📞 +1235 2355 98</span>
      </div>
    </div>
  );
};

export default Topbar;
