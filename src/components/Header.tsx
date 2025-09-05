import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-organic-green to-saffron rounded-full"></div>
          <h1 className="text-2xl font-bold text-warm-brown">Daily Dhān'ya</h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-foreground hover:text-organic-green transition-colors">Benefits</a>
          <a href="#ingredients" className="text-foreground hover:text-organic-green transition-colors">Ingredients</a>
          <a href="#usage" className="text-foreground hover:text-organic-green transition-colors">How to Use</a>
          <a href="#nutrition" className="text-foreground hover:text-organic-green transition-colors">Nutrition</a>
          <a href="#contact" className="text-foreground hover:text-organic-green transition-colors">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;