import type { Metadata } from 'next'
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Какие скиллы для AI-агентов реально хорошие — путеводитель',
  description:
    'Глубокий анализ 15 starred-репозиториев, тир-ранжирование по substance, и готовые bundle-наборы для Z.ai Code, Opencode и WebStorm. Построено с применением скиллов obra/superpowers + wondelai/skills.',
  keywords: ['AI skills', 'agentskills.io', 'Z.ai Code', 'Opencode', 'WebStorm', 'obra', 'wondelai', 'SKILL.md'],
  authors: [{ name: 'Z.ai Code' }],
  icons: {
    icon: 'https://z-cdn.chatglm.cn/z-ai/static/logo.svg',
  },
  openGraph: {
    title: 'Какие скиллы для AI-агентов реально хорошие',
    description: 'Путеводитель по 15 репозиториям + bundle для Z.ai/Opencode/WebStorm',
    url: 'https://chat.z.ai',
    siteName: 'Z.ai',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={[
          `${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`,
          'bg-[var(--l-bg)] font-sans text-[var(--l-text)]',
          'antialiased',
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  )
}
