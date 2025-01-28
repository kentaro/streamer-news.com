'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { FileText, Link2 } from 'lucide-react'
import Image from 'next/image'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

interface ArticleCardProps {
  article: {
    title: string
    link: string
    pubdate: string
    summary: string
    category: string
    count: number
    thumbnail?: string
  }
}

function DomainInfo({ url }: { url: string }) {
  const domain = new URL(url).hostname.replace(/^www\./, '')
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Image
        src={faviconUrl}
        alt={domain}
        width={16}
        height={16}
        className="rounded-sm"
      />
      <span>{domain}</span>
      <Link2 className="h-4 w-4" />
    </div>
  )
}

function ArticleMeta({
  date,
  count,
}: {
  date: string
  count: number
}) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <time dateTime={date}>
        {dayjs(date).format('YYYY年M月D日 H:mm')}
      </time>
      <div className="flex items-center gap-1">
        <FileText className="h-4 w-4" />
        <span>{count.toLocaleString()}文字</span>
      </div>
    </div>
  )
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-48">
          <Image
            src={article.thumbnail || '/placeholder.png'}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="mb-2">
            <Badge>{article.category}</Badge>
          </div>
          <h2 className="text-xl font-semibold line-clamp-2">{article.title}</h2>
          <p className="text-muted-foreground line-clamp-3">{article.summary}</p>
        </CardHeader>
        <CardFooter className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <DomainInfo url={article.link} />
          <ArticleMeta date={article.pubdate} count={article.count} />
        </CardFooter>
      </a>
    </Card>
  )
} 
