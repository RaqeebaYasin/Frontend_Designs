// src/CheckJob/CheckJob.jsx
import React from "react";
import CheckJobPageOne from "./CheckJobPageOne.jsx";
import CheckJobPageTwo from "./CheckJobPageTwo.jsx";

const CheckJob = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Page One Section - Just the header */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <CheckJobPageOne />
      </section>
      
      {/* Page Two Section - The actual analysis form */}
      <section className="bg-white">
        <CheckJobPageTwo />
      </section>
    </div>
  );
};

export default CheckJob;