import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, ExternalLink, Download, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: '', email: '', company: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-primary">Exceptional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to scale your infrastructure? Let's discuss how we can build cloud solutions that grow with your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 gradient-card border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your infrastructure challenges or project requirements..."
                    rows={5}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <Card className="p-8 gradient-card border-primary/10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Get In Touch</h3>
                  <p className="text-muted-foreground">
                    Based in Mumbai, India. Available for cloud infrastructure consulting, 
                    DevOps transformation, and SRE implementation projects worldwide.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:devdesagar@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer group"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="group-hover:text-primary transition-colors">devdesagar@gmail.com</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/sagar-devde-17205213a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer group"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span className="group-hover:text-primary transition-colors">Connect on LinkedIn</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="https://github.com/devdesagar1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer group"
                    >
                      <Github className="w-5 h-5 text-primary" />
                      <span className="group-hover:text-primary transition-colors">View GitHub Profile</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 gradient-card border-primary/10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Quick Actions</h3>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full group justify-start"
                      asChild
                    >
                      <a href="/resume-sagar-devde.pdf" download>
                        <Download className="w-5 h-5" />
                        Download Resume
                        <ExternalLink className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
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
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your <span className="text-primary">infrastructure?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              From AWS migrations to Kubernetes orchestration, from CI/CD pipelines to observability stacks — 
              let's build something your team will love working with.
            </p>
            <Button variant="glow" size="lg" asChild>
              <a href="mailto:devdesagar@gmail.com">
                Start Your Project Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm