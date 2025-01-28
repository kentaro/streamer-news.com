'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { ArticleList } from '@/components/ArticleList'
import { DatePagination } from '@/components/DatePagination'
import { CategoryFilter } from '@/components/CategoryFilter'
import type { Article } from '@/lib/data'

interface HomeClientProps {
  articles: Article[]
  categories: string[]
  latestDate: string
  prevDate: string | null
  nextDate: string | null
}

export function HomeClient({ articles, categories, latestDate, prevDate, nextDate }: HomeClientProps) {
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(undefined)

  return (
    <main className="container mx-auto px-4">
      <HeroSection />
      
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
        />
      </div>

      <div className="mb-8">
        <ArticleList
          articles={articles}
          category={currentCategory}
        />
      </div>

      <DatePagination
        currentDate={latestDate}
        prevDate={prevDate}
        nextDate={nextDate}
      />
    </main>
  )
} 
