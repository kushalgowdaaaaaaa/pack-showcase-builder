import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grains.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Natural organic grains and millets" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/80 via-warm-brown/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-organic-green/30 text-white font-bold text-lg rounded-full border-2 border-organic-green/50 shadow-lg backdrop-blur-sm animate-pulse">
              100% Organic ✨ 42 Natural Ingredients
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Daily <span className="bg-gradient-to-r from-saffron to-saffron-light bg-clip-text text-transparent">Dhān'ya</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-cream-base/90 mb-4">
            Wholesome Multigrain Blend
          </h2>
          
          <p className="text-xl text-cream-base/80 mb-8 leading-relaxed">
            <strong>Grandma's Recipe</strong> - Start Every Day the Dhān'ya Way! 
            Packed with protein, dietary fiber, and iron, each serving balances wholesome energy 
            and natural taste, supporting family health and happiness.
          </p>
          
          <div className="mb-8">
            <Button variant="organic-outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-saffron rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 right-40 w-2 h-2 bg-organic-green rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-40 left-20 w-4 h-4 bg-saffron/50 rounded-full animate-bounce delay-700"></div>
    </section>
  );
};

export default Hero;