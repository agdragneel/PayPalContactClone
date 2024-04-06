import React from 'react'

export default function LoginButton({ buttonText }) {
  return (
    <div>
      <button
            type="button"
            className="border border-blue-900 text-blue-900 bg-white hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-green-800"
          >
            {buttonText}
          </button>
    </div>
  )
}
