const Ingredients = () => {
  const ingredientCategories = [
    {
      category: "Grains & Millets (9)",
      items: ["Ragi (Finger millet)", "Navne (Foxtail millet)", "Harka (Kodo millet)", "Udalu (Barnyard millet)", "Koralu (Sorghum)", "Jowar millet", "Saame (Little millet)", "Bajra (Pearl millet)", "Red Raw Rice"]
    },
    {
      category: "Pulses Beans (16)",
      items: ["Green Gram", "Rajma White", "Rajma Red", "Double Beans", "Gram Dal (Split Bengal Gram)", "Black Gram", "Arahu (Tilu/till)", "Avare (Black-eyed Pea)", "Chickpea", "Masur Dal (Red lentil)", "Urad Dal (Black gram)", "Chana Dal (Bengal Gram)", "Green Gram (Mung Dal)", "Chickpea"]
    },
    {
      category: "Seeds (6)",
      items: ["Sunflower Seeds", "Chia Seeds", "Muskmelon Seeds", "Flax Seeds", "Brown Cow Seeds", "Pumpkin Seeds", "Saboodana (Sago)"]
    },
    {
      category: "Nuts (4)",
      items: ["Peanuts", "Walnut", "Almond", "Cashew"]
    },
    {
      category: "Spices (7)",
      items: ["Cardamom", "Fennel Seed", "Cumin Seeds", "Poppy Seeds", "Methi (Fenugreek)", "Pepper", "Dry Ginger"]
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Ingredient List
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            <span className="text-saffron font-bold text-3xl">42</span> Natural Ingredients - Grandma's Recipe
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-organic-green to-saffron mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredientCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-organic-green/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-organic-green mb-4">
                  {category.category}
                </h3>
                <div className="w-full h-0.5 bg-gradient-to-r from-organic-green to-saffron"></div>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-center text-warm-brown"
                  >
                    <div className="w-2 h-2 bg-saffron rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-organic-green/10 to-saffron/10 rounded-3xl p-8 border border-organic-green/20">
            <p className="text-lg text-warm-brown font-medium">
              All ingredients are carefully selected and processed to maintain their natural goodness and nutritional value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;