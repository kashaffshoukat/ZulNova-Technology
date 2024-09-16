import React, { useRef, useState } from "react";

const JobApplication = () => {
  const fileInputRef = useRef(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    linkedin: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isIconVisible, setIsIconVisible] = useState(true);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsIconVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select your resume");
      return;
    }

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("mobile", formValues.mobile);
    formData.append("linkedin", formValues.linkedin);
    formData.append("resume", selectedFile);

    try {
      const response = await fetch("https://test.saeedantechpvt.com/api/jobApplication", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const result = await response.json();
      alert("Job Applied successfully!");

      console.log(result)
    
      setFormValues({
        name: "",
        email: "",
        mobile: "",
        linkedin: "",
      });
      setSelectedFile(null);
      setIsIconVisible(true);
    } catch (error) {
      console.error("Error in sending Data", error);
      alert("There was an error applying for the job. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-primary h-[40vh] flex items-center justify-center text-white flex-col">
        <h1 className="text-6xl text-center font-bold">We are hiring</h1>
        <h1 className="mt-4 text-2xl font-semibold">Join Our Team</h1>
      </div>

      <div className="p-14">
        <h2 className="text-2xl font-bold mb-2">Job Openings</h2>
      </div>

      <div className="container mx-auto px-10 py-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Basic Info</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name:
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name *"
                value={formValues.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email *"
                value={formValues.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
                Mobile:
              </label>
              <input
                id="mobile"
                type="text"
                name="mobile"
                placeholder="Mobile Number *"
                value={formValues.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-2">
                LinkedIn Profile:
              </label>
              <input
                id="linkedin"
                type="text"
                name="linkedin"
                placeholder="LinkedIn Profile Link"
                value={formValues.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Upload your Resume:
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center bg-blue-50 cursor-pointer"
              onClick={handleFileUploadClick}
            >
              <p className="text-blue-600">Upload your Resume</p>
              <p className="text-sm text-gray-500 mt-1">
                Supported formats: PDF, DOC, DOCX
              </p>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf, .doc, .docx"
              />
              <p className="mt-2 text-gray-700">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </p>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
