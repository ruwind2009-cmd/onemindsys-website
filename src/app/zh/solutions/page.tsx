import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'
import { SITE_PHOTOS } from '@/lib/site-photos'

export const metadata: Metadata = {
  title: '中国客户解决方案 — ONEMIND',
  description: '面向算力中心、能源项目和海外部署需求，提供算力、能源、融资与项目落地一体化能力。',
  keywords: ['AI算力中心', '算力与能源', 'AI项目融资', '海外算力部署', '中国客户解决方案'],
  openGraph: {
    title: '中国客户解决方案 — ONEMIND',
    description: '面向算力中心、能源项目和海外部署需求，提供算力、能源、融资与项目落地一体化能力。',
    type: 'website',
  },
}

const SOLUTIONS = [
  {
    title: 'AI算力中心建设',
    href: '/zh/solutions/ai-compute-center-development',
    desc: '面向地方政府、园区平台和数据中心投资方，提供从规划、能源配套到融资落地的算力中心建设能力。',
    imageKey: 'solution-compute-center' as const,
  },
  {
    title: '能源项目升级为AI算力基础设施',
    href: '/zh/solutions/energy-project-upgrade-to-ai-infrastructure',
    desc: '面向能源集团、电力公司和 EPC 方，将能源资产与算力需求结合，形成新的基础设施业务路径。',
    imageKey: 'solution-energy-upgrade' as const,
  },
  {
    title: 'AI算力出海与海外部署',
    href: '/zh/solutions/overseas-ai-compute-deployment',
    desc: '面向中国 AI 企业与算力服务商，围绕中东及非洲等市场提供算力、能源与融资一体化支持。',
    imageKey: 'solution-overseas' as const,
  },
]

export default function ZhSolutionsPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="解决方案"
          title="AI算力与能源项目解决方案。"
          description="面向算力中心、能源项目和海外部署需求，提供算力、能源、融资与项目落地一体化能力。"
          scene="zh-solutions"
          imageAlt="中文解决方案总览视觉，覆盖算力中心、能源升级与海外部署三类场景。"
          tags={['算力中心', '能源升级', '海外部署']}
        />

        <div className="page-section grid gap-5 xl:grid-cols-3">
          {SOLUTIONS.map((item) => (
            <article key={item.href} className="card-base card-role-nav card-panel flex h-full flex-col">
              <div className="media-card-frame media-card-frame--compact">
                <Image
                  src={SITE_PHOTOS[item.imageKey].src}
                  alt={SITE_PHOTOS[item.imageKey].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: SITE_PHOTOS[item.imageKey].position ?? 'center center' }}
                />
              </div>
              <div className="card-kicker">客户方案</div>
              <h2 className="card-heading">{item.title}</h2>
              <p className="card-copy">{item.desc}</p>
              <div className="button-row card-actions">
                <Link href={item.href} className="btn-secondary">
                  查看解决方案
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="page-section grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            '不是单纯卖算力，而是围绕项目做整体方案',
            '同时考虑电力、算力、融资和落地路径',
            '更适合园区、能源项目和海外部署这类复杂场景',
            '强调项目推进与交付协同，而非单点设备销售',
          ].map((item) => (
            <div key={item} className="card-base card-role-info card-panel">
              <div className="card-kicker">为什么选择 ONEMIND</div>
              <p className="card-copy" style={{ color: 'var(--color-text)' }}>
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="page-section grid gap-5 md:grid-cols-2">
          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">适用客户</div>
            <div className="card-list">
              {[
                '地方政府 / 园区平台公司',
                '数据中心投资与建设方',
                '央企 / 国企 / 能源集团',
                '中国 AI 企业 / 算力服务商',
              ].map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-base card-role-solution card-panel">
            <div className="card-kicker">下一步</div>
            <p className="card-copy">
              如果你正在评估算力中心项目、能源资产升级或海外部署路径，可以先查看适合自己的方案，再进入合作沟通。
            </p>
            <div className="button-row card-actions">
              <Link href="/support#inquiry-form" className="btn-primary">
                提交项目需求
              </Link>
              <Link href="/zh/cooperation" className="btn-secondary">
                讨论合作方式
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
