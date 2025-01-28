'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { ArticleList } from '@/components/ArticleList'
import { DatePagination } from '@/components/DatePagination'
import { CategoryFilter } from '@/components/CategoryFilter'
import type { Article } from '@/lib/data'

interface TestPageClientProps {
  articles: Article[]
  categories: string[]
  testDate: string
}

export function TestPageClient({ articles, categories, testDate }: TestPageClientProps) {
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(undefined)

  return (
    <main className="container mx-auto px-4">
      <HeroSection />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">CategoryFilter テスト</h2>
        <CategoryFilter
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">ArticleList テスト</h2>
        <ArticleList
          articles={articles}
          category={currentCategory}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">DatePagination テスト</h2>
        <DatePagination
          currentDate={testDate}
          prevDate="2025-1-27"
        />
      </div>
    </main>
  )
} 
