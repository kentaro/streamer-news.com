'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/date'
import { FileText, Link2 } from 'lucide-react'
import type { Article } from '@/lib/data'

interface DomainInfoProps {
  url: string
}

function DomainInfo({ url }: DomainInfoProps) {
  const domain = new URL(url).hostname.replace(/^www\./, '')
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`

  return (
    <div className="flex items-center gap-2">
      <Image
        src={faviconUrl}
        alt={domain}
        width={16}
        height={16}
        className="rounded-sm"
      />
      <span className="text-sm text-muted-foreground">{domain}</span>
    </div>
  )
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {article.thumbnail && (
        <div className="relative h-48">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <CardHeader className="space-y-2">
        <Badge className="w-fit">{article.category}</Badge>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold hover:underline"
        >
          {article.title}
        </a>
        <p className="text-muted-foreground line-clamp-3">{article.summary}</p>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText size={16} />
          <span>{article.count.toLocaleString()}文字</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <DomainInfo url={article.link} />
        <div className="flex items-center gap-2">
          <Link2 size={16} className="text-muted-foreground" />
          <time className="text-sm text-muted-foreground">
            {formatDate(article.pubdate)}
          </time>
        </div>
      </CardFooter>
    </Card>
  )
} 
