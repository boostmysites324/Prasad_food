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
                Discover about the journey of Prasad Food Divine, from a Chinese Street Cart to a Brand.
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
                    In 1996, at Tisgaon Naka in Kalyan East, a determined young man named Nilesh Suryavanshi began his journey with a simple Chinese food cart. With zero capital but unlimited dedication, he personally handled everything — from purchasing vegetables to serving customers.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Over time, his dedication and humble service began to win hearts. Customers started asking for more variety — and Nilesh, ever attentive to their needs, began expanding his menu beyond Chinese, slowly venturing into Indian, Tandoor, Continental, Pantry, and more.
                  </p>
                  <p className="text-gray-700 mb-4">
                    As demand grew, so did his ambition. He launched a modest bamboo-style restaurant — simple in design but rich in warmth and flavour. Its success led to the creation of something greater; Kalyan- Dombivli's first air-conditioned restaurant. A step that reshaped the dining experience in the city.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Back then, Prasad was a non-vegetarian restaurant. But Nilesh's spiritual journey soon brought a turning point. After reading the sacred Bhagavad Gita, he gave up eating non-veg food himself. A powerful thought struck him: "If I won't consume it, how can I serve it to others?"
                  </p>
                  <p className="text-gray-700 mb-4">
                    This powerful thought led him to take a bold and heartfelt decision — to make Prasad Food Divine a 100% pure vegetarian restaurant, reflecting both personal values and respect for purity in food.
                  </p>
                  <p className="text-gray-700 mb-6">
                    <strong>Why the Name "Prasad"?</strong><br/>
                    For Nilesh, food was never just a business. He believed everything we eat is a 'Prasad' from God. Just like how offerings are first made to a deity and then shared with others, he saw every meal served as sacred.
                  </p>
                  <p className="text-gray-700 mb-6">
                    And so, "Prasad Food Divine" was born, not just as a name, but as a philosophy. Every customer is seen as a form of God, and serving them good, clean, and nutritious food is the restaurant's greatest honour.
                  </p>
                  <p className="text-gray-700 mb-6">
                    <strong>The Journey So Far</strong> — Prasad started with a small Chinese food cart and a big dream. Today, with 10 growing branches, Nilesh's journey is a story of hard work, growth, and belief in God.
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
                  At Prasad Food Divine, we believe food is the Prasad of God — pure, sacred, and to be served with love.
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
                    We always focus on purity and quality, choosing the best ingredients and cooking with care. Our food is inspired by traditional recipes but also has a touch of new ideas to delight every guest.
                  </p>
                  <p className="text-gray-700 mb-6">
                    For us, food is not just about taste. It is about care, respect, and happiness. Every plate we serve is made with sincerity so that our guests feel truly satisfied and connected.
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
                      "We keep our traditions alive but add a little newness to every dish. It's our way of keeping alive the taste you love.",
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
                    role: "Founder & CMD",
                    bio: "With over 30 years of experience in the Restaurant Industry, Nilesh Suryavanshi laid the foundation of Prasad with a vision to serve best quality vegetarian food to customers.",
                    image: teamMembers.nilesh,
                  },
                  {
                    name: "Rahul Kumar",
                    role: "Senior Purchase Executive",
                    bio: "Rahul oversees all purchases and vendor management at Prasad. Known for his strategic approach and cost control, he ensures that every ingredient meets the high-quality standards.",
                    image: teamMembers.rahul,
                  },
                  {
                    name: "Trayambakeshwar Shukla",
                    role: "Senior Restaurant Manager",
                    bio: "Mr. Shukla leads the restaurant's daily operations, ensuring a seamless dining experience for every guest. His expertise in guest relations and team coordination helps Prasad maintain the warmth, service, and hospitality that define Prasad.",
                    image: teamMembers.trayambakeshwar,
                  },
                  {
                    name: "Gajendra Shah",
                    role: "Unit Chef",
                    bio: "As the heart of our kitchen, Chef Gajendra ensures that the quality, taste, and purity of every dish are consistently maintained. An expert in Indian cuisine, he blends perfection with passion to create the signature flavors that Prasad is known for.",
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
              <div className="flex items-center justify-center gap-6">
                {[
                  {
                    year: "2025",
                    award: "The Best Vegetarian Restaurant of Powai Central Mumbai",
                    organization: "Eazydiner FOODIE Awards",
                  },
                  {
                    year: "2024",
                    award: "Business Excellence award for outstanding achievement in hotel industry",
                    organization: "By Uday Samant – Cabinet Minister of Ministry of Industries Maharashtra",
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
