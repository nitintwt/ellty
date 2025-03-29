import React, { useState } from 'react';
import { Check } from 'lucide-react';

function CustomCheckbox({ checked, onChange, className = '' }) {
  return (
    <div 
      className={`relative h-4 w-4 rounded border border-gray-300 cursor-pointer group
        ${checked ? 'bg-blue-500 border-blue-500' : ''} ${className}`}
      onClick={onChange}
    >
      <Check 
        className={`absolute top-0 left-0 h-full w-full p-[2px]
          ${checked ? 'text-white' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`}
      />
    </div>
  )
}

function App() {
  const pages = [
    { id: 'page1', label: 'Page 1' },
    { id: 'page2', label: 'Page 2' },
    { id: 'page3', label: 'Page 3' },
    { id: 'page4', label: 'Page 4' },
  ]

  const [selectedPages, setSelectedPages] = useState(new Set());

  const handleCheckboxChange = (pageId) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(pageId)) {
      newSelected.delete(pageId);
    } else {
      newSelected.add(pageId);
    }
    setSelectedPages(newSelected);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[300px]">
        <div className="px-4">
          <div className="py-3 flex items-center justify-between border-b border-gray-200">
            <span className="text-sm text-gray-600">All pages</span>
            <CustomCheckbox
              checked={selectedPages.has('all')}
              onChange={() => handleCheckboxChange('all')}
            />
          </div>
          <div className="py-2 space-y-3 border-b border-gray-200">
            {pages.map((page) => (
              <div key={page.id} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{page.label}</span>
                <CustomCheckbox
                  checked={selectedPages.has(page.id)}
                  onChange={() => handleCheckboxChange(page.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <button
            className="w-full bg-[#ffc107] text-black py-2 px-4 rounded-md hover:bg-[#ffca2c] transition-colors text-sm font-medium"
            onClick={() => console.log('Selected pages:', Array.from(selectedPages))}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
