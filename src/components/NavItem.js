import React from 'react'

export default function NavItem({ children }) {
  return (
    
      <a href="/" className="px-2 text-blue-900 font-semibold hover:font-bold">
      {children}
    </a>
    
  ) 
}