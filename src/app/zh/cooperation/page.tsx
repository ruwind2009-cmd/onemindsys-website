import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

export const metadata: Metadata = {
  title: '项目合作与交付流程 — ONEMIND',
  description: '从项目评估到方案设计、融资匹配与部署实施，ONEMIND 提供面向算力与能源项目的一体化协同支持。',
  keywords: ['合作模式', '项目合作', '交付流程', 'AI项目融资', '算力与能源项目'],
  openGraph: {
    title: '项目合作与交付流程 — ONEMIND',
    description: '从项目评估到方案设计、融资匹配与部署实施，ONEMIND 提供面向算力与能源项目的一体化协同支持。',
    type: 'website',
  },
}

const STEPS = [
  {
    title: '需求沟通与项目初判',
    desc: '先判断项目目标、场景、区域条件和推进阶段，避免一开始就进入不适合的路径。',
  },
  {
    title: '算力、能源与融资匹配分析',
    desc: '围绕算力需求、电力条件、融资可行性和部署节奏做整体分析，而不是分开决策。',
  },
  {
    title: '方案设计与路径确认',
    desc: '明确项目是做算力中心建设、能源资产升级，还是出海部署，并确认最合适的推进结构。',
  },
  {
    title: '部署规划与实施组织',
    desc: '进入站点、能源、基础设施和实施协同的规划阶段，明确谁推进、谁配合、哪些环节需要外部合作方。',
  },
  {
    title: '交付支持与长期协同',
    desc: '项目不是方案结束就结束，后续仍需要围绕融资、部署节奏和长期运营继续协同。',
  },
]

export default function ZhCooperationPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="合作模式"
          title="项目合作与交付流程"
          description="从项目评估到方案设计、融资匹配与部署实施，ONEMIND 提供面向算力与能源项目的一体化协同支持。"
          scene="zh-cooperation"
          imageAlt="项目合作与交付流程视觉，体现需求沟通、实施组织与长期协同。"
          tags={['需求沟通', '路径确认', '部署实施']}
        />

        <div className="page-section">
          <div className="sec-label">项目流程</div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {STEPS.map((step, index) => (
              <div key={step.title} className="card-base card-role-info card-panel">
                <div className="card-kicker">步骤 {index + 1}</div>
                <h2 className="card-heading !mt-4">{step.title}</h2>
                <p className="card-copy">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="page-section grid gap-5 md:grid-cols-2">
          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">合作方式</div>
            <div className="card-list">
              {[
                '项目咨询与前期规划',
                '算力与能源一体化方案',
                '融资协同',
                '项目实施支持',
                '海外部署协同',
              ].map((item) => (
                <div key={item} className="card-list-item card-list-item--headline">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">适用客户</div>
            <div className="card-list">
              {[
                '地方政府 / 园区',
                '央企 / 国企 / 能源公司',
                'AI 企业 / 算力服务商',
                '基础设施投资方',
              ].map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-section grid gap-5 md:grid-cols-2">
          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">风险与边界</div>
            <p className="card-copy">
              ONEMIND 提供方案、融资协同与部署支持，但具体推进方式仍取决于项目结构。根据项目情况，我们会与业主、投资方、EPC 和合作伙伴共同推进，而不是简单承诺包办一切。
            </p>
          </div>

          <div className="card-base card-role-solution card-panel">
            <div className="card-kicker">下一步</div>
            <p className="card-copy">
              如果你已经有明确项目，建议直接提交需求；如果还在判断合作方式，也可以先沟通项目阶段和目标，再决定最合适的推进路径。
            </p>
            <div className="button-row card-actions">
              <Link href="/support#inquiry-form" className="btn-primary">
                提交项目需求
              </Link>
              <Link href="/support#inquiry-form" className="btn-secondary">
                讨论合作方式
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
