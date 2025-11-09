'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navItems = [
    { 
      name: 'Robotics', 
      hasDropdown: true,
      dropdownItems: ['Industrial Robots', 'Collaborative Robots', 'Mobile Robots', 'Custom Solutions']
    },
    { 
      name: 'AI Solutions', 
      hasDropdown: true,
      dropdownItems: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
    },
    { 
      name: 'Manufacturing', 
      hasDropdown: true,
      dropdownItems: ['Automation Systems', 'Quality Control', 'Process Optimization', 'Digital Twins']
    },
    { 
      name: 'Services', 
      hasDropdown: false,
      dropdownItems: []
    },
    { 
      name: 'Portfolio', 
      hasDropdown: true,
      dropdownItems: ['Case Studies', 'Success Stories', 'Client Testimonials', 'Project Gallery']
    },
    { 
      name: 'About', 
      hasDropdown: false,
      dropdownItems: []
    },
  ]

  const handleNavClick = (itemName: string) => {
    if (navItems.find(item => item.name === itemName)?.hasDropdown) {
      setActiveDropdown(activeDropdown === itemName ? null : itemName)
    } else {
      // Handle direct navigation
      console.log(`Navigating to ${itemName}`)
      // You can add actual navigation logic here
    }
  }

  const handleDropdownClick = (parentItem: string, dropdownItem: string) => {
    console.log(`Clicked ${dropdownItem} under ${parentItem}`)
    setActiveDropdown(null)
    // Add navigation logic for dropdown items
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <nav className="bg-black border-b border-gray-800" onClick={(e) => e.stopPropagation()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-yellow-500">RoboTech AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button 
                  onClick={() => handleNavClick(item.name)}
                  className="flex items-center text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDownIcon 
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <button
                          key={index}
                          onClick={() => handleDropdownClick(item.name, dropdownItem)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-yellow-500 hover:bg-gray-800 transition-colors"
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty div for spacing balance */}
          <div className="hidden md:block w-32"></div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDownIcon 
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="pl-6 space-y-1">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <button
                          key={index}
                          onClick={() => handleDropdownClick(item.name, dropdownItem)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation