import React, { useState } from "react";
import ownerImage from "../../assets/images/team/owner1.jpeg";

const Franchise = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    timeline: "",
    background: "",
    message: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialImages = [ownerImage, ownerImage];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Store franchise submission in localStorage for admin panel
    const submissionData = {
      ...formData,
      id: Date.now(),
      type: "franchise",
      status: "pending",
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    existingSubmissions.push(submissionData);
    localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
    
    setShowSuccessModal(true);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % 2);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/src/assets/images/Franchise Page Image 1.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/80 to-transparent"></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">
              Join the Prasad Food Divine Family
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Be part of India's fastest-growing sattvic dining chain and build
              a successful business with our proven model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                onClick={() => {
                  document
                    .getElementById("inquiry-form")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                Apply Now
              </a>
              <a
                onClick={() => {
                  document
                    .getElementById("benefits")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Franchise Benefits
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our successful franchise network and enjoy these exclusive
                advantages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "fa-chart-line",
                  title: "Proven Business Model",
                  description:
                    "Decades of operational excellence with streamlined processes and consistent profitability.",
                },
                {
                  icon: "fa-star",
                  title: "Strong Brand Recognition",
                  description:
                    "Trusted name rooted in tradition and purity, with a loyal customer base across the country.",
                },
                {
                  icon: "fa-hands-helping",
                  title: "Comprehensive Support",
                  description:
                    "From site selection to daily operations, our team provides ongoing guidance and assistance.",
                },
                {
                  icon: "fa-coins",
                  title: "Attractive ROI",
                  description:
                    "Quick breakeven with high customer retention and multiple revenue streams.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i
                      className={`fas ${benefit.icon} text-2xl text-white`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-serif text-[#800000] mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Requirements */}
        <div className="py-16 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Investment Requirements
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding the financial commitment for your Prasad Food
                Divine franchise.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-serif text-[#800000] mb-6">
                    Financial Overview
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Initial Franchise Fee
                        </h4>
                        <p className="text-gray-600 text-sm">
                          One-time payment for brand rights
                        </p>
                      </div>
                      <div className="text-xl font-medium text-[#800000]">
                        ₹15-20 Lakhs
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Setup & Equipment
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Interior, kitchen equipment, furniture
                        </p>
                      </div>
                      <div className="text-xl font-medium text-[#800000]">
                        ₹1.5cr to 2.0cr
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Initial Marketing
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Grand opening and local promotion
                        </p>
                      </div>
                      <div className="text-xl font-medium text-[#800000]">
                        ₹5-10 Lakhs
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Working Capital
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Initial inventory and operations
                        </p>
                      </div>
                      <div className="text-xl font-medium text-[#800000]">
                        ₹15-20 Lakhs
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Total Investment
                        </h4>
                        <p className="text-gray-600 text-sm">Estimated range</p>
                      </div>
                      <div className="text-2xl font-bold text-[#800000]">
                        ₹2.0cr to 2.5cr
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 bg-gray-50">
                  <h3 className="text-2xl font-serif text-[#800000] mb-6">
                    Location & Space Requirements
                  </h3>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-ruler-combined text-[#800000]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Minimum Space
                        </h4>
                        <p className="text-gray-600">
                          3000-6000 sq. ft.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-map-marker-alt text-[#800000]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Ideal Locations
                        </h4>
                        <p className="text-gray-600">
                          Self Owned / Commercial Hubs next to residentials / High Footfall areas
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-clock text-[#800000]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Expected ROI
                        </h4>
                        <p className="text-gray-600">
                          40 to 60%
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-percentage text-[#800000]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Royalty Fee
                        </h4>
                        <p className="text-gray-600">3 to 4%</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-bullhorn text-[#800000]"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Marketing Contribution
                        </h4>
                        <p className="text-gray-600">
                          Depending on Sale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Franchise Success Stories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our thriving franchise partners about their journey
                with Prasad Food Divine.
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-[#FFFDD0] rounded-xl shadow-lg p-8 md:p-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <img
                      src={
                        [
                          ownerImage,
                          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520successful%2520Indian%2520businesswoman%2520in%2520her%252030s%2520wearing%2520elegant%2520business%2520attire%2520with%2520a%2520warm%2520confident%2520smile%2520against%2520a%2520neutral%2520background%2520that%2520conveys%2520professionalism%2520and%2520success%2520in%2520the%2520restaurant%2520franchise%2520industry&width=300&height=300&seq=3&orientation=squarish",
                          "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520successful%2520middle%2520aged%2520Indian%2520couple%2520in%2520business%2520casual%2520attire%2520with%2520friendly%2520confident%2520expressions%2520against%2520a%2520neutral%2520background%2520that%2520conveys%2520their%2520partnership%2520and%2520success%2520in%2520the%2520restaurant%2520franchise%2520business&width=300&height=300&seq=4&orientation=squarish",
                        ][activeTestimonial]
                      }
                      alt="Franchise Owner"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <div className="text-4xl text-[#800000] mb-4">"</div>
                    <p className="text-gray-700 text-lg italic mb-6">
                      {
                        [
                          "Opening a Prasad Food Divine franchise was the best business decision I've made. The brand's strong reputation for authentic sattvic cuisine immediately attracted customers, and the operational support from the head office has been exceptional. Within 14 months, we achieved full ROI and are now planning to open our second location.",
                          "As someone with no prior restaurant experience, I was hesitant to enter this industry. The Prasad team provided comprehensive training and continuous guidance that made the transition seamless. Our location has become a community favourite, and we're seeing 20% year-over-year growth since opening two years ago.",
                        ][activeTestimonial]
                      }
                    </p>
                    <div>
                      <h4 className="font-serif text-[#800000] text-xl">
                        {
                          [
                            "Shankar Shetty",
                            "Sunil Chavan",
                          ][activeTestimonial]
                        }
                      </h4>
                      <p className="text-gray-600">
                        {
                          [
                            "Franchise Owner, Mumbai • 10 Years + with Prasad Food Divine",
                            "Franchise Owner, Kalyan • 5 Years with Prasad Food Divine",
                          ][activeTestimonial]
                        }
                      </p>
                      <div className="mt-4 text-[#FF9933]">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handlePrevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={handleNextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="flex justify-center mt-6">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer !rounded-button whitespace-nowrap ${
                    activeTestimonial === index ? "bg-[#800000]" : "bg-gray-300"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Franchise Gallery */}
        <div className="py-16 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Franchise Gallery
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our successful franchise locations across India.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image:
                    "https://readdy.ai/api/search-image?query=Elegant%2520Indian%2520vegetarian%2520restaurant%2520interior%2520with%2520modern%2520design%2520elements%2520featuring%2520warm%2520lighting%2520comfortable%2520seating%2520and%2520branded%2520elements%2520showcasing%2520a%2520successful%2520franchise%2520location%2520with%2520customers%2520enjoying%2520their%2520dining%2520experience%2520in%2520a%2520sophisticated%2520atmosphere&width=600&height=400&seq=5&orientation=landscape",
                  location: "Mumbai Franchise",
                },
                {
                  image:
                    "https://readdy.ai/api/search-image?query=Modern%2520Indian%2520restaurant%2520kitchen%2520with%2520professional%2520chefs%2520in%2520branded%2520uniforms%2520preparing%2520vegetarian%2520dishes%2520in%2520a%2520clean%2520well%2520organized%2520space%2520with%2520state%2520of%2520the%2520art%2520equipment%2520showcasing%2520the%2520operational%2520excellence%2520of%2520a%2520successful%2520restaurant%2520franchise&width=600&height=400&seq=6&orientation=landscape",
                  location: "Bangalore Franchise",
                },
                {
                  image:
                    "https://readdy.ai/api/search-image?query=Beautifully%2520plated%2520Indian%2520vegetarian%2520dishes%2520arranged%2520on%2520an%2520elegant%2520restaurant%2520table%2520with%2520branded%2520elements%2520visible%2520showcasing%2520the%2520culinary%2520presentation%2520and%2520quality%2520of%2520food%2520at%2520a%2520successful%2520restaurant%2520franchise%2520location&width=600&height=400&seq=7&orientation=landscape",
                  location: "Delhi Franchise",
                },
                {
                  image:
                    "https://readdy.ai/api/search-image?query=Restaurant%2520staff%2520in%2520branded%2520uniforms%2520providing%2520excellent%2520service%2520to%2520customers%2520in%2520an%2520elegant%2520Indian%2520restaurant%2520setting%2520with%2520warm%2520lighting%2520and%2520professional%2520atmosphere%2520demonstrating%2520the%2520service%2520standards%2520of%2520a%2520successful%2520franchise%2520operation&width=600&height=400&seq=8&orientation=landscape",
                  location: "Pune Franchise",
                },
                {
                  image:
                    "https://readdy.ai/api/search-image?query=Exterior%2520view%2520of%2520a%2520modern%2520Indian%2520restaurant%2520with%2520elegant%2520signage%2520and%2520branding%2520elements%2520in%2520a%2520prime%2520commercial%2520location%2520with%2520customers%2520entering%2520showcasing%2520the%2520attractive%2520storefront%2520of%2520a%2520successful%2520restaurant%2520franchise&width=600&height=400&seq=9&orientation=landscape",
                  location: "Hyderabad Franchise",
                },
                {
                  image:
                    "https://readdy.ai/api/search-image?query=Private%2520dining%2520area%2520in%2520an%2520upscale%2520Indian%2520restaurant%2520with%2520elegant%2520decor%2520traditional%2520elements%2520and%2520branded%2520touches%2520set%2520for%2520a%2520special%2520event%2520showcasing%2520the%2520versatility%2520and%2520premium%2520experience%2520offered%2520at%2520a%2520successful%2520restaurant%2520franchise&width=600&height=400&seq=10&orientation=landscape",
                  location: "Chennai Franchise",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-serif mb-2">
                      {item.location}
                    </h3>
                    {/* <button className="mt-2 bg-[#FF9933] hover:bg-[#e88a2a] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Application Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A simple step-by-step journey to becoming a Prasad Food Divine
                franchise owner.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#800000]/20 hidden md:block"></div>

                {/* Timeline steps */}
                <div className="space-y-12 md:space-y-0">
                  {[
                    {
                      icon: "fa-file-alt",
                      title: "Submit Application",
                      description:
                        "Fill out our franchise inquiry form with your details and investment capacity.",
                      duration: "10 Minutes",
                    },
                    {
                      icon: "fa-search",
                      title: "Preliminary Screening",
                      description:
                        "Our team reviews your application and contacts you for initial discussion.",
                      duration: "2-3 Days",
                    },
                    {
                      icon: "fa-handshake",
                      title: "Business Discussion",
                      description:
                        "Meet with our franchise team to discuss details and potential locations.",
                      duration: "1 Week",
                    },
                    {
                      icon: "fa-file-signature",
                      title: "Agreement & Payment",
                      description:
                        "Sign the franchise agreement and make the initial investment.",
                      duration: "2 Weeks",
                    },
                    {
                      icon: "fa-tools",
                      title: "Outlet Setup & Training",
                      description:
                        "Location setup, staff hiring, and comprehensive operational training.",
                      duration: "10-12 Weeks",
                    },
                    {
                      icon: "fa-store",
                      title: "Grand Opening",
                      description:
                        "Launch your Prasad Food Divine franchise with marketing support.",
                      duration: "Launch Day",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`relative md:flex ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#800000] border-4 border-white shadow-lg z-10"></div>

                      {/* Content */}
                      <div className="md:w-1/2 p-4">
                        <div
                          className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                            index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center mr-4">
                              <i className={`fas ${step.icon} text-white`}></i>
                            </div>
                            <div>
                              <h3 className="text-xl font-serif text-[#800000] mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 mb-3">
                                {step.description}
                              </p>
                              <div className="inline-flex items-center bg-[#FFFDD0] px-3 py-1 rounded-full">
                                <i className="fas fa-clock text-[#800000] mr-2 text-sm"></i>
                                <span className="text-sm font-medium text-[#800000]">
                                  {step.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Empty space for timeline alignment */}
                      <div className="md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Services */}
        <div className="py-16 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Support & Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive support to ensure your franchise
                success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "fa-chalkboard-teacher",
                  title: "Training & Onboarding",
                  description:
                    "10 Weeks comprehensive training program covering operations, cooking techniques, customer service, and management.",
                },
                {
                  icon: "fa-bullhorn",
                  title: "Marketing Support",
                  description:
                    "National campaigns, local marketing strategies, social media management, and promotional materials.",
                },
                {
                  icon: "fa-paint-brush",
                  title: "Interior Design",
                  description:
                    "Complete design guidelines and support for creating the authentic Prasad Food Divine ambiance.",
                },
                {
                  icon: "fa-book",
                  title: "Operational Manual",
                  description:
                    "Detailed SOPs & Video Processes for all aspects of restaurant operations, ensuring consistency and quality.",
                },
                {
                  icon: "fa-desktop",
                  title: "Technology Platform",
                  description:
                    "Integrated POS system, inventory management, CRM, and analytics dashboard for data-driven decisions.",
                },
                {
                  icon: "fa-clipboard-check",
                  title: "Quality Assurance",
                  description:
                    "Regular audits, quality checks, and continuous improvement programs to maintain brand standards.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mb-6">
                      <i
                        className={`fas ${service.icon} text-2xl text-[#800000]`}
                      ></i>
                    </div>
                    <h3 className="text-xl font-serif text-[#800000] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Franchise Inquiry Form */}
        <div id="inquiry-form" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Start Your Franchise Journey
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to receive detailed information about
                our franchise opportunities.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-[#800000] text-white p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif mb-6">
                      Contact Our Franchise Team
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <i className="fas fa-envelope text-white"></i>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Email Us</h4>
                          <p className="text-white/80">
                            franchise@prasadfooddivine.com
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <i className="fas fa-phone-alt text-white"></i>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Call Us</h4>
                          <p className="text-white/80">+91 98765 43210</p>
                        </div>
                      </div> */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <i className="fas fa-map-marker-alt text-white"></i>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Head Office</h4>
                          <p className="text-white/80">
                          Shop No. G-20, G-21, G-22 Ground Floor, Sarvoday Mall, Kalyan West, 421301
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12">
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#FF9933] flex items-center justify-center transition-colors"
                      >
                        <i className="fab fa-facebook-f text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#FF9933] flex items-center justify-center transition-colors"
                      >
                        <i className="fab fa-instagram text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#FF9933] flex items-center justify-center transition-colors"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Preferred City/Region*
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          placeholder="Where you want to open a franchise"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="investment"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Investment Budget*
                        </label>
                        <select
                          id="investment"
                          name="investment"
                          value={formData.investment}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          required
                        >
                          <option value="">Select budget range</option>
                          <option value="50-70 Lakhs">₹50-70 Lakhs</option>
                          <option value="70-90 Lakhs">₹70-90 Lakhs</option>
                          <option value="90+ Lakhs">₹90+ Lakhs</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Timeline to Start*
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                          required
                        >
                          <option value="">Select timeline</option>
                          <option value="Immediate">Immediate</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="6+ Months">6+ Months</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="background"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Business Background
                      </label>
                      <select
                        id="background"
                        name="background"
                        value={formData.background}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      >
                        <option value="">Select your experience</option>
                        <option value="No Prior Experience">
                          No Prior Experience
                        </option>
                        <option value="Restaurant Experience">
                          Restaurant Experience
                        </option>
                        <option value="Franchise Experience">
                          Franchise Experience
                        </option>
                        <option value="Other Business Experience">
                          Other Business Experience
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                        placeholder="Any specific questions or information you'd like to share"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our franchise
                opportunities.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                {[
                  {
                    question:
                      "What is the total investment required to open a Prasad Food Divine franchise?",
                    answer:
                      "The total investment ranges from 2-3 crores, depending on the location, size, and local market conditions. This includes the franchise fee, setup costs, equipment, initial inventory, and working capital for the first few months of operation.",
                  },
                  {
                    question:
                      "Do I need prior restaurant experience to open a franchise?",
                    answer:
                      "No, prior restaurant experience is not mandatory. We provide comprehensive training and ongoing support to ensure you understand all aspects of the business. However, business acumen, leadership skills, and a passion for hospitality are important for success.",
                  },
                  {
                    question:
                      "How long does it take to open a franchise after signing the agreement?",
                    answer:
                      "Typically, it takes 3-4 months from signing the agreement to opening day. This includes location finalization, interior design and construction, equipment installation, staff hiring and training, and pre-opening marketing.",
                  },
                  {
                    question:
                      "What ongoing fees will I need to pay as a franchisee?",
                    answer:
                      "Franchisees pay a royalty fee of 3-4% of monthly revenue and marketing contributions depending on sales as a part of national marketing campaigns. These fees help maintain brand standards and drive customer traffic to all locations.",
                  },
                  {
                    question:
                      "What kind of support does Prasad Food Divine provide to franchisees?",
                    answer:
                      "We provide comprehensive support including initial training, operational guidance, marketing assistance, supply chain management, quality control, technology platforms, and regular business reviews to help optimize performance.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="mb-4 border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex justify-between items-center w-full text-left py-3 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <h3 className="text-lg font-medium text-[#800000]">
                        {faq.question}
                      </h3>
                      <i
                        className={`fas ${
                          activeAccordion === index ? "fa-minus" : "fa-plus"
                        } text-[#800000]`}
                      ></i>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeAccordion === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 pt-2 pb-4">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#800000] to-[#a83800] rounded-xl shadow-xl overflow-hidden">
              <div className="p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  Ready to Start Your Franchise Journey?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Join the Prasad Food Divine family and build a successful
                  business with our proven model and comprehensive support.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-[#800000] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    <i className="fas fa-download mr-2"></i> Download Info Kit
                  </button>
                  <a
                    href="#inquiry-form"
                    className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-calendar-check mr-2"></i> Book a
                    Consultation
                  </a>
                </div>
                <div className="mt-8 text-white/80">
                  <p>
                    For immediate assistance, contact our franchise department:
                  </p>
                  <p className="font-medium mt-2">
                    franchise@prasadfooddivine.com | +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-serif text-[#800000] mb-2">
                Application Received!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in Prasad Food Divine franchise. Our
                team will contact you within 48 hours to discuss the next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  onClick={() => setShowSuccessModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Franchise;
