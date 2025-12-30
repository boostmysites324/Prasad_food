import { Link } from "react-router-dom";
import { serviceImages } from "../../assets/imageImports";
import servicesBgImg from "../../assets/images/services/services.jpeg";
import banquetImg from "../../assets/images/gallery/ambiance/Banquets/01 Virar/DSC09255-HDR.jpg";
import takeawayImg from "../../assets/images/gallery/food/Kaju Masala.jpg";
import reservationImg from "../../assets/images/gallery/ambiance/Interior/Thane/DSC03261-HDR.jpg";

const Services = () => {
  const services = [
    {
      title: "Banquet Halls",
      description: "Elegant, spacious halls for weddings, birthdays, and all kinds of celebrations.",
      features: [
        "Spacious and elegant venues",
        "Perfect for weddings and celebrations",
        "Birthday party arrangements",
        "Professional event management",
        "Customizable decoration options"
      ],
      image: banquetImg,
      icon: "fa-building",
      color: "from-orange-50 to-orange-100"
    },
    {
      title: "Resorts",
      description: "Perfect getaway spots for family gatherings, parties, and special occasions in a peaceful natural setting.",
      features: [
        "Peaceful natural setting",
        "Family gathering venues",
        "Party and celebration spaces",
        "Special occasion arrangements",
        "Scenic and relaxing environment"
      ],
      image: serviceImages.resorts,
      icon: "fa-mountain",
      color: "from-green-50 to-green-100"
    },
    {
      title: "Outdoor Catering",
      description: "Hosting an event? We deliver your favorite dishes and full catering service right to your venue.",
      features: [
        "Full catering service delivery",
        "Your favorite dishes available",
        "On-site event catering",
        "Professional service staff",
        "Customized menu options"
      ],
      image: serviceImages.outdoorCatering,
      icon: "fa-truck",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Tiffins & Meal Boxes",
      description: "Fresh, balanced meals - ideal for daily needs, offices, or travel.",
      features: [
        "Fresh and balanced meals",
        "Perfect for daily needs",
        "Office meal solutions",
        "Travel-friendly packaging",
        "Healthy and nutritious options"
      ],
      image: serviceImages.tiffins,
      icon: "fa-box",
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Take Away & Pick Up",
      description: "Order your favorite dishes with just one call and pick them up hot and fresh from our restaurant.",
      features: [
        "Easy phone ordering",
        "Hot and fresh pick-up",
        "Quick service",
        "Your favorite dishes available",
        "Convenient pick-up location"
      ],
      image: takeawayImg,
      icon: "fa-shopping-bag",
      color: "from-red-50 to-red-100"
    },
    {
      title: "Table Reservations",
      description: "Book your table in advance for a smooth and relaxed dining experience.",
      features: [
        "Advance table booking",
        "Smooth dining experience",
        "Relaxed atmosphere",
        "Preferred seating arrangements",
        "Hassle-free reservations"
      ],
      image: reservationImg,
      icon: "fa-calendar-check",
      color: "from-yellow-50 to-yellow-100"
    }
  ];

  const additionalServices = [
    {
      title: "Private Dining",
      description: "Exclusive private dining experiences for intimate gatherings and special celebrations.",
      icon: "fa-crown"
    },
    {
      title: "Bulk Orders",
      description: "Large quantity orders for events, parties, and corporate functions with special pricing.",
      icon: "fa-boxes"
    },
    {
      title: "Dietary Accommodations",
      description: "Special dietary requirements including gluten-free, Jain, and other custom meal preparations.",
      icon: "fa-heart"
    },
    {
      title: "Gift Vouchers",
      description: "Gift vouchers and meal packages perfect for gifting to friends and family.",
      icon: "fa-gift"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${servicesBgImg})`,
              filter: "brightness(0.7)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/70 to-transparent"></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">
              Our Services
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Discover our comprehensive range of services, from elegant banquet halls and resorts to catering, tiffins, and convenient dining options.
            </p>
            <Link
              to="/contact"
              className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
            >
              Book Your Service
            </Link>
          </div>
        </div>

        {/* Main Services Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Our Comprehensive Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From elegant banquet halls and peaceful resorts to outdoor catering, tiffins, and convenient dining services, we offer a complete range of solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <i className={`fas ${service.icon} text-xl text-[#800000]`}></i>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-[#800000] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <i className="fas fa-check text-[#FF9933] mr-3"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-block bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="py-16 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                Additional Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our specialized services designed to meet your unique dining and celebration needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-[#FFFDD0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${service.icon} text-2xl text-[#800000]`}></i>
                  </div>
                  <h3 className="text-xl font-serif text-[#800000] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Our Services Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Why Choose Our Services?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We pride ourselves on delivering exceptional vegetarian dining experiences with unmatched quality and service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "fa-leaf",
                    title: "100% Vegetarian",
                    description: "Pure vegetarian cuisine prepared with fresh, organic ingredients and traditional recipes."
                  },
                  {
                    icon: "fa-award",
                    title: "Award-Winning Quality",
                    description: "Consistently recognized for our culinary excellence and exceptional service standards."
                  },
                  {
                    icon: "fa-clock",
                    title: "Timely Service",
                    description: "Punctual delivery and service, ensuring your events and meals are served on schedule."
                  },
                  {
                    icon: "fa-users",
                    title: "Experienced Team",
                    description: "Professional staff with years of experience in Indian vegetarian cuisine and service."
                  },
                  {
                    icon: "fa-shield-alt",
                    title: "Hygiene & Safety",
                    description: "Strict hygiene protocols and safety measures for all our services and food preparation."
                  },
                  {
                    icon: "fa-heart",
                    title: "Customer Satisfaction",
                    description: "Dedicated to exceeding customer expectations with personalized service and attention to detail."
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-[#FFFDD0] rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <i className={`fas ${feature.icon} text-2xl text-[#800000]`}></i>
                    </div>
                    <h3 className="text-xl font-serif text-[#800000] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-16 bg-[#800000]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and let us create a memorable vegetarian dining experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                Contact Us Now
              </Link>
              <Link
                to="/about"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
