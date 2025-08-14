import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Code, Shield } from "lucide-react"
import heroBackground from "@/assets/hero-bg.jpg"
import profileImage from "@/assets/sagar-profile.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <Cloud className="absolute top-20 left-20 w-8 h-8 text-primary/30 animate-float" style={{animationDelay: '0s'}} />
        <Code className="absolute top-40 right-32 w-6 h-6 text-primary/40 animate-float" style={{animationDelay: '1s'}} />
        <Shield className="absolute bottom-32 left-16 w-7 h-7 text-primary/35 animate-float" style={{animationDelay: '2s'}} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  DevOps & SRE Engineer • Mumbai, India
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Sagar Devde
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                  <span className="text-primary font-semibold">Automating cloud deployments and observability</span> for high-scale environments with 7+ years of AWS, Kubernetes, and CI/CD expertise.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-foreground/90">
                  🚀 <span className="text-primary font-semibold">Reduced deployment time by 60%</span> through automated CI/CD pipelines
                </p>
                <p className="text-lg text-foreground/90">
                  📊 <span className="text-primary font-semibold">Improved MTTR by 40%</span> with centralized monitoring and alerting
                </p>
                <p className="text-lg text-foreground/90">
                  ☁️ <span className="text-primary font-semibold">Deployed multi-region EKS clusters</span> serving millions of users
                </p>
              </div>

              <div className="pt-4">
                <p className="text-xl font-medium mb-6 text-foreground">
                  My mission: <span className="text-primary">Build cloud infrastructure that scales with your success.</span>
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="hero" className="group" asChild>
                    <a href="#projects">
                      View Projects
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="cloud" size="lg" asChild>
                    <a href="#contact">
                      Let's Connect
                    </a>
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-border/50">
                <div>
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">AWS Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-glow">
                  <img 
                    src={profileImage} 
                    alt="Sagar Devde - DevOps & Cloud Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-accent rounded-full flex items-center justify-center shadow-lg">
                  <Cloud className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero