'use client'

import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="py-20 text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Streamer News
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        動画配信業界の最新ニュースをAIがキュレーション。毎日更新される情報をチェックして、トレンドを逃さない。
      </p>
      <Button asChild size="lg">
        <Link href="/" className="gap-2">
          <Rocket className="h-5 w-5" />
          最新記事を見る
        </Link>
      </Button>
    </div>
  )
} 