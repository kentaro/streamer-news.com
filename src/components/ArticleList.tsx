import { ArticleCard } from '@/components/ArticleCard'
import type { Article } from '@/lib/data'

interface ArticleListProps {
  articles: Article[]
  category?: string
}

export function ArticleList({ articles, category }: ArticleListProps) {
  const filteredArticles = category
    ? articles.filter(article => article.category === category)
    : articles

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredArticles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
      {filteredArticles.length === 0 && (
        <div className="col-span-full text-center py-12 text-muted-foreground">
          記事が見つかりませんでした
        </div>
      )}
    </div>
  )
} 