import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

export const metadata: Metadata = {
  title: 'AI算力中心建设一体化解决方案 — ONEMIND',
  description: '面向地方政府与产业园区，提供从规划、能源配套到融资落地的算力中心建设能力。',
  keywords: ['AI算力中心建设', '算力中心规划', '数据中心供电', 'AI项目融资', '园区算力中心'],
  openGraph: {
    title: 'AI算力中心建设一体化解决方案 — ONEMIND',
    description: '面向地方政府与产业园区，提供从规划、能源配套到融资落地的算力中心建设能力。',
    type: 'website',
  },
}

const PAIN_POINTS = [
  '算力中心项目缺整体规划',
  '电力配套不足或成本高',
  '投资压力大',
  '缺乏具备交付能力的实施主体',
]

const CAPABILITIES = [
  'AI算力中心整体规划',
  '电力与能源系统配套方案',
  '算力与能源一体化设计',
  '融资支持',
  '项目实施与交付支持',
]

const VALUES = ['降低前期投资压力', '提升供电稳定性', '缩短项目推进周期', '支持长期扩展']

export default function ZhAiComputeCenterSolutionPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="中文解决方案"
          title="AI算力中心建设一体化解决方案"
          description="面向地方政府与产业园区，提供从规划、能源配套到融资落地的算力中心建设能力。"
          scene="solution-compute-center"
          imageAlt="AI 算力中心建设解决方案主视觉。"
          tags={['供电配套', '融资落地', '园区部署']}
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
              {['地方政府算力中心项目', 'AI产业园 / 数字园区', '数据中心投资平台'].map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">如果你在推进算力中心项目，关键不是先买设备，而是先把供电、融资与项目推进路径想清楚。</div>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              获取方案
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
