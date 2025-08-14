import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"

const Projects = () => {
  const projects = [
    { 
      title: "CI/CD Automation Pipeline", 
      desc: "Designed fully automated CI/CD pipelines using GitHub Actions and Terraform for multi-environment cloud deployments. Integrated automated testing, linting, security scans, and one-click rollbacks for rapid and reliable software delivery.", 
      tech: "GitHub Actions, Terraform, AWS, Python, Snyk", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "Cloud Monitoring Dashboard", 
      desc: "Implemented centralized monitoring dashboards with New Relic and Grafana to track multi-region cloud infrastructure health. Enabled real-time alerting and analytics for SRE teams to proactively address incidents.", 
      tech: "New Relic, Grafana, AWS CloudWatch, Python", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "Kubernetes Cluster Deployment", 
      desc: "Deployed highly available Kubernetes clusters on AWS using Terraform and Helm charts with automated scaling policies. Streamlined application onboarding with custom Helm templates and managed EKS upgrades.", 
      tech: "Kubernetes (EKS), Terraform, Helm, AWS, Docker", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "Infrastructure as Code with Terraform", 
      desc: "Built modular Terraform templates for AWS infrastructure including VPCs, EC2, RDS, and S3 buckets with secure IAM roles. Enabled zero-touch provisioning and drift detection.", 
      tech: "Terraform, AWS (VPC, EC2, RDS, S3, IAM)", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "Automated Cloud Security Compliance", 
      desc: "Implemented automated security scans and compliance checks in AWS using Terraform, AWS Config, and Snyk for continuous governance. Integrated vulnerability management into CI/CD pipelines.", 
      tech: "Terraform, AWS Config, Snyk, GitHub Actions", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "High-Availability Web Application Deployment", 
      desc: "Deployed highly available web applications with auto-scaling, load balancing, and disaster recovery across AWS regions using Terraform and Kubernetes. Reduced RTO/RPO to under 10 minutes.", 
      tech: "Terraform, Kubernetes, AWS ALB, Auto Scaling", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "Log Aggregation and Observability Pipeline", 
      desc: "Created centralized logging and observability pipelines using CloudWatch, SumoLogic, and Grafana for proactive incident detection and faster MTTR. Automated log parsing and alerting.", 
      tech: "AWS CloudWatch, SumoLogic, Grafana, Python", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "Serverless Application Deployment", 
      desc: "Deployed serverless microservices using AWS Lambda, API Gateway, DynamoDB, and Terraform for cost-efficient and scalable architecture. Automated blue/green deployments and canary releases.", 
      tech: "AWS Lambda, API Gateway, DynamoDB, Terraform", 
      repo: "https://devdesagar1.github.io/profile/" 
    },
    { 
      title: "Disaster Recovery Automation", 
      desc: "Built automated disaster recovery workflows for AWS workloads using Terraform, S3 replication, and Lambda scripts to ensure high availability. Orchestrated cross-region failover testing and reporting.", 
      tech: "Terraform, AWS S3, Lambda, Python", 
      repo: "https://devdesagar1.github.io/profile/" 
    }
  ]

  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world DevOps & SRE solutions showcasing cloud automation, infrastructure as code, and high-availability systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <Card key={index} className="p-6 gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-[1.02]">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(', ').map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-primary/20 hover:bg-primary/10 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="group" asChild>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          View Details 
                          <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {!showAll && projects.length > 6 && (
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowAll(true)}
                className="group"
              >
                See More Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">9</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Deployment Time Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">MTTR Improved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
