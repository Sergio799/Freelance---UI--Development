const ProjectApproach = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Framework Architecture & Design",
      duration: "Months 1-3",
      deliverables: [
        "System architecture documentation",
        "Interface specifications",
        "Low-code UI wireframes",
        "Technical requirements analysis"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Core Development & Integration",
      duration: "Months 4-8",
      deliverables: [
        "Standardized framework implementation",
        "Robot hardware integration layer",
        "Data curation pipeline",
        "ML model deployment system"
      ]
    },
    {
      phase: "Phase 3",
      title: "Testing & Validation",
      duration: "Months 9-11",
      deliverables: [
        "Hardware-in-loop testing setup",
        "Grinding cell prototype validation",
        "Performance benchmarking",
        "System optimization"
      ]
    },
    {
      phase: "Phase 4",
      title: "Deployment & Distribution",
      duration: "Months 12-15",
      deliverables: [
        "Production-ready platform",
        "Stakeholder engagement strategy",
        "Training materials & documentation",
        "Commercialization roadmap"
      ]
    }
  ]

  return (
    <div className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Technical Approach
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 mx-auto mb-6 animate-wiggle"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A phased approach to deliver the ARM Institute's AI Data Foundry program with measurable milestones and clear deliverables
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-500 hover-lift hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-slide-in-bottom stagger-${index + 1}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-500 transition-colors duration-300">{phase.phase}</h3>
                  <p className="text-yellow-500 text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">{phase.duration}</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-4">{phase.title}</h4>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300 mb-3">Key Deliverables:</p>
                {phase.deliverables.map((deliverable, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg p-8 text-center hover-lift transition-all duration-300 animate-scale-in">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Transform Manufacturing Robotics?
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            Our proven expertise in AI-enabled robotics and manufacturing automation positions us to deliver exceptional results for the ARM Institute's vision.
          </p>
          <button className="bg-black text-yellow-500 px-8 py-3 rounded font-medium hover:bg-gray-900 hover:scale-110 hover:shadow-lg hover-glow transition-all duration-300 group">
            Download Full Proposal
            <span className="ml-2 group-hover:translate-x-2 group-hover:animate-wiggle transition-all duration-300">📄</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectApproach