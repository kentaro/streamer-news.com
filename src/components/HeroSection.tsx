import Link from 'next/link'
import { Rocket } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Streamer News
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
        動画配信関連の最新ニュースをまとめてチェック
      </p>
      <Link
        href="/news/latest"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        <Rocket className="w-5 h-5" />
        最新記事を見る
      </Link>
    </div>
  )
} 