'use client'

import { useEffect, useState } from 'react'

interface HWStatus {
  performance: { tops_utilized: number; tops_total: number; utilization_pct: number }
  memory: { total_gb: number; used_gb: number; bandwidth_tbs: number }
  thermal: { die_temp_c: number; throttle: boolean }
  power: { draw_watts: number; tdp_watts: number }
}

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-2 overflow-hidden rounded-full" style={{ background: 'var(--color-section)' }}>
      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
    </div>
  )
}

export function HardwareDashboard() {
  const [status, setStatus] = useState<HWStatus | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await fetch('/api/hardware/status')
      const data = await response.json()
      setStatus(data)
    }

    fetchStatus()
    const id = setInterval(fetchStatus, 2000)
    return () => clearInterval(id)
  }, [])

  if (!status) {
    return <div className="card-base h-[200px] animate-pulse p-6" />
  }

  const metrics = [
    { label: 'Utilization', value: `${status.performance.utilization_pct}%`, pct: status.performance.utilization_pct, color: '#0a0f14' },
    { label: 'Memory', value: `${status.memory.used_gb} / ${status.memory.total_gb} GB`, pct: (status.memory.used_gb / status.memory.total_gb) * 100, color: '#64748b' },
    { label: 'Power', value: `${status.power.draw_watts}W / ${status.power.tdp_watts}W`, pct: (status.power.draw_watts / status.power.tdp_watts) * 100, color: '#94a3b8' },
    { label: 'Temperature', value: `${status.thermal.die_temp_c}°C`, pct: status.thermal.die_temp_c, color: status.thermal.die_temp_c > 85 ? '#b91c1c' : '#0a0f14' },
  ]

  return (
    <div className="card-base p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--color-text3)' }}>
          Live Hardware Status
        </span>
        <span className="text-xs" style={{ color: 'var(--color-text2)' }}>
          ONEMIND Studio · system-0
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-2 flex justify-between text-sm">
              <span style={{ color: 'var(--color-text2)' }}>{metric.label}</span>
              <span className="font-mono" style={{ color: 'var(--color-text)' }}>
                {metric.value}
              </span>
            </div>
            <Bar pct={Math.min(metric.pct, 100)} color={metric.color} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-between border-t pt-4 text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text3)' }}>
        <span>Active TOPs: {status.performance.tops_utilized.toLocaleString()}</span>
        <span>Bandwidth: {status.memory.bandwidth_tbs} PB/s</span>
        <span>Refresh: 2s</span>
      </div>
    </div>
  )
}
