import { NextRequest, NextResponse } from 'next/server'

// POST /api/inference
// Body: { model: string, prompt: string, max_tokens?: number, temperature?: number }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { model, prompt, max_tokens = 512, temperature = 0.7 } = body

    if (!model || !prompt) {
      return NextResponse.json(
        { error: 'Missing required fields: model, prompt' },
        { status: 400 }
      )
    }

    // ── In production this proxies to the ANC Runtime gRPC service ──
    // const stub = new ANCRuntimeClient(process.env.ANC_RUNTIME_HOST)
    // const result = await stub.infer({ model, prompt, max_tokens, temperature })

    // Stub response for demo
    const result = {
      id:      `inf_${Date.now()}`,
      model,
      text:    `[Stub] Response to "${prompt.slice(0, 40)}…"`,
      tokens:  Math.min(max_tokens, 128),
      latency_ms: 0.82,
      hardware: { device: 'anc:0', utilization_pct: 72 },
    }

    return NextResponse.json({ ok: true, ...result })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
