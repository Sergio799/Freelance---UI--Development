const TechnicalCapabilities = () => {
  const capabilities = [
    {
      category: "AI & Machine Learning",
      items: [
        "Deep Learning for Robotic Vision",
        "Reinforcement Learning Algorithms", 
        "Neural Network Optimization",
        "Edge AI Deployment",
        "Computer Vision & Object Recognition"
      ]
    },
    {
      category: "Robotics Integration",
      items: [
        "ROS/ROS2 Framework Development",
        "Industrial Robot Programming",
        "Sensor Fusion & Calibration",
        "Motion Planning & Control",
        "Safety System Implementation"
      ]
    },
    {
      category: "Manufacturing Systems",
      items: [
        "CNC & Grinding Cell Integration",
        "Quality Control Automation",
        "Process Optimization",
        "Digital Twin Development",
        "Predictive Maintenance"
      ]
    },
    {
      category: "Software Architecture",
      items: [
        "Microservices Architecture",
        "Real-time Data Processing",
        "Cloud-Native Development",
        "API Design & Integration",
        "DevOps & CI/CD Pipelines"
      ]
    }
  ]

  return (
    <div className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Technical Capabilities
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full spectrum of AI-enabled robotics and manufacturing automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`bg-black rounded-lg p-6 border border-gray-700 hover:border-yellow-500 hover-lift hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-500 group animate-rotate-in stagger-${index + 1}`}
            >
              <h3 className="text-lg font-semibold text-yellow-500 mb-6 text-center">
                {capability.category}
              </h3>
              
              <div className="space-y-3">
                {capability.items.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-black rounded-lg p-8 border border-gray-700 text-center hover:border-yellow-500 hover-lift hover-glow transition-all duration-300 group animate-scale-in stagger-1">
            <div className="text-4xl font-bold text-yellow-500 mb-2 group-hover:animate-wiggle transition-transform duration-300">15+</div>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Years of Robotics Experience</p>
          </div>
          <div className="bg-black rounded-lg p-8 border border-gray-700 text-center hover:border-yellow-500 hover-lift hover-glow transition-all duration-300 group animate-scale-in stagger-2">
            <div className="text-4xl font-bold text-yellow-500 mb-2 group-hover:animate-wiggle transition-transform duration-300">50+</div>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Manufacturing Projects Delivered</p>
          </div>
          <div className="bg-black rounded-lg p-8 border border-gray-700 text-center hover:border-yellow-500 hover-lift hover-glow transition-all duration-300 group animate-scale-in stagger-3">
            <div className="text-4xl font-bold text-yellow-500 mb-2 group-hover:animate-wiggle transition-transform duration-300">98%</div>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Client Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalCapabilities