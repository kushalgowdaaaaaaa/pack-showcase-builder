import { Button } from "@/components/ui/button";

const Usage = () => {
  const usageMethods = [
    {
      title: "Malt (Standard Use)",
      steps: [
        "Mix 1 glass water with 2 tsp Dhān'ya powder in cup of 200 ml milk.",
        "Boil on low heat for 3 to 5 min.",
        "Add Jaggery / Sugar.",
        "Serve hot."
      ],
      icon: "🥛"
    },
    {
      title: "Smoothie (Weight Gain)",
      steps: [
        "1 cup full fat milk + 2 tbsp Dhān'ya powder + 1 ripped banana",
        "1 tbsp peanut butter + honey / dates syrup + dry fruits (optional)",
        "Blend all ingredients until smooth.", 
        "Enjoy chilled for a quick, calorie dense snack."
      ],
      icon: "🥤"
    },
    {
      title: "Porridge (Weight Loss)",
      steps: [
        "Mix 1 to 2 tbsp Dhān'ya powder in 1 glass of water (250ml) without lumps.",
        "Boil in low flame for 3-5 minutes, stirring until thick.",
        "Add a pinch of salt & pepper (optional) + add boiled veggies of your choice/add butter/milk, onions, chilia seeds)",
        "Stir and enjoy."
      ],
      icon: "🍲"
    }
  ];

  return (
    <section id="usage" className="py-20 bg-cream-base">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            How to use Daily Dhān'ya
          </h2>
          <p className="text-xl text-muted-foreground">
            Versatile recipes for every health goal
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-organic-green to-saffron mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usageMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-organic-green/10"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-organic-green">
                  {method.title}
                </h3>
              </div>
              
              <ol className="space-y-4">
                {method.steps.map((step, stepIndex) => (
                  <li 
                    key={stepIndex}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-saffron text-white text-sm font-bold rounded-full flex items-center justify-center mr-3 mt-0.5">
                      {stepIndex + 1}
                    </span>
                    <p className="text-warm-brown text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-organic-green to-saffron rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Healthy Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the wholesome goodness of Daily Dhān'ya today!
            </p>
            <Button variant="organic-outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white hover:text-organic-green">
              Order Your Pack Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;