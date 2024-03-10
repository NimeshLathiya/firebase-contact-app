import React from "react";

const NoFoundContact = () => {
  return (
    <div className="flex justify-center items-center m-auto h-[60vh] gap-4">
      <div>
        <img src="/Hands Contact.png" alt="Hands Contact" />
      </div>
      <h3 className="text-white text-2xl font-semibold">No Contact Found</h3>
    </div>
  );
};

export default NoFoundContact;
