const ServiceCards = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Standardized Framework Development",
      subtitle: "Low-code interface for AI-enabled robotics",
      description: "Develop interoperable frameworks with standardized interfaces across robot hardware and controllers for seamless integration."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Data Curation & Management",
      subtitle: "Federated library of manufacturing datasets",
      description: "Establish best practices for data curation and host comprehensive libraries of manufacturing process datasets and models."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Hardware-in-Loop Testing",
      subtitle: "De-risking grinding cell implementation",
      description: "Deploy end-to-end processing capabilities from data collection to AI-enabled robotic skill deployment for manufacturing use cases."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Strategic Stakeholder Engagement",
      subtitle: "Government, ARM Consortium & US Manufacturing",
      description: "Develop distribution strategies that engage key stakeholders and add value to the ARM Consortium and US manufacturers."
    }
  ]

  return (
    <div className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 animate-wiggle"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for AI-enabled robotics and manufacturing automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-black to-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20 hover-lift transition-all duration-500 group cursor-pointer animate-slide-in-bottom stagger-${index + 1}`}
            >
              <div className="mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-yellow-500 font-medium mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {service.subtitle}
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
              
              <div className="flex items-center text-yellow-500 group-hover:text-yellow-400 transition-all duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCards