import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Zap } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based in Mumbai, India, I'm a DevOps & SRE Engineer with 7+ years specializing in cloud automation, infrastructure as code, and high-availability systems that scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Cloud Excellence</h3>
                <p className="text-muted-foreground">
                  Architected and deployed cloud-native solutions serving millions of users with 99.9% uptime across multi-region AWS environments.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Automation Impact</h3>
                <p className="text-muted-foreground">
                  Reduced deployment time by 60% and improved MTTR by 40% through intelligent automation and monitoring pipelines.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Security & Compliance</h3>
                <p className="text-muted-foreground">
                  Implemented automated security scans and compliance frameworks, reducing vulnerability detection time by 70%.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 gradient-card border-primary/10">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold">My Philosophy</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I believe that infrastructure should empower, not hinder, product teams. 
                Every system I build is designed with <span className="text-primary font-semibold">developer happiness</span>, 
                <span className="text-primary font-semibold"> reliability</span>, and 
                <span className="text-primary font-semibold"> scalability</span> in mind.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Badge variant="secondary">Infrastructure as Code</Badge>
                <Badge variant="secondary">DevOps Culture</Badge>
                <Badge variant="secondary">Cloud Native</Badge>
                <Badge variant="secondary">Security First</Badge>
                <Badge variant="secondary">Automation</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About