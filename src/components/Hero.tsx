import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-slide-in-left animation-delay-200">
              AI-Enabled Robotic Platform Solutions
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed animate-slide-in-left animation-delay-400">
              Delivering standardized frameworks and low-code interfaces for manufacturing robotics
            </p>

            <div className="bg-yellow-500 rounded-lg p-1 flex animate-slide-in-left animation-delay-600">
              <button className="flex-1 text-black px-6 py-3 font-medium hover:bg-yellow-400 transition-colors duration-300 rounded-l-md group">
                Deploy a Task
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <div className="w-px bg-black/20"></div>
              <button className="flex-1 text-black px-6 py-3 font-medium hover:bg-yellow-400 transition-colors duration-300 rounded-r-md group">
                Upload new dataSet
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/deco_Sticker.png"
                alt="AI-Enabled Robotic Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero