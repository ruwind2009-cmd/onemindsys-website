import { NextResponse } from 'next/server'

// GET /api/hardware/status
export async function GET() {
  // In production, this reads from the ONEMIND hardware telemetry daemon via Unix socket or gRPC.
  // const hw = await ancDaemon.getStatus()

  const now = Date.now()
  const jitter = () => Math.floor(Math.random() * 8)

  return NextResponse.json({
    ok: true,
    timestamp: now,
    device: 'anc:0',
    model: 'ONEMIND Studio',
    silicon: {
      process_nm: 3,
      neural_cores: 8,
      cores_active: 6,
    },
    performance: {
      tops_utilized:     6840 + jitter() * 10,
      tops_total:        10000,
      utilization_pct:   68  + jitter(),
    },
    memory: {
      total_gb:     192,
      used_gb:      144,
      bandwidth_tbs: 1.8,
    },
    thermal: {
      die_temp_c:    62 + jitter(),
      throttle:      false,
    },
    power: {
      draw_watts:   312 + jitter() * 2,
      tdp_watts:    400,
    },
  })
}
