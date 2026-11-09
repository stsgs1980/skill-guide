import { StickyNav } from '@/components/guide/StickyNav'
import { Hero } from '@/components/guide/Hero'
import { ConceptExplainer } from '@/components/guide/ConceptExplainer'
import { TierRanking } from '@/components/guide/TierRanking'
import { Bundles } from '@/components/guide/Bundles'
import { ObraDeepDive } from '@/components/guide/ObraDeepDive'
import { WondelaiDeepDive } from '@/components/guide/WondelaiDeepDive'
import { DecisionTree } from '@/components/guide/DecisionTree'
import { QualityChecklist } from '@/components/guide/QualityChecklist'
import { MetaSection } from '@/components/guide/MetaSection'
import { Footer } from '@/components/guide/Footer'

function StripedDivider() {
  return (
    <div
      aria-hidden
      style={{
        height: '6px',
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent 0, transparent 6px, rgba(255,255,255,0.04) 6px, rgba(255,255,255,0.04) 7px)',
      }}
    />
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--l-bg)] text-[var(--l-text)]">
      <a
        href="#main-content"
        className={[
          'sr-only focus:not-sr-only focus:fixed',
          'focus:top-4 focus:left-4 focus:z-[100]',
          'focus:rounded-md focus:bg-[var(--l-purple)] focus:px-4',
          'focus:py-2 focus:text-white',
        ].join(' ')}
      >
        Перейти к содержимому
      </a>
      <StickyNav />
      <main id="main-content" role="main" className="flex-1">
        <Hero />
        <ConceptExplainer />
        <StripedDivider />
        <TierRanking />
        <StripedDivider />
        <Bundles />
        <ObraDeepDive />
        <StripedDivider />
        <WondelaiDeepDive />
        <StripedDivider />
        <DecisionTree />
        <QualityChecklist />
        <StripedDivider />
        <MetaSection />
      </main>
      <Footer />
    </div>
  )
}
