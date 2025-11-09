'use client'

import { useState } from 'react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in animation-delay-2000">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full p-4 shadow-lg shadow-yellow-500/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-pulse-slow"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-black rounded-lg shadow-2xl border border-gray-700 z-50 flex flex-col animate-slide-in-up">
          {/* Header */}
          <div className="bg-yellow-500 text-black p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Hello! How can we help you?</h3>
              <p className="text-sm text-gray-800">We're here to assist</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
            <div className="space-y-4">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-gray-200">
                  Hi! I'm here to help with questions about our ARM Institute RFP response for AI-enabled robotic platforms. How can I assist you?
                </p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <button className="text-left bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500 rounded-lg p-3 text-sm text-yellow-500 transition-colors">
                  Tell me about our framework approach
                </button>
                <button className="text-left bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500 rounded-lg p-3 text-sm text-yellow-500 transition-colors">
                  What's our grinding cell solution?
                </button>
                <button className="text-left bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500 rounded-lg p-3 text-sm text-yellow-500 transition-colors">
                  Show me the project timeline
                </button>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700 bg-black">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400"
              />
              <button className="bg-yellow-500 text-black rounded-lg px-4 py-2 text-sm hover:bg-yellow-400 transition-colors font-medium">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget