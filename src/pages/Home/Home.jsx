import { Link } from "react-router-dom";
import Testimonials from "../../components/Testimonials";
import { signatureDishes, galleryImages as importedGalleryImages, homePageImage, homePageWelcomeImage } from "../../assets/imageImports";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      <main className="pt-16">
        <div>
          {/* Hero Section */}
          <div className="relative h-[600px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${homePageImage}')`,
                filter: "brightness(0.7)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/70 to-transparent"></div>
            <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
              <h2 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">
                Divine Food, Delivered with Devotion
              </h2>
              <p className="text-xl mb-8 max-w-lg">
                Experience the authentic flavors of India through our carefully
                crafted vegetarian cuisine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Reserve a Table
                </Link>
              </div>
            </div>
          </div>
          {/* Featured Dishes */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Our Signature Dishes
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Enjoy a refined dining experience with our chef’s exclusive
                  dishes, crafted for both taste and style.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Cheese Corn Ball",
                    description:
                      "Crispy corn and cheese balls served with tangy sauce",
                    image: signatureDishes.cheeseCornBall,
                  },
                  {
                    name: "Kaju Masala",
                    description:
                      "Rich cashew curry with aromatic spices and cream",
                    image: signatureDishes.kajuMasala,
                  },
                  {
                    name: "Mix Grilled Finger",
                    description:
                      "Assorted grilled vegetables with special marinade",
                    image: signatureDishes.mixGrilledFinger,
                  },
                  {
                    name: "Sizzling Brownie",
                    description: "Hot chocolate brownie with ice cream and chocolate sauce",
                    image: signatureDishes.sizzlingBrownie,
                  },
                  {
                    name: "Strawberry Pina Colada",
                    description: "Refreshing strawberry and coconut mocktail",
                    image: signatureDishes.strawberryPinaColada,
                  },
                  {
                    name: "Veg Biryani",
                    description:
                      "Fragrant basmati rice with mixed vegetables and aromatic spices",
                    image: signatureDishes.vegBiryani,
                  },
                ].map((dish, index) => (
                  <div
                    key={index}
                    className="group relative rounded-lg overflow-hidden shadow-lg h-72 cursor-pointer"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${dish.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-serif mb-2">
                        {dish.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {dish.description}
                      </p>
                      {/* <button className="mt-4 bg-[#FF9933] hover:bg-[#e88a2a] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                        View Details
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Why Choose Us Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Why Choose Us
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the perfect blend of tradition and innovation in
                  every dish we serve.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "fa-leaf",
                    title: "Pure Vegetarian",
                    description:
                      "We take pride in serving 100% vegetarian cuisine prepared with the finest ingredients.",
                  },
                  {
                    icon: "fa-award",
                    title: "Authentic Recipes",
                    description:
                      "Our recipes are passed down through generations, preserving authentic Indian flavors.",
                  },
                  {
                    icon: "fa-heart",
                    title: "Made with Love",
                    description:
                      "Every dish is prepared with devotion and served with care to ensure the best dining experience.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-[#FFFDD0] rounded-lg hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center mx-auto mb-4">
                      <i
                        className={`fas ${feature.icon} text-2xl text-white`}
                      ></i>
                    </div>
                    <h3 className="text-xl font-serif text-[#800000] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Hygiene Practices Section */}
          <div className="py-16 bg-gradient-to-b from-[#FFF8DC] to-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Our Commitment to Excellence
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience dining with complete peace of mind, backed by our
                  unwavering dedication to cleanliness and safety.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "fa-hand-sparkles",
                    title: "Pristine Environment",
                    description:
                      "Regular deep cleaning and sanitization of all surfaces, ensuring a spotless dining space.",
                    color: "from-blue-50 to-blue-100",
                  },
                  {
                    icon: "fa-certificate",
                    title: "Quality Certified",
                    description:
                      "FSSAI certified kitchen operations with strict adherence to international safety standards.",
                    color: "from-green-50 to-green-100",
                  },
                  {
                    icon: "fa-shield-virus",
                    title: "Safety First",
                    description:
                      "Comprehensive safety protocols including daily health checks and proper protective equipment.",
                    color: "from-yellow-50 to-yellow-100",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-50`}
                    ></div>
                    <div className="relative p-8">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <i
                          className={`fas ${feature.icon} text-2xl text-[#800000]`}
                        ></i>
                      </div>
                      <h3 className="text-xl font-serif text-[#800000] mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-serif text-[#800000] mb-6">
                      Safety Measures in Action
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Regular Sanitization",
                          description:
                            "Thorough cleaning of all surfaces every 2 hours",
                        },
                        {
                          title: "Staff Protection",
                          description:
                            "Mandatory use of masks, gloves, and hairnets",
                        },
                        {
                          title: "Health Monitoring",
                          description:
                            "Daily temperature checks and health screening",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-[#FFF8DC] rounded-full flex items-center justify-center">
                            <i className="fas fa-check text-[#800000]"></i>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#800000] mb-1">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-4 mt-8">
                      <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                        <i className="fas fa-star text-green-600"></i>
                        <span className="text-sm font-medium text-green-800">
                          FSSAI Certified
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                        <i className="fas fa-award text-blue-600"></i>
                        <span className="text-sm font-medium text-blue-800">
                          ISO 22000:2018
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[400px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20and%20pristine%20modern%20restaurant%20kitchen%20with%20chefs%20in%20professional%20attire%20preparing%20food%20with%20utmost%20care%20and%20attention%20to%20hygiene%2C%20featuring%20gleaming%20stainless%20steel%20equipment%20and%20organized%20workstations%20in%20warm%20lighting%20against%20a%20clean%20background&width=800&height=600&seq=13&orientation=landscape')`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Section */}
          <div className="py-16 bg-[#FFFDD0]">
            <Testimonials />
          </div>
          {/* Welcome Section */}
          <div className="py-16 bg-[#FFFDD0]">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-10">
                    <h2 className="text-3xl font-serif text-[#800000] mb-6">
                      Welcome to Prasad Food Divine
                    </h2>
                    <p className="text-gray-600 mb-4">
                      At Prasad Food Divine, we believe that food is not just
                      sustenance but a divine offering. Our restaurant brings
                      you the authentic flavors of India through our carefully
                      crafted vegetarian cuisine.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Every dish is prepared with devotion, using traditional
                      recipes passed down through generations, and served in an
                      ambiance that soothes the soul.
                    </p>
                    <Link
                      to="/about"
                      className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div
                    className="md:w-1/2 bg-cover bg-center h-80 md:h-auto"
                    style={{
                      backgroundImage: `url('${homePageWelcomeImage}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Special Offers Section */}
      {/* <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
              Special Offers & Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our exclusive dining experiences and special promotions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weekend Brunch Special",
                description:
                  "Enjoy our lavish vegetarian brunch with complimentary dessert",
                validity: "Every Saturday & Sunday",
                discount: "20% OFF",
                image:
                  "https://readdy.ai/api/search-image?query=Luxurious%20Indian%20vegetarian%20brunch%20spread%20with%20colorful%20dishes%2C%20fresh%20fruits%2C%20and%20desserts%20beautifully%20arranged%20on%20an%20elegant%20table%20with%20ambient%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=15&orientation=landscape",
              },
              {
                title: "Corporate Lunch Deal",
                description: "Perfect for business meetings and team lunches",
                validity: "Monday to Friday",
                discount: "15% OFF",
                image:
                  "https://readdy.ai/api/search-image?query=Professional%20setup%20of%20Indian%20vegetarian%20business%20lunch%20with%20elegant%20plating%20and%20sophisticated%20table%20arrangement%20in%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=16&orientation=landscape",
              },
              {
                title: "Festival Special Thali",
                description:
                  "Traditional festive thali with special seasonal items",
                validity: "Limited Time Offer",
                discount: "Special Price",
                image:
                  "https://readdy.ai/api/search-image?query=Elaborate%20Indian%20festive%20thali%20with%20multiple%20vegetarian%20dishes%2C%20sweets%2C%20and%20traditional%20decorations%20arranged%20beautifully%20in%20warm%20lighting%20against%20a%20simple%20neutral%20background&width=400&height=300&seq=17&orientation=landscape",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#800000] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <i className="far fa-clock mr-2"></i>
                    <span>{offer.validity}</span>
                  </div>
                  <button className="w-full bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Gallery Section */}
      <div className="py-16 bg-[#FFFDD0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our restaurant's ambiance and
              signature dishes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              // Ambiance - Banquet images
              importedGalleryImages.ambiance.banquets.virar[0].src,
              // Food - Paneer
              importedGalleryImages.food.paneer[0].src,
              // Food - Main Course (Veg Biryani)
              importedGalleryImages.food.mainCourse[3].src,
              // Ambiance - Interior images
              importedGalleryImages.ambiance.interior.virar[0].src,
              // Food - Main Course (Kaju Masala)
              importedGalleryImages.food.mainCourse[1].src,
              // Food - Deserts (Sizzling Brownie)
              importedGalleryImages.food.deserts[1].src,
            ].map((image, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
                {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white text-[#800000] px-6 py-2 rounded-md font-medium transition-all transform translate-y-4 group-hover:translate-y-0 !rounded-button whitespace-nowrap">
                    View Larger
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
