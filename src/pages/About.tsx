import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate developer with a love for creating beautiful, 
                functional web applications. With expertise in modern technologies, 
                I bring ideas to life through code.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>React</span>
                  <span className="text-blue-600">Expert</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-blue-600">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-blue-600">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span>Python</span>
                  <span className="text-blue-600">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

