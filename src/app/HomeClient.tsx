'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { ArticleList } from '@/components/ArticleList'
import { CategoryFilter } from '@/components/CategoryFilter'
import { DatePagination } from '@/components/DatePagination'
import type { Article } from '@/lib/data'

interface HomeClientProps {
  articles: Article[]
  categories: string[]
  currentDate: string
  prevDate: string | null
  nextDate: string | null
}

export function HomeClient({
  articles,
  categories,
  currentDate,
  prevDate,
  nextDate,
}: HomeClientProps) {
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(undefined)
  const filteredArticles = currentCategory
    ? articles.filter((article) => article.category === currentCategory)
    : articles

  return (
    <main className="space-y-8">
      <HeroSection />
      <div className="flex justify-end">
        <CategoryFilter
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
        />
      </div>
      <ArticleList articles={filteredArticles} />
      <DatePagination
        currentDate={currentDate}
        prevDate={prevDate}
        nextDate={nextDate}
      />
    </main>
  )
} 
