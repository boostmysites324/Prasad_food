
const Testimonials = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
          What Our Guests Say About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from our valued guests about their dining experience at Prasad
          Food Divine.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Pranali Sawale",
            role: "Guest",
            text: "I've dined at Prasad Food Divine four times, and the food is always a perfect 10/10. The ambiance is great, making it a must-visit for vegetarians as it's a pure veg restaurant.",
          },
          {
            name: "Lalit Sutar",
            role: "Guest",
            text: "I had a wonderful experience at Prasad Food Divine! The service was warm, attentive, and quick — the staff made sure we felt comfortable throughout our visit. The food was delicious too.",
          },
          {
            name: "Darshana Chavan",
            role: "Guest",
            text: "Had an amazing experience at Prasad Food Divine! The food was top-notch—every dish was bursting with flavour and served fresh. The ambiance is perfect for both families and friends, creating a comfortable and welcoming environment.",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
          >
            <div className="flex items-center mb-4">
              <div
                className="w-16 h-16 rounded-full bg-[#800000]/10 flex items-center justify-center mr-4 flex-shrink-0"
                aria-hidden
              >
                <i className="fas fa-user text-[#800000] text-2xl"></i>
              </div>
              <div>
                <h3 className="font-serif text-[#800000]">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="mt-4 text-[#FF9933]">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center mt-10">
                <button className="bg-[#800000] hover:bg-[#6a0000] text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  View All Reviews
                </button>
              </div> */}
    </div>
  );
};

export default Testimonials;
