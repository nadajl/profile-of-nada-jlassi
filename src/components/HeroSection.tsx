import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-56 h-56 bg-primary-glow/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 border border-primary/30 backdrop-blur-sm shadow-glow">
              <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-primary">Developer & Creator</span>
            </div>

            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-text bg-clip-text text-transparent animate-pulse-glow">
                  Nada Jlassi
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Full-stack developer passionate about creating innovative solutions 
                and bringing ideas to life through code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="lg" className="text-lg px-10 py-8 shadow-accent">
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button variant="glass" size="lg" className="text-lg px-10 py-8">
                <Zap className="mr-2 w-5 h-5" />
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Modern dashboard interface"
                className="w-full h-auto object-cover"
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium animate-pulse-glow">
                Live Demo
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
