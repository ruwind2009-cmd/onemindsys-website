import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

export const metadata: Metadata = {
  title: '能源项目升级为AI算力基础设施解决方案 — ONEMIND',
  description: '将传统能源项目升级为面向 AI 的新型基础设施，释放能源资产的新价值。',
  keywords: ['能源项目升级', '电站+算力', '算力与能源', 'AI基础设施项目', '能源资产升级'],
  openGraph: {
    title: '能源项目升级为AI算力基础设施解决方案 — ONEMIND',
    description: '将传统能源项目升级为面向 AI 的新型基础设施，释放能源资产的新价值。',
    type: 'website',
  },
}

const PAIN_POINTS = [
  '传统能源项目收益承压',
  '有电力资源，但不会做算力',
  '缺乏算力部署与商业模式设计能力',
  '需要项目落地与融资支持',
]

const CAPABILITIES = [
  '能源项目与算力需求匹配分析',
  '电站+算力一体化方案',
  '算力中心部署规划',
  '融资与商业模式设计',
  '项目实施支持',
]

const VALUES = [
  '提升能源资产收益能力',
  '打开 AI 基础设施新业务',
  '实现“电 → 算力”的价值升级',
  '支持长期稳定运营',
]

export default function ZhEnergyUpgradeSolutionPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="中文解决方案"
          title="能源项目升级为AI算力基础设施解决方案"
          description="将传统能源项目升级为面向 AI 的新型基础设施，释放能源资产的新价值。"
          scene="solution-energy-upgrade"
          imageAlt="能源项目升级为 AI 算力基础设施主视觉。"
          tags={['能源资产', '算力升级', '长期运营']}
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
              {['能源集团', '电力公司', '央企 / 国企项目平台', 'EPC 工程公司'].map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">如果你手里有能源资产，关键不是是否要做 AI，而是怎么把“电力资源”升级成“可持续运营的算力基础设施”。</div>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              提交项目需求
            </Link>
            <Link href="/financing" className="btn-secondary">
              获取融资方案
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
