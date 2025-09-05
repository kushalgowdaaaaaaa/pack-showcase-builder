const Benefits = () => {
  const benefits = [
    {
      title: "Rich in Nutrients",
      description: "Offers a range of health benefits due to its nutrient-rich ingredients, packed with protein, fibers & essential minerals like iron, calcium & magnesium."
    },
    {
      title: "Healthy Digestion",
      description: "High fiber content promotes healthy digestion, prevents constipation & supports gut health."
    },
    {
      title: "Boosts Immunity", 
      description: "Antioxidants support overall wellness & boost immunity for better health."
    },
    {
      title: "Healthy Skin & Hair",
      description: "Maintains healthy skin & hair with essential nutrients and natural minerals."
    },
    {
      title: "Blood Sugar Management",
      description: "Low Glycemic Index helps in managing blood sugar & cholesterol level."
    },
    {
      title: "Natural Energy",
      description: "Provides sustained energy throughout the day with wholesome multigrain nutrition."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-cream-base">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Benefits of having Daily Dhān'ya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-organic-green to-saffron mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-organic-green/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-organic-green to-saffron rounded-full mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              
              <h3 className="text-xl font-semibold text-warm-brown mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-warm-brown font-medium">
            Overall Daily Dhān'ya is a versatile & wholesome addition to your diet tailored to your healthy goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;