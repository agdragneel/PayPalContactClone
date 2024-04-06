import React from 'react'

export default function LinkItem({title}) {
  return (
    <div>
      <li className="mr-2">
      <span className="block py-2 px-3 rounded-t-lg hover:bg-gray-700">
        {title}
      </span>
    </li>
    </div>
  )
}
