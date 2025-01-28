import { ArticleCard } from '@/components/ArticleCard'
import type { Article } from '@/lib/data'

interface ArticleListProps {
  articles: Article[]
  category?: string
}

export function ArticleList({ articles, category }: ArticleListProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        記事が見つかりませんでした
      </div>
    )
  }

  const filteredArticles = category
    ? articles.filter(article => article.category === category)
    : articles

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredArticles.map(article => (
        <ArticleCard
          key={article.link}
          article={article}
        />
      ))}
      {filteredArticles.length === 0 && (
        <div className="col-span-full text-center py-12 text-muted-foreground">
          記事が見つかりませんでした
        </div>
      )}
    </div>
  )
}