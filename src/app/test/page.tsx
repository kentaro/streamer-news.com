import { HeroSection } from '@/components/HeroSection'
import { ArticleList } from '@/components/ArticleList'
import { DatePagination } from '@/components/DatePagination'
import { CategoryFilter } from '@/components/CategoryFilter'
import { getArticles } from '@/lib/data'
import { TestPageClient } from './TestPageClient'

export default async function TestPage() {
  const testDate = '2025-1-28'
  const articles = await getArticles(testDate)
  const categories = [...new Set(articles.map(article => article.category))]

  return (
    <TestPageClient
      articles={articles}
      categories={categories}
      testDate={testDate}
    />
  )
} 
