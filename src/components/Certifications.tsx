import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"

const Certifications = () => {
  const certifications = [
    { "title": "GitHub Copilot", "issuer": "GitHub" },
    { "title": "AI Agents Fundamentals", "issuer": "Hugging Face" },
    { "title": "HashiCorp Certified: Terraform Associate (003)", "issuer": "HashiCorp" },
    { "title": "New Relic Verified Foundation (NVF)", "issuer": "New Relic" },
    { "title": "AWS Certified AI Practitioner", "issuer": "Amazon Web Services (AWS)" },
    { "title": "AWS Certified AI Practitioner Early Adopter", "issuer": "Amazon Web Services (AWS)" },
    { "title": "GitHub Foundations", "issuer": "GitHub" },
    { "title": "[PCAP-31-03] PCAP – Certified Associate in Python Programming", "issuer": "Python Developer" },
    { "title": "Professional Scrum Master", "issuer": "Scrum.org" },
    { "title": "Fundamentals of Digital Marketing", "issuer": "Google Digital Unlocked" },
    { "title": "AWS Certified Cloud Practitioner", "issuer": "Amazon Web Services (AWS)" },
    { "title": "AWS Certified Solutions Architect – Associate", "issuer": "Amazon Web Services (AWS)" },
    { "title": "AWS Certified Developer – Associate", "issuer": "Amazon Web Services (AWS)" },
    { "title": "HashiCorp Certified: Terraform Associate (002)", "issuer": "HashiCorp" }
  ]

  const getIssuerBadgeColor = (issuer: string) => {
    if (issuer.includes("AWS")) return "bg-orange-500/10 text-orange-500 border-orange-500/20"
    if (issuer.includes("HashiCorp")) return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    if (issuer.includes("GitHub")) return "bg-gray-500/10 text-gray-300 border-gray-500/20"
    if (issuer.includes("Google")) return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    return "bg-primary/10 text-primary border-primary/20"
  }

  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">Certifications</span> & Credentials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating expertise in cloud platforms, DevOps tools, and modern development practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-[1.02]">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getIssuerBadgeColor(cert.issuer)}`}
                      >
                        {cert.issuer}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">14</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">AWS Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">HashiCorp Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications