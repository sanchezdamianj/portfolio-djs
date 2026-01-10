import React from 'react';
import { aboutContent, skills } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 card-hover">
            <p className="text-xl text-slate-600 leading-relaxed text-center text-balance">
              {aboutContent}
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 card-hover">
                <h4 className="text-lg font-semibold mb-4 text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-lg font-medium transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;