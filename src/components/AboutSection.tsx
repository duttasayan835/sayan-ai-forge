
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Workflow, 
  Shield, 
  Rocket, 
  Users, 
  TrendingUp, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
  const features = [
    { 
      icon: Bot, 
      title: "AI-Powered Automation", 
      description: "Leverage advanced machine learning algorithms to automate complex workflows and boost productivity by 300%"
    },
    { 
      icon: Workflow, 
      title: "Smart Integrations", 
      description: "Connect with 500+ tools and platforms through our intelligent integration engine"
    },
    { 
      icon: Shield, 
      title: "Enterprise Security", 
      description: "Bank-grade encryption and compliance with SOC 2, GDPR, and industry standards"
    },
    { 
      icon: Rocket, 
      title: "Scale Effortlessly", 
      description: "From startup to enterprise - our platform grows with your business needs"
    }
  ];

  const benefits = [
    "Reduce manual work by 80%",
    "Deploy in under 5 minutes",
    "24/7 expert support",
    "99.9% uptime guarantee",
    "Advanced analytics & reporting",
    "Custom workflows & automations"
  ];

  const milestones = [
    {
      year: "2024",
      title: "Series A Funding",
      description: "Raised $50M to accelerate AI development and global expansion",
      metric: "$50M"
    },
    {
      year: "2023",
      title: "Enterprise Launch",
      description: "Launched enterprise platform serving Fortune 500 companies",
      metric: "10K+ Users"
    },
    {
      year: "2022",
      title: "AI Platform Beta",
      description: "Released AI automation platform with machine learning capabilities",
      metric: "1M+ Tasks"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            About Our Platform
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Future of <span className="text-gradient">Business Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the next generation of AI-powered business tools that help companies 
            automate workflows, increase efficiency, and scale operations seamlessly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full glass-effect border-primary/10 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Why Choose Us
            </Badge>
            <h3 className="text-3xl font-bold mb-6">
              Built for Modern <span className="text-gradient">Businesses</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our platform combines cutting-edge AI technology with intuitive design 
              to deliver unprecedented automation capabilities for businesses of all sizes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <Button className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <Card className="relative glass-effect border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Integrations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                    <div className="text-sm text-muted-foreground">Tasks Automated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Our Journey
            </Badge>
            <h3 className="text-3xl font-bold">
              Building the <span className="text-gradient">Future</span>
            </h3>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="glass-effect border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary/30">
                          {item.year}
                        </Badge>
                        <div className="text-2xl font-bold text-primary">{item.metric}</div>
                      </div>
                      <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
