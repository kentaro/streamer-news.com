'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FileText, Link2 } from 'lucide-react'
import type { Article } from '@/lib/data'
import { formatDate } from '@/lib/date'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const domain = new URL(article.url).hostname.replace(/^www\./, '')

  return (
    <div className="overflow-hidden bg-card rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
      {article.thumbnail && (
        <div className="relative w-full h-48">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
            {article.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {formatDate(article.publishedAt)}
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-tight mb-2 line-clamp-2">
          <Link href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {article.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {article.summary}
        </p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            <span>{article.count}文字</span>
          </div>
          <div className="flex items-center gap-1">
            <Link2 className="w-4 h-4" />
            <span>{domain}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 
