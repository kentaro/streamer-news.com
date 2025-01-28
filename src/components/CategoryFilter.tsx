'use client'

import { Button } from '@/components/ui/button'
import { Check, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface CategoryFilterProps {
  categories: string[]
  currentCategory: string | undefined
  onCategoryChange: (category: string | undefined) => void
}

export function CategoryFilter({ categories, currentCategory, onCategoryChange }: CategoryFilterProps) {
  const handleSelect = (category: string | undefined) => {
    onCategoryChange(category)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          {currentCategory || 'カテゴリー選択'}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuItem onClick={() => handleSelect(undefined)}>
          <div className="flex items-center justify-between w-full">
            すべて
            {currentCategory === undefined && <Check className="ml-2 h-4 w-4" />}
          </div>
        </DropdownMenuItem>
        {categories.map((category) => (
          <DropdownMenuItem key={category} onClick={() => handleSelect(category)}>
            <div className="flex items-center justify-between w-full">
              {category}
              {currentCategory === category && <Check className="ml-2 h-4 w-4" />}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
