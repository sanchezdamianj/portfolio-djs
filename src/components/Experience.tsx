import React from 'react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative ${index !== experiences.length - 1 ? 'mb-16' : ''}`}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 md:left-12 top-16 w-0.5 h-24 md:h-32 bg-gradient-to-b from-slate-200 via-slate-300 to-transparent"></div>
              )}
              
              <div className="flex items-start gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center shadow-lg z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>
                
                {/* Experience card */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-slate-100 card-hover group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right lg:text-left">
                      <div className="inline-flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm">
                        <span className="text-slate-500 font-medium">{exp.period}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-3 text-slate-600">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;