'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

interface CategoryFilterProps {
  categories: string[]
  currentCategory?: string
  onCategoryChange: (category: string | undefined) => void
}

export function CategoryFilter({ categories, currentCategory, onCategoryChange }: CategoryFilterProps) {
  const handleSelect = (category: string | null) => {
    onCategoryChange(category || undefined)
    const menu = document.getElementById('category-menu')
    if (menu) {
      menu.classList.add('hidden')
    }
  }

  return (
    <div className="flex justify-end mb-6">
      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-muted"
          onClick={() => {
            const menu = document.getElementById('category-menu')
            if (menu) {
              menu.classList.toggle('hidden')
            }
          }}
        >
          {currentCategory || 'すべてのカテゴリ'}
          <ChevronDown className="w-4 h-4" />
        </button>

        <div
          id="category-menu"
          className="hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-popover border"
        >
          <div className="py-1" role="menu">
            <button
              type="button"
              className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center gap-2"
              onClick={() => handleSelect(null)}
            >
              {!currentCategory && <Check className="w-4 h-4" />}
              <span className={!currentCategory ? 'font-medium' : ''}>
                すべてのカテゴリ
              </span>
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center gap-2"
                onClick={() => handleSelect(category)}
              >
                {currentCategory === category && <Check className="w-4 h-4" />}
                <span className={currentCategory === category ? 'font-medium' : ''}>
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
