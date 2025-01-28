'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function ArticleCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardHeader>
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardFooter className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-48" />
      </CardFooter>
    </Card>
  )
}

export function ArticleListSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <ArticleCardSkeleton key={`skeleton-card-${i}`} />
      ))}
    </div>
  )
} 
