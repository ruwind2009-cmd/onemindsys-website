import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

export const metadata: Metadata = {
  title: 'AI算力出海与海外基础设施部署解决方案 — ONEMIND',
  description: '面向中东及非洲市场，提供算力、能源与融资一体化能力，支持海外 AI 基础设施项目落地。',
  keywords: ['AI算力出海', '中东算力部署', '海外AI项目', '算力与能源', '海外基础设施部署'],
  openGraph: {
    title: 'AI算力出海与海外基础设施部署解决方案 — ONEMIND',
    description: '面向中东及非洲市场，提供算力、能源与融资一体化能力，支持海外 AI 基础设施项目落地。',
    type: 'website',
  },
}

const PAIN_POINTS = [
  '海外电力成本与稳定性问题',
  '基础设施建设复杂',
  '投资与融资压力大',
  '缺乏本地落地能力',
]

const CAPABILITIES = [
  '海外算力部署规划',
  '能源系统建设（光伏 / 储能 / 微电网）',
  '数据中心基础设施支持',
  '项目融资方案设计',
  '落地支持',
]

const VALUES = ['降低算力成本', '提升部署稳定性', '加速海外落地', '降低项目风险']

export default function ZhOverseasDeploymentSolutionPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="中文解决方案"
          title="AI算力出海与海外基础设施部署解决方案"
          description="面向中东及非洲市场，提供算力、能源与融资一体化能力，支持海外 AI 基础设施项目落地。"
          scene="solution-overseas"
          imageAlt="AI 算力出海与海外基础设施部署主视觉。"
          tags={['中东 / 非洲', '能源系统', '本地落地']}
        />

        <div className="page-section grid gap-5 md:grid-cols-2">
          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">客户痛点</div>
            <div className="card-list">
              {PAIN_POINTS.map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-base card-role-solution card-panel">
            <div className="card-kicker">我们能做什么</div>
            <div className="card-list">
              {CAPABILITIES.map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-section grid gap-5 md:grid-cols-2">
          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">核心价值</div>
            <div className="card-list">
              {VALUES.map((item) => (
                <div key={item} className="card-list-item card-list-item--headline">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">适用客户</div>
            <div className="card-list">
              {['AI企业出海', '算力服务商', '数据中心投资方', '海外基础设施项目'].map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">出海做算力，难点通常不在“有没有需求”，而在“电力、融资、基础设施和本地推进能力能不能一起跟上”。</div>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              提交项目需求
            </Link>
            <Link href="/support" className="btn-secondary">
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
