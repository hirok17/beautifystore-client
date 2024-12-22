 

const About = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-lg text-center mb-8">
            Welcome to <span className="font-semibold text-pink-500">BeautifyStore</span>, your one-stop destination for premium beauty and skincare products that celebrate self-care and confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to empower you with products that make self-care an everyday luxury. From deeply hydrating body lotions and velvety creams to invigorating body washes and vibrant makeup, every product is carefully formulated to meet the diverse needs of our customers.
              </p>
            </div>
  
            {/* Why Choose Us Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><span className="font-semibold text-pink-500">Quality Ingredients:</span> The finest natural and scientifically proven ingredients.</li>
                <li><span className="font-semibold text-pink-500">Cruelty-Free:</span> Ethical practices and no animal testing.</li>
                <li><span className="font-semibold text-pink-500">For All Skin Types:</span> Products that cater to everyone.</li>
                <li><span className="font-semibold text-pink-500">Sustainability:</span> Eco-friendly packaging and practices.</li>
              </ul>
            </div>
          </div>
  
          {/* Products Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              What We Offer
            </h3>
            <p className="text-gray-600 text-center">
              Discover our range of <span className="font-semibold text-pink-500">Body Care</span>, <span className="font-semibold text-pink-500">Makeup</span>, and <span className="font-semibold text-pink-500">Skincare</span> products designed to make you look and feel your best.
            </p>
          </div>
  
          {/* Closing Statement */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Thank you for choosing <span className="font-semibold text-pink-500">BeautifyStore</span>. Let’s embrace beauty, inside and out, together!
            </p>
            <p className="font-bold text-gray-800 mt-4">
              BeautifyStore — Because You Deserve the Best.
            </p>
          </div>
        </div>
      </section>
    );
};

export default About;