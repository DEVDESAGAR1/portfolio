import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Settings, Rocket, Code, BarChart3, Shield } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud & Platforms",
      skills: ["AWS (EC2, VPC, IAM, EKS, RDS, S3, Lambda)", "Docker", "Kubernetes (EKS)", "CloudFormation"]
    },
    {
      icon: Settings,
      title: "Infrastructure as Code",
      skills: ["Terraform (Modules, Workspaces)", "Helm Charts", "CloudFormation", "Ansible"]
    },
    {
      icon: Rocket,
      title: "CI/CD & Automation",
      skills: ["GitHub Actions", "GitLab CI", "Jenkins", "Octopus Deploy", "Snyk Security"]
    },
    {
      icon: Code,
      title: "Programming & Scripting",
      skills: ["Python (automation, APIs)", "Bash / Shell Scripting", "Go (microservices)", "YAML / JSON"]
    },
    {
      icon: BarChart3,
      title: "Monitoring & Observability",
      skills: ["Prometheus & Grafana", "New Relic", "AWS CloudWatch", "ELK Stack"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      skills: ["IAM Policy Design", "SAST (Snyk, CodeQL)", "Audit & Compliance", "Security Automation"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building, deploying, and maintaining cloud-native infrastructure at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card 
                  key={index} 
                  className="p-6 gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="mr-2 mb-2 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Soft Skills */}
          <Card className="mt-12 p-8 gradient-card border-primary/10">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold">Beyond Technical Skills</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Building great infrastructure requires more than just technical knowledge.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="border-primary/30 text-primary">Cross-functional Collaboration</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Problem Solving</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Technical Leadership</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Mentoring & Knowledge Sharing</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Incident Management</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Change Management</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills