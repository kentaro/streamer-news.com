import { ArticleCard } from '@/components/ArticleCard'
import type { Article } from '@/lib/data'

interface ArticleListProps {
  articles: Article[]
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.link} article={article} />
      ))}
    </div>
  )
}