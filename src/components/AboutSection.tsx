
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Code, 
  Database, 
  Brain, 
  Award, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
  const skills = [
    { 
      icon: Bot, 
      title: "AI/LLM Development", 
      description: "Building intelligent systems with LangChain, OpenAI API, and custom AI agents for real-world applications"
    },
    { 
      icon: Code, 
      title: "Full-Stack Development", 
      description: "Proficient in Python, JavaScript, React, Node.js, and modern web technologies"
    },
    { 
      icon: Database, 
      title: "Data Engineering", 
      description: "Experience with MongoDB, PostgreSQL, data analysis, and building scalable data pipelines"
    },
    { 
      icon: Brain, 
      title: "Problem Solving", 
      description: "Strong analytical skills with experience in competitive programming and algorithm design"
    }
  ];

  const achievements = [
    "Best Paper Award - ICSAA 2025 'Sustainable AI and Its Applications'",
    "Outstanding Paper Award - Ideathon 2025 (Inter-Department Research Contest)",
    "Smart Bengal Hackathon Finalist (2024)",
    "Top 6000 - Reliance Foundation Scholars Test",
    "WBJEE Rank: 4116"
  ];

  const experience = [
    {
      title: "AI/LLM Enthusiast",
      company: "Personal Projects",
      period: "2022 - Present",
      description: "Building AI agents, automation tools, and LLM-powered applications",
      metric: "10+ Projects"
    },
    {
      title: "Business Analytics Intern",
      company: "SmartBridge (powered by Google Cloud)",
      period: "April - June 2024",
      description: "Developed interactive dashboards and analyzed business case studies",
      metric: "100% Completion"
    },
    {
      title: "Generative AI Intern",
      company: "SmartBridge Virtual Program",
      period: "Sept - Oct 2024",
      description: "Applied core AI concepts to build real-world solutions using Google Cloud",
      metric: "Certificate"
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
            About Me
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Building the Future with <span className="text-gradient">AI & Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science student passionate about automating workflows and deploying 
            real-world AI systems. Currently developing innovative solutions that bridge the gap 
            between AI research and practical applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full glass-effect border-primary/10 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience & Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20"
        >
          <div>
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Experience
            </Badge>
            <h3 className="text-3xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary/30">
                          {exp.period}
                        </Badge>
                        <div className="text-lg font-bold text-primary">{exp.metric}</div>
                      </div>
                      <h4 className="font-semibold mb-1 text-lg">{exp.title}</h4>
                      <p className="text-muted-foreground mb-2 font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Education & Achievements
            </Badge>
            <h3 className="text-3xl font-bold mb-6">
              Academic <span className="text-gradient">Excellence</span>
            </h3>
            
            <Card className="glass-effect border-primary/10 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h4 className="font-semibold text-lg">B.Tech in CSE</h4>
                    <p className="text-muted-foreground">University Institute of Technology, Burdwan</p>
                    <p className="text-sm text-primary">CGPA: 8.79 (till 5th Semester) • 2022-Present</p>
                  </div>
                </div>
              </Card>

            <div className="space-y-3">
              <h4 className="font-semibold mb-4">Key Achievements:</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Tech Stack
          </Badge>
          <h3 className="text-3xl font-bold mb-8">
            Technologies I <span className="text-gradient">Work With</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              "Python", "JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL",
              "LangChain", "OpenAI API", "TensorFlow", "Google Cloud", "Git", "Docker"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-3 hover:bg-primary/10 transition-colors"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
