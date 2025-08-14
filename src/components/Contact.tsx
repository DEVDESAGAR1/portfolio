import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-primary">Exceptional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your infrastructure? Let's discuss how we can build cloud solutions that scale with your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="p-8 gradient-card border-primary/10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Whether you need help with cloud migration, DevOps transformation, or scaling your infrastructure, 
                  I'm here to help build solutions that empower your team.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:devdesagar@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span>devdesagar@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sagar-devde-17205213a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/devdesagar1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <Github className="w-5 h-5 text-primary" />
                    <span>Check out my code</span>
                  </a>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-8 gradient-card border-primary/10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Ready to Start?</h3>
                <p className="text-muted-foreground">
                  I specialize in helping companies transition to cloud-native architectures and 
                  implement DevOps practices that actually work.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    asChild
                  >
                    <a href="mailto:devdesagar@gmail.com">
                      <Mail className="w-5 h-5" />
                      Start a Conversation
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="cloud" className="group" asChild>
                      <a 
                        href="https://www.linkedin.com/in/sagar-devde-17205213a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="cloud" className="group" asChild>
                      <a 
                        href="https://github.com/devdesagar1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Let's make your infrastructure <span className="text-primary">exceptional</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              From AWS migrations to Kubernetes orchestration, from CI/CD pipelines to observability stacks — 
              let's build something your team will be excited to work with.
            </p>
            <Button variant="glow" size="lg" asChild>
              <a href="mailto:devdesagar@gmail.com">
                Get Started Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact