
const Testimonials = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
          What Our Guests Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from our valued guests about their dining experience at Prasad
          Food Divine.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Priya Sharma",
            role: "Food Blogger",
            image:
              "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20woman%20in%20her%20early%2030s%20with%20a%20warm%20smile%20wearing%20elegant%20traditional%20attire%20against%20a%20simple%20neutral%20background%20that%20highlights%20her%20natural%20beauty%20and%20confidence&width=200&height=200&seq=9&orientation=squarish",
            text: "The attention to detail in every dish is remarkable. The flavors are authentic and the presentation is modern. A perfect blend of tradition and innovation.",
          },
          {
            name: "Rajesh Kumar",
            role: "Business Executive",
            image:
              "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20man%20in%20his%20mid%2040s%20wearing%20a%20business%20suit%20with%20a%20confident%20smile%20against%20a%20simple%20neutral%20background%20that%20conveys%20professionalism%20and%20trustworthiness&width=200&height=200&seq=10&orientation=squarish",
            text: "Prasad Food Divine has become our go-to place for family celebrations. The ambiance is perfect and the service is impeccable.",
          },
          {
            name: "Sarah Williams",
            role: "Food Critic",
            image:
              "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20woman%20in%20her%20late%2030s%20with%20a%20sophisticated%20look%20wearing%20modern%20professional%20attire%20against%20a%20simple%20neutral%20background%20that%20highlights%20her%20expertise%20and%20authority&width=200&height=200&seq=11&orientation=squarish",
            text: "A vegetarian heaven! The innovative take on traditional Indian dishes is refreshing. Each visit is a new culinary adventure.",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
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
