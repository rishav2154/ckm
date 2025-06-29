import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Linkedin, MessageCircle, Hash, Users, Shield, Target, Zap, Heart, Star, CheckCircle, ExternalLink, User, Palette, Calendar, Code, Award, Github, Crown, Flame, Eye, Skull, Terminal, Cpu, Database, Monitor } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [hoveredCredit, setHoveredCredit] = useState<string | null>(null);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    setIsVisible(true);

    // Code animation for credits section
    const lines = [
      'const team = {',
      '  developer: new Developer("Rishav Jaiswal"),',
      '  designer: new Designer("Shivam Goel"),',
      '  collaboration: "Perfect",',
      '  status: "Active"',
      '};',
      '',
      'team.developer.skills = [',
      '  "React", "Node.js", "TypeScript",',
      '  "Python", "UI/UX", "Leadership"',
      '];',
      '',
      'team.designer.expertise = [',
      '  "UI Design", "UX Research",',
      '  "Brand Identity", "Innovation"',
      '];'
    ];
    
    setCodeLines(lines);

    const lineInterval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % lines.length);
    }, 1500);

    // Matrix characters - lighter for the new theme
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]()';
    const newMatrixChars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setMatrixChars(newMatrixChars);

    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: Math.random() * 0.3 + 0.1,
        y: (char.y + 0.5) % 100
      })));
    }, 300);

    return () => {
      clearInterval(lineInterval);
      clearInterval(matrixInterval);
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'cyberknight@tips.edu.pk',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500',
      action: 'mailto:cyberknight@tips.edu.pk'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'TIPS Campus, dwarka, delhi',
      description: 'Our main campus location',
      color: 'from-purple-500 to-pink-500',
      action: 'https://maps.google.com'
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@cyberknight_tips',
      url: 'https://instagram.com/cyberknight_tips',
      color: 'from-pink-500 to-purple-500',
      description: 'Follow our latest updates and behind-the-scenes content',
      followers: '2.5K'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Cyber Knight TIPS',
      url: 'https://linkedin.com/company/cyberknight-tips',
      color: 'from-blue-600 to-blue-700',
      description: 'Connect with us professionally and see our achievements',
      followers: '1.8K'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp Group',
      handle: 'Join Community',
      url: 'https://chat.whatsapp.com/cyberknight-tips-community',
      color: 'from-green-500 to-green-600',
      description: 'Join our active community for discussions and updates',
      followers: '500+'
    },
    {
      icon: Hash,
      name: 'Discord Server',
      handle: 'Cyber Knight Hub',
      url: 'https://discord.gg/cyberknight-tips',
      color: 'from-indigo-500 to-purple-600',
      description: 'Real-time chat, study groups, and collaborative learning',
      followers: '750+'
    }
  ];

  const faqs = [
    {
      question: 'How can I join Cyber Knight?',
      answer: 'You can join by attending our orientation sessions or contacting us directly. We welcome all TIPS students interested in cybersecurity.'
    },
    {
      question: 'Are the courses free for members?',
      answer: 'Yes! All courses and workshops are completely free for Cyber Knight members. We believe in accessible cybersecurity education.'
    },
    {
      question: 'Do you offer certifications?',
      answer: 'Yes, we provide certificates of completion for all courses and special recognition for outstanding performance in competitions.'
    },
    {
      question: 'Can I contribute to the club activities?',
      answer: 'Absolutely! We encourage members to lead workshops, contribute to research projects, and participate in community outreach programs.'
    }
  ];

  const openLinkedIn = (profile: string) => {
    window.open(`https://linkedin.com/in/${profile}`, '_blank');
  };

  const openGithub = (profile: string) => {
    window.open(`https://github.com/${profile}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='53' cy='7' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='7' cy='53' r='2'/%3E%3Ccircle cx='53' cy='53' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-white/20 rounded-full animate-bounce`}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl mb-8 animate-pulse shadow-2xl border border-white/30">
              <Shield className="h-12 w-12 text-white drop-shadow-lg" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Get in{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Touch
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
              Ready to join the defenders? Have questions about our programs? 
              We're here to help you start your cybersecurity journey and build a safer digital world together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Zap, text: 'Quick Response', color: 'from-yellow-400 to-orange-400' },
                { icon: Heart, text: 'Community Driven', color: 'from-pink-400 to-red-400' },
                { icon: Star, text: 'Expert Guidance', color: 'from-blue-400 to-indigo-400' }
              ].map((badge, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-2 bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30 cursor-pointer shadow-lg`}
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <div className={`p-1 rounded-full bg-gradient-to-r ${badge.color}`}>
                    <badge.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl hover:shadow-3xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  animationDelay: `${0.8 + index * 0.2}s`,
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                {/* Floating Particles Effect */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                
                <div className="relative z-10 p-8">
                  <div className={`bg-gradient-to-r ${item.color} rounded-2xl p-4 w-fit mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    <item.icon className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-center text-lg">
                    {item.info}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.action && (
                    <a
                      href={item.action}
                      target={item.action.startsWith('http') ? '_blank' : '_self'}
                      rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`group/button block w-full text-center bg-gradient-to-r ${item.color} text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Contact Now
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/button:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Connect with Our Community
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Join our vibrant community across multiple platforms and stay updated with the latest in cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl hover:shadow-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${1.4 + index * 0.15}s`
                }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-15 transition-all duration-500`}></div>
                
                {/* Particle Animation */}
                {hoveredSocial === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${social.color} rounded-full animate-ping`}
                        style={{
                          left: `${15 + (i * 10)}%`,
                          top: `${20 + (i % 3) * 25}%`,
                          animationDelay: `${i * 0.15}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                
                <div className="relative p-8">
                  <div className="flex items-center space-x-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${social.color} rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <social.icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">
                          {social.name}
                        </h3>
                        <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${social.color} text-white shadow-lg`}>
                          {social.followers}
                        </span>
                      </div>
                      
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                        {social.handle}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {social.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-white/80 via-blue-50/80 to-indigo-100/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-indigo-950/80 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.8s' }}>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Quick answers to common questions about Cyber Knight
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-3xl transform hover:scale-[1.02] hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${2 + index * 0.1}s`
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '2.4s' }}>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Still have questions? We're here to help!
            </p>
            <a
              href="mailto:cyberknight@tips.edu.pk"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Contact Us Directly
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Special Credits Section */}
      <section className="relative py-24 bg-gradient-to-br from-white/90 via-blue-50/90 to-indigo-100/90 dark:from-gray-800/90 dark:via-gray-900/90 dark:to-indigo-950/90 backdrop-blur-sm overflow-hidden">
        {/* Subtle matrix rain effect */}
        {matrixChars.map(char => (
          <div
            key={char.id}
            className="absolute text-blue-400/30 dark:text-green-400/30 font-mono text-sm pointer-events-none animate-pulse"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              opacity: char.opacity
            }}
          >
            {char.char}
          </div>
        ))}

        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '2.6s' }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Meet the Team
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              The creative minds behind this project
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left - Code Editor */}
            <div className="lg:col-span-4">
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/80 dark:bg-gray-700/80 border-b border-gray-200/50 dark:border-gray-600/50">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-blue-600 dark:text-blue-400 text-sm ml-2 font-mono">team.js</span>
                </div>
                <div className="p-4 font-mono text-sm max-h-80 overflow-y-auto">
                  {codeLines.map((line, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${
                        index === currentLine 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span className="text-gray-400 mr-2 select-none">{String(index + 1).padStart(2, '0')}</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center - Team Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Rishav Jaiswal - Developer */}
              <div className="relative">
                <div 
                  className="group cursor-pointer relative"
                  onMouseEnter={() => setHoveredCredit('rishav')}
                  onMouseLeave={() => setHoveredCredit(null)}
                >
                  {/* Base Card */}
                  <div className={`relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/50 transition-all duration-500 shadow-2xl ${
                    hoveredCredit === 'rishav' ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:border-blue-400 hover:shadow-3xl'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <span className="text-blue-600 dark:text-blue-400">const</span> developer = <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          Rishav Jaiswal
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-mono">Full Stack Developer</p>
                        <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <span className="text-yellow-600 dark:text-yellow-400">{'}'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Card */}
                  <div className={`absolute top-0 left-0 w-full bg-white/98 dark:bg-gray-800/98 backdrop-blur-2xl rounded-3xl border-2 border-blue-400 shadow-3xl transition-all duration-500 z-50 ${
                    hoveredCredit === 'rishav' 
                      ? 'opacity-100 transform scale-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 transform scale-95 translate-y-4 pointer-events-none'
                  }`}>
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-blue-400">
                              <User className="w-10 h-10 text-white" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                              <Terminal className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-1">
                                <span className="text-blue-600 dark:text-blue-400">class</span> <span className="text-yellow-600 dark:text-yellow-400">Developer</span> <span className="text-purple-600 dark:text-purple-400">{'{'}</span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Rishav Jaiswal</h3>
                              <p className="text-blue-600 dark:text-blue-400 font-mono mb-2">Full Stack Developer & Co-Designer</p>
                              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>India</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>Available</span>
                                </div>
                              </div>
                            </div>
                            <div className="font-mono text-sm text-purple-600 dark:text-purple-400">{'}'}</div>
                          </div>

                          {/* Skills Grid */}
                          <div className="grid grid-cols-4 gap-2 mb-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 border border-blue-200 dark:border-blue-700/50 text-center">
                              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">Frontend</span>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 border border-green-200 dark:border-green-700/50 text-center">
                              <Database className="w-4 h-4 text-green-600 dark:text-green-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">Backend</span>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2 border border-purple-200 dark:border-purple-700/50 text-center">
                              <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">Design</span>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2 border border-yellow-200 dark:border-yellow-700/50 text-center">
                              <Crown className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">Lead</span>
                            </div>
                          </div>

                          {/* Contact Buttons */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => openLinkedIn('rishav-jaiswal')}
                              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-mono text-sm text-white"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span>LinkedIn</span>
                            </button>
                            <button
                              onClick={() => openGithub('rishav-jaiswal')}
                              className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-mono text-sm text-white"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </button>
                            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                              <span>5+ years</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shivam Goel - Designer */}
              <div className="relative">
                <div 
                  className="group cursor-pointer relative"
                  onMouseEnter={() => setHoveredCredit('shivam')}
                  onMouseLeave={() => setHoveredCredit(null)}
                >
                  {/* Base Card */}
                  <div className={`relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl p-6 border border-purple-200/50 dark:border-purple-700/50 transition-all duration-500 shadow-2xl ${
                    hoveredCredit === 'shivam' ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:border-purple-400 hover:shadow-3xl'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Palette className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <span className="text-purple-600 dark:text-purple-400">const</span> designer = <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          Shivam Goel
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-mono">UI/UX Designer</p>
                        <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <span className="text-yellow-600 dark:text-yellow-400">{'}'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Card */}
                  <div className={`absolute top-0 left-0 w-full bg-white/98 dark:bg-gray-800/98 backdrop-blur-2xl rounded-3xl border-2 border-purple-400 shadow-3xl transition-all duration-500 z-50 ${
                    hoveredCredit === 'shivam' 
                      ? 'opacity-100 transform scale-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 transform scale-95 translate-y-4 pointer-events-none'
                  }`}>
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-purple-400">
                              <Palette className="w-10 h-10 text-white" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                              <Monitor className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-1">
                                <span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-yellow-600 dark:text-yellow-400">Designer</span> <span className="text-pink-600 dark:text-pink-400">{'{'}</span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Shivam Goel</h3>
                              <p className="text-purple-600 dark:text-purple-400 font-mono mb-2">UI/UX Designer & Creative Visionary</p>
                              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>India</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>Available</span>
                                </div>
                              </div>
                            </div>
                            <div className="font-mono text-sm text-pink-600 dark:text-pink-400">{'}'}</div>
                          </div>

                          {/* Skills Grid */}
                          <div className="grid grid-cols-4 gap-2 mb-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2 border border-purple-200 dark:border-purple-700/50 text-center">
                              <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">UI Design</span>
                            </div>
                            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-2 border border-pink-200 dark:border-pink-700/50 text-center">
                              <User className="w-4 h-4 text-pink-600 dark:text-pink-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">UX Research</span>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2 border border-indigo-200 dark:border-indigo-700/50 text-center">
                              <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">Branding</span>
                            </div>
                            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-2 border border-cyan-200 dark:border-cyan-700/50 text-center">
                              <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-mono">Innovation</span>
                            </div>
                          </div>

                          {/* Contact Buttons */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => openLinkedIn('shivam-goel')}
                              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-mono text-sm text-white"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span>LinkedIn</span>
                            </button>
                            <button
                              onClick={() => openGithub('shivam-goel')}
                              className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-mono text-sm text-white"
                            >
                              <Github className="w-4 h-4" />
                              <span>Portfolio</span>
                            </button>
                            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                              <span>4+ years</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - System Monitor */}
            <div className="lg:col-span-3 space-y-6">
              {/* System Status */}
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/80 dark:bg-gray-700/80 border-b border-gray-200/50 dark:border-gray-600/50">
                  <Cpu className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-green-600 dark:text-green-400 text-sm font-mono">system.status</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Team Status:</span>
                      <span className="text-green-600 dark:text-green-400 font-bold">ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Members:</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">2/2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Collaboration:</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">PERFECT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Projects:</span>
                      <span className="text-yellow-600 dark:text-yellow-400 font-bold">ONGOING</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/80 dark:bg-gray-700/80 border-b border-gray-200/50 dark:border-gray-600/50">
                  <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-mono">performance</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Code Quality:</span>
                        <span className="text-green-600 dark:text-green-400 font-bold">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Design Score:</span>
                        <span className="text-purple-600 dark:text-purple-400 font-bold">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Team Sync:</span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-12">
            <div className="font-mono text-lg text-gray-600 dark:text-gray-400 mb-2">
              <span className="text-blue-600 dark:text-blue-400">//</span> Together, we build the future of web development
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;