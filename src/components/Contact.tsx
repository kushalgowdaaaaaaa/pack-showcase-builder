import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-organic-green via-organic-green to-organic-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Daily Dhān'ya
          </h2>
          <p className="text-xl text-white/90">
            Start your journey to better health today
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 text-white/90">
                <div>
                  <h4 className="font-semibold text-saffron-light mb-2">DJ's KITCHEN</h4>
                  <p className="text-sm">
                    #21822, 4th Cross, Ragavedra Main Rd, Peenya Industrial<br/>
                    2nd Stage Phase IV, Peenya, Bengaluru, Karnataka 560058
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-saffron-light mb-2">Contact</h4>
                  <p>📞 To re-order please contact: 6360834242</p>
                  <p>📸 Follow us: <a href="https://www.instagram.com/daily_dhaanya" target="_blank" rel="noopener noreferrer" className="text-saffron-light hover:text-white transition-colors underline">@daily_dhaanya</a></p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-saffron-light mb-2">License</h4>
                  <p>Lic. No :21225008002822</p>
                  <p className="text-xs">Manufactured by: FSSAI</p>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">♻️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">100% Recyclable Packaging</p>
                    <p className="text-xs text-white/70">Environment friendly approach</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-organic-green mb-6">
                Order Now
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-organic-green/10 to-saffron/10 rounded-lg p-6 border border-organic-green/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-organic-green">Daily Dhān'ya - 250g</h4>
                    <span className="text-2xl font-bold text-saffron">₹220/-</span>
                  </div>
                  <ul className="text-sm text-warm-brown space-y-1">
                    <li>✅ 42 Natural Ingredients</li>
                    <li>✅ 100% Organic & Chemical Free</li>
                    <li>✅ Rich in Protein, Fiber & Minerals</li>
                    <li>✅ 9 Months Shelf Life</li>
                  </ul>
                </div>
                
                <Button 
                  variant="organic" 
                  size="lg" 
                  className="w-full text-lg py-6"
                  onClick={() => window.open('tel:6360834242', '_self')}
                >
                  📞 Call to Order: 6360834242
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Free delivery available in Bengaluru area. 
                  For other locations, shipping charges may apply.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h4 className="text-xl font-bold text-white mb-6">Our Certifications & Quality Assurance</h4>
            <div className="flex justify-center items-center space-x-8 text-white/90">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🏅</span>
                </div>
                <p className="text-sm">100% Organic</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🌿</span>
                </div>
                <p className="text-sm">No Additives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🔬</span>
                </div>
                <p className="text-sm">Sugar Free</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-sm">FSSAI Licensed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;