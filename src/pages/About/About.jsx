import { Link } from "react-router-dom";
import Testimonials from "../../components/Testimonials";
import bannerImg from "../../assets/images/about-us-banner.webp";
import { teamMembers, restaurantImages } from "../../assets/imageImports";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      {/* Header */}

      <main className="pt-16">
        <div>
          {/* Hero Section */}
          <div className="relative h-[600px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bannerImg})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/80 to-transparent"></div>
            <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
              <h2 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">
                Our Story
              </h2>
              <p className="text-xl mb-8 max-w-lg">
                Discover the journey of Prasad Food Divine, where tradition
                meets innovation in creating authentic vegetarian culinary
                experiences.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("history-section");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* History & Mission Section */}
          <div id="history-section" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-6">
                    Our History
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Founded in 1995 by the Sharma family, Prasad Food Divine
                    began as a small family-run establishment dedicated to
                    preserving the authentic flavors of traditional Indian
                    vegetarian cuisine.
                  </p>
                  <p className="text-gray-700 mb-4">
                    What started as a modest 20-seat restaurant has now grown
                    into one of the most respected vegetarian dining
                    establishments in the country, serving over 500,000
                    satisfied guests annually.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Throughout our journey, we have remained true to our
                    founding principles: using only the freshest ingredients,
                    preparing food with devotion, and treating our guests as
                    family.
                  </p>
                  <div className="bg-[#FFFDD0] p-6 rounded-lg border-l-4 border-[#800000] shadow-md">
                    <h3 className="text-xl font-serif text-[#800000] mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-700">
                      To serve divine vegetarian food that nourishes the body
                      and delights the soul, while honoring the rich culinary
                      traditions of India and promoting sustainable dining
                      practices.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg shadow-md h-64">
                    <img
                      src="https://readdy.ai/api/search-image?query=Vintage%2520photograph%2520of%2520an%2520Indian%2520family%2520restaurant%2520from%2520the%25201990s%252C%2520showing%2520the%2520original%2520small%2520establishment%2520with%2520traditional%2520decor%252C%2520the%2520founding%2520family%2520members%2520standing%2520proudly%2520at%2520the%2520entrance%252C%2520with%2520warm%2520lighting%2520and%2520a%2520simple%2520sign%2520board%2520displaying%2520the%2520restaurant%2520name%2520against%2520a%2520nostalgic%2520sepia-toned%2520background&width=400&height=500&seq=11&orientation=portrait"
                      alt="Prasad Food Divine in 1995"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md h-64">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%2520Indian%2520chef%2520in%2520traditional%2520white%2520uniform%2520and%2520toque%2520carefully%2520preparing%2520an%2520elaborate%2520vegetarian%2520dish%2520in%2520a%2520traditional%2520kitchen%2520with%2520copper%2520utensils%2520and%2520spice%2520containers%2520visible%2520in%2520the%2520background%252C%2520focused%2520expression%2520showing%2520dedication%2520to%2520culinary%2520craft%2520against%2520a%2520warm-toned%2520nostalgic%2520background&width=400&height=500&seq=12&orientation=portrait"
                      alt="Our traditional cooking methods"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md h-64 col-span-2">
                    <img
                      src="https://readdy.ai/api/search-image?query=Modern%2520elegant%2520Indian%2520restaurant%2520interior%2520showing%2520the%2520evolution%2520from%2520small%2520establishment%2520to%2520upscale%2520dining%2520venue%252C%2520with%2520beautiful%2520table%2520settings%252C%2520traditional%2520yet%2520contemporary%2520decor%252C%2520soft%2520ambient%2520lighting%252C%2520and%2520subtle%2520cultural%2520elements%2520integrated%2520into%2520the%2520sophisticated%2520design%2520against%2520a%2520warm%2520neutral%2520background&width=800&height=400&seq=13&orientation=landscape"
                      alt="Prasad Food Divine today"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Values Section */}
          <div className="py-16 bg-[#FFFDD0]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Our Core Values
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  These principles guide everything we do, from sourcing
                  ingredients to serving our guests.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "fa-leaf",
                    title: "Purity",
                    description:
                      "We use only the freshest, highest-quality vegetarian ingredients, sourced responsibly and prepared with care.",
                  },
                  {
                    icon: "fa-heart",
                    title: "Devotion",
                    description:
                      "Every dish is prepared with love and respect for the ingredients, the traditions, and the guests we serve.",
                  },
                  {
                    icon: "fa-seedling",
                    title: "Sustainability",
                    description:
                      "We are committed to environmentally conscious practices throughout our operations, from farm to table.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i
                        className={`fas ${value.icon} text-2xl text-[#800000]`}
                      ></i>
                    </div>
                    <h3 className="text-xl font-serif text-[#800000] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Culinary Philosophy */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Our Culinary Philosophy
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  At Prasad Food Divine, we believe that vegetarian cuisine can
                  be just as rich, diverse, and satisfying as any other. Our
                  approach combines time-honored traditions with contemporary
                  techniques.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%2520Indian%2520chef%2520working%2520in%2520a%2520modern%2520kitchen%252C%2520carefully%2520arranging%2520and%2520garnishing%2520an%2520artistic%2520vegetarian%2520dish%2520with%2520colorful%2520ingredients%2520and%2520microgreens.%2520The%2520kitchen%2520features%2520state-of-the-art%2520equipment%2520alongside%2520traditional%2520spice%2520containers%2520and%2520cooking%2520utensils%252C%2520showing%2520the%2520blend%2520of%2520tradition%2520and%2520innovation%2520against%2520a%2520clean%2520neutral%2520background&width=700&height=500&seq=14&orientation=landscape"
                    alt="Chef preparing traditional dish with modern techniques"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <p className="text-gray-700 mb-6">
                    Our chefs are trained in both classical Indian cooking
                    techniques and modern culinary arts, allowing them to create
                    dishes that honor tradition while embracing innovation.
                  </p>
                  <p className="text-gray-700 mb-6">
                    We believe in the power of spices not just as flavor
                    enhancers, but as elements that bring balance and wellness.
                    Each spice blend is crafted in-house according to recipes
                    that have been perfected over generations.
                  </p>
                  <p className="text-gray-700">
                    Our commitment to vegetarian cuisine is rooted in the
                    principles of compassion, sustainability, and the rich
                    vegetarian traditions of India that date back thousands of
                    years.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "fa-book",
                    title: "Traditional Recipes",
                    description:
                      "We preserve authentic recipes passed down through generations, maintaining the integrity of classic Indian vegetarian cuisine.",
                  },
                  {
                    icon: "fa-carrot",
                    title: "Fresh Ingredients",
                    description:
                      "We source the freshest seasonal produce and highest quality spices to ensure every dish bursts with natural flavor.",
                  },
                  {
                    icon: "fa-lightbulb",
                    title: "Modern Innovation",
                    description:
                      "While honoring tradition, we embrace contemporary techniques and presentations to create unique culinary experiences.",
                  },
                ].map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFDD0] rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-[#FF9933]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i
                        className={`fas ${pillar.icon} text-2xl text-[#FF9933]`}
                      ></i>
                    </div>
                    <h3 className="text-xl font-serif text-[#800000] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-700">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Meet Our Team */}
          <div className="py-16 bg-[#FFFDD0]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Meet Our Team
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  The heart and soul of Prasad Food Divine is our dedicated team
                  of culinary professionals who bring passion and expertise to
                  every dish.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Nilesh Suryavanshi",
                    role: "CMD & Founder",
                    bio: "With over 30 years of experience, Nilesh brings traditional family recipes and innovative techniques to create our signature dishes.",
                    image: teamMembers.nilesh,
                  },
                  {
                    name: "Rahul Kumar",
                    role: "Senior Purchase Executive",
                    bio: "A graduate of the Culinary Institute of India, Rahul specializes in sourcing the finest ingredients and maintaining quality standards.",
                    image: teamMembers.rahul,
                  },
                  {
                    name: "Trayambakeshwar Shukla",
                    role: "Senior Restaurant Manager",
                    bio: "Specializing in both traditional Indian sweets and fusion desserts, Trayambakeshwar brings artistry and innovation to our dessert menu.",
                    image: teamMembers.trayambakeshwar,
                  },
                  {
                    name: "Gajendra Shah",
                    role: "Unit Chef",
                    bio: "With a background in hospitality management, Gajendra ensures every guest receives an exceptional dining experience.",
                    image: teamMembers.gajendra,
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-[#800000] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#FF9933] font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Restaurant Gallery */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Our Restaurant
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Step into the warm and inviting atmosphere of Prasad Food
                  Divine, where every corner is designed to enhance your dining
                  experience.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 h-80">
                  <img
                    src={restaurantImages[0]}
                    alt="Main dining area"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md h-80">
                  <img
                    src={restaurantImages[1]}
                    alt="Private dining room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md h-80">
                  <img
                    src={restaurantImages[2]}
                    alt="Our kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md h-80">
                  <img
                    src={restaurantImages[3]}
                    alt="Outdoor seating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md col-span-1 h-80">
                  <img
                    src={restaurantImages[5]}
                    alt="Signature thali presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Awards & Recognition */}
          <div className="py-16 bg-[#FFFDD0]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
                  Awards & Recognition
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Over the years, our commitment to excellence has been
                  recognized by critics, food enthusiasts, and industry experts.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    year: "2023",
                    award: "Best Vegetarian Restaurant",
                    organization: "National Restaurant Awards",
                  },
                  {
                    year: "2022",
                    award: "Excellence in Culinary Innovation",
                    organization: "Food & Beverage Association",
                  },
                  {
                    year: "2021",
                    award: "Outstanding Customer Service",
                    organization: "Hospitality Excellence Awards",
                  },
                  {
                    year: "2020",
                    award: "Chef of the Year - Rajiv Sharma",
                    organization: "Culinary Masters Guild",
                  },
                ].map((award, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-[#FF9933] font-medium mb-2">
                      {award.year}
                    </div>
                    <h3 className="text-xl font-serif text-[#800000] mb-2">
                      {award.award}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {award.organization}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <div className="py-16 bg-[#FFFDD0]">
                  <Testimonials />
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto bg-[#800000] text-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-10">
                    <h2 className="text-3xl font-serif mb-6">
                      Experience Our Divine Cuisine
                    </h2>
                    <p className="mb-8">
                      We invite you to visit Prasad Food Divine and experience
                      our commitment to exceptional vegetarian cuisine and warm
                      hospitality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Book a Table
                      </Link>
                      <Link
                        to="/"
                        className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Return to Home
                      </Link>
                    </div>
                  </div>
                  <div
                    className="md:w-1/3 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%2520arrangement%2520of%2520traditional%2520Indian%2520spices%2520in%2520small%2520copper%2520and%2520brass%2520bowls%252C%2520including%2520turmeric%252C%2520red%2520chili%252C%2520cumin%252C%2520coriander%252C%2520cardamom%252C%2520and%2520cinnamon%252C%2520artistically%2520displayed%2520with%2520fresh%2520herbs%2520and%2520subtle%2520lighting%2520highlighting%2520the%2520vibrant%2520colors%2520against%2520a%2520dark%2520textured%2520background&width=400&height=600&seq=24&orientation=portrait')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;
