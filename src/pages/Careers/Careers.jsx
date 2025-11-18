import { useState } from "react";

const Careers = () => {
  const [department, setDepartment] = useState("All");
  const [location, setLocation] = useState("All");
  const [formStep, setFormStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    currentPosition: "",
    company: "",
    duration: "",
    responsibilities: "",
    degree: "",
    institution: "",
    graduationYear: "",
    additionalInfo: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store career application in localStorage for admin panel
    const submissionData = {
      ...formData,
      id: Date.now(),
      type: "career",
      status: "pending",
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    existingSubmissions.push(submissionData);
    localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
    
    setShowSuccessModal(true);
  };
  const handleDepartmentChange = (e, value) => {
    e.preventDefault();
    setDepartment(value);
  };
  const handleLocationChange = (e, value) => {
    e.preventDefault();
    setLocation(value);
  };
  const jobListings = [
    {
      id: 1,
      title: "Executive Chef",
      department: "Kitchen",
      location: "Downtown",
      responsibilities: [
        "Design and implement innovative menu items",
        "Manage kitchen staff and operations",
        "Ensure food quality and consistency",
      ],
      requirements: [
        "Minimum 5 years of culinary experience",
        "Degree in Culinary Arts",
        "Strong leadership skills",
      ],
    },
    {
      id: 2,
      title: "Restaurant Manager",
      department: "Management",
      location: "Westside",
      responsibilities: [
        "Oversee daily restaurant operations",
        "Manage staff scheduling and training",
        "Ensure exceptional customer service",
      ],
      requirements: [
        "Minimum 3 years in restaurant management",
        "Strong organizational and leadership skills",
        "Experience with inventory and budget management",
      ],
    },
    {
      id: 3,
      title: "Service Staff",
      department: "Service",
      location: "Downtown",
      responsibilities: [
        "Provide exceptional customer service",
        "Take orders and serve food efficiently",
        "Maintain cleanliness of dining area",
      ],
      requirements: [
        "Previous experience in food service preferred",
        "Excellent communication skills",
        "Ability to work in a fast-paced environment",
      ],
    },
    {
      id: 4,
      title: "Sous Chef",
      department: "Kitchen",
      location: "Eastside",
      responsibilities: [
        "Assist Executive Chef in daily operations",
        "Prepare and cook menu items",
        "Train and supervise kitchen staff",
      ],
      requirements: [
        "Minimum 3 years of culinary experience",
        "Culinary degree or equivalent experience",
        "Strong organizational skills",
      ],
    },
  ];
  const filteredJobs = jobListings.filter(
    (job) =>
      (department === "All" || job.department === department) &&
      (location === "All" || job.location === location)
  );
  const scrollToPositions = () => {
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-24 h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20modern%20restaurant%20interior%20with%20warm%20lighting%2C%20elegant%20table%20settings%2C%20and%20a%20professional%20kitchen%20visible%20in%20the%20background.%20The%20image%20has%20a%20subtle%20dark%20overlay%20to%20make%20white%20text%20readable.%20Atmosphere%20is%20inviting%20and%20sophisticated%20with%20soft%20ambient%20lighting&width=1440&height=400&seq=1&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            Join Our Divine Journey
          </h1>
          <p className="text-xl text-white mb-8 text-center max-w-2xl">
            Be part of a team that's revolutionizing food service
          </p>
          <button
            onClick={scrollToPositions}
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-button whitespace-nowrap transition duration-300 cursor-pointer"
          >
            View Open Positions
          </button>
        </div>
      </section>
      {/* Company Culture Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-building text-orange-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Workspace</h3>
              <p className="text-gray-600">
                State-of-the-art facilities with collaborative spaces designed
                to inspire creativity and productivity.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-orange-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Development</h3>
              <p className="text-gray-600">
                Continuous learning and advancement opportunities to help you
                grow professionally and personally.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-orange-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Inclusive Community
              </h3>
              <p className="text-gray-600">
                Diverse, supportive team that feels like family, celebrating
                different perspectives and ideas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Current Openings Section */}
      <section id="open-positions" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold mb-6 md:mb-0">Open Positions</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative group">
                <button className="bg-white border border-gray-300 rounded-button py-2 px-4 flex items-center justify-between min-w-[180px] whitespace-nowrap cursor-pointer">
                  <span>Department: {department}</span>
                  <i className="fas fa-chevron-down ml-2 text-gray-500"></i>
                </button>
                <div className="absolute mt-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block hover:block transition-all duration-300">
                  <ul>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleDepartmentChange(e, "All")}
                    >
                      All
                    </li>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleDepartmentChange(e, "Kitchen")}
                    >
                      Kitchen
                    </li>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleDepartmentChange(e, "Service")}
                    >
                      Service
                    </li>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleDepartmentChange(e, "Management")}
                    >
                      Management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative">
                <button className="bg-white border border-gray-300 rounded-button py-2 px-4 flex items-center justify-between min-w-[180px] whitespace-nowrap cursor-pointer">
                  <span>Location: {location}</span>
                  <i className="fas fa-chevron-down ml-2 text-gray-500"></i>
                </button>
                <div className="absolute mt-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block hover:block transition-all duration-300">
                  <ul>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleLocationChange(e, "All")}
                    >
                      All
                    </li>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleLocationChange(e, "Downtown")}
                    >
                      Downtown
                    </li>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleLocationChange(e, "Westside")}
                    >
                      Westside
                    </li>
                    <li
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleLocationChange(e, "Eastside")}
                    >
                      Eastside
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {job.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <div className="flex items-center ml-4 text-gray-600">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Responsibilities:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => {
                    const applicationForm =
                      document.getElementById("application-form");
                    if (applicationForm) {
                      applicationForm.scrollIntoView({ behavior: "smooth" });
                      setFormStep(1);
                    }
                  }}
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-button whitespace-nowrap transition duration-300 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Package */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-red-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
              <p className="text-gray-600">
                Comprehensive medical coverage and wellness programs to keep you at your best.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-clock text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                Paid time off, Medical, Casual and family leaves to help you maintain balance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-gray-600">
                Professional development programs, Training assistance, and clear career advancement paths.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-gift text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Perks</h3>
              <p className="text-gray-600">
                Employee meal discounts, team events, recognition programs, and many more.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Application Form Section */}
      <section id="application-form" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-orange-600 py-6 px-8">
            <h2 className="text-2xl font-bold text-white">Application Form</h2>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      formStep >= step
                        ? "bg-orange-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  <span className="text-xs mt-2 text-gray-600">
                    {step === 1 && "Personal Info"}
                    {step === 2 && "Experience"}
                    {step === 3 && "Education"}
                    {step === 4 && "Documents"}
                    {step === 5 && "Additional"}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              {formStep === 1 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="fullName"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="email"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="location"
                      >
                        Current Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>
              )}
              {formStep === 2 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Professional Experience
                  </h3>
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="currentPosition"
                      >
                        Current/Last Position
                      </label>
                      <input
                        type="text"
                        id="currentPosition"
                        name="currentPosition"
                        value={formData.currentPosition}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="duration"
                      >
                        Duration
                      </label>
                      <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="e.g., Jan 2020 - Present"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="responsibilities"
                      >
                        Key Responsibilities
                      </label>
                      <textarea
                        id="responsibilities"
                        name="responsibilities"
                        value={formData.responsibilities}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}
              {formStep === 3 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">Education</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="degree"
                      >
                        Degree/Certification
                      </label>
                      <input
                        type="text"
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="institution"
                      >
                        Institution
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="graduationYear"
                      >
                        Graduation Year
                      </label>
                      <input
                        type="text"
                        id="graduationYear"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>
              )}
              {formStep === 4 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">File Upload</h3>
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="resume"
                      >
                        Resume (PDF, DOC, DOCX) *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          className="hidden"
                          required
                        />
                        <label htmlFor="resume" className="cursor-pointer">
                          <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                          <p className="text-gray-500">
                            Drag and drop your file here or click to browse
                          </p>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="coverLetter"
                      >
                        Cover Letter (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                        <input
                          type="file"
                          id="coverLetter"
                          name="coverLetter"
                          className="hidden"
                        />
                        <label htmlFor="coverLetter" className="cursor-pointer">
                          <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                          <p className="text-gray-500">
                            Drag and drop your file here or click to browse
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {formStep === 5 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Additional Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="additionalInfo"
                      >
                        Is there anything else you'd like us to know?
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-8">
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setFormStep(formStep - 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-button whitespace-nowrap transition duration-300 cursor-pointer"
                  >
                    Previous
                  </button>
                )}
                {formStep < 5 ? (
                  <button
                    type="button"
                    onClick={() => setFormStep(formStep + 1)}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-button whitespace-nowrap transition duration-300 cursor-pointer ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-button whitespace-nowrap transition duration-300 cursor-pointer ml-auto"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-green-500 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining Prasad Food Divine. We'll
                review your application and contact you soon.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-button whitespace-nowrap transition duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Careers;
