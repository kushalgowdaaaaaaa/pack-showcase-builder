const Nutrition = () => {
  const nutritionData = [
    { nutrient: "Energy", amount: "346 kcal" },
    { nutrient: "Total Carbohydrates", amount: "46 g" },
    { nutrient: "Protein", amount: "17.0 g" },
    { nutrient: "Fiber", amount: "11 g" },
    { nutrient: "Fats", amount: "13 g" },
    { nutrient: "Added Sugar", amount: "0 g" },
    { nutrient: "Iron", amount: "6.4 mg" },
    { nutrient: "Calcium", amount: "156 mg" }
  ];

  return (
    <section id="nutrition" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Nutritional Information
          </h2>
          <p className="text-xl text-muted-foreground">
            Per 100gm serving - Packed with essential nutrients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-organic-green to-saffron mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nutrition Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-organic-green/10">
              <h3 className="text-2xl font-bold text-organic-green mb-6 text-center">
                Nutritional Info per 100gm
              </h3>
              
              <div className="space-y-4">
                {nutritionData.map((item, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-warm-brown">
                      {item.nutrient}
                    </span>
                    <span className="font-bold text-saffron">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-organic-green/10 to-saffron/10 rounded-2xl p-8 border border-organic-green/20">
                <h4 className="text-xl font-bold text-organic-green mb-4">
                  🌟 Key Highlights
                </h4>
                <ul className="space-y-3 text-warm-brown">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-saffron rounded-full mr-3"></div>
                    <span><strong>High Protein:</strong> 17g per 100g</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-saffron rounded-full mr-3"></div>
                    <span><strong>Rich in Fiber:</strong> 11g for healthy digestion</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-saffron rounded-full mr-3"></div>
                    <span><strong>Zero Added Sugar:</strong> Naturally sweetened</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-saffron rounded-full mr-3"></div>
                    <span><strong>Iron Rich:</strong> 6.4mg for healthy blood</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-organic-green/10">
                <h4 className="text-xl font-bold text-saffron mb-4">
                  📋 Product Details
                </h4>
                <div className="space-y-3 text-warm-brown">
                  <div className="flex justify-between">
                    <span>MRP:</span>
                    <span className="font-bold">₹220/-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Net Weight:</span>
                    <span>250g</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-4">
                    Best before 9 months of packaging
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;