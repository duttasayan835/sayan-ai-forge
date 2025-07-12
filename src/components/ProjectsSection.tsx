import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Savitr-AI",
      description: "Advanced AI assistant with RAG capabilities, multi-modal interactions, and intelligent conversation management. Built with LangChain and MongoDB.",
      icon: Brain,
      image: "/placeholder.svg",
      tags: ["LangChain", "MongoDB", "OpenAI", "RAG", "Python"],
      github: "https://github.com",
      live: "https://savitr-ai.com",
      featured: true
    },
    {
      id: 2,
      title: "Cyberpunk Chatbot",
      description: "Interactive chatbot with a futuristic cyberpunk theme, featuring dynamic responses and personality-driven conversations.",
      icon: Zap,
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "WebSocket", "AI", "CSS3"],
      github: "https://github.com",
      live: "https://cyberpunk-bot.com",
      featured: true
    },
    {
      id: 3,
      title: "Road Safety Dashboard",
      description: "Comprehensive analytics platform for traffic safety monitoring with real-time data visualization and predictive insights.",
      icon: BarChart3,
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com",
      live: "https://safety-dashboard.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my latest work in AI development, automation tools, and full-stack applications. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Notable Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full glass-effect border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <project.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="glass-effect">
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
