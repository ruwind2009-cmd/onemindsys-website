import { NextRequest, NextResponse } from 'next/server'

// POST /api/pipeline/run
// Body: { pipeline_id?: string, steps: Step[], input: any }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { steps, input } = body

    if (!steps || !Array.isArray(steps) || steps.length === 0) {
      return NextResponse.json(
        { error: 'steps must be a non-empty array of pipeline steps' },
        { status: 400 }
      )
    }

    // Validate step schema
    for (const step of steps) {
      if (!step.op || !step.model) {
        return NextResponse.json(
          { error: 'Each step must have op and model fields' },
          { status: 400 }
        )
      }
    }

    // In production:
    // const compiled = await ancCompiler.compile(steps)
    // const stream   = ancRuntime.executeStream(compiled, input)
    // return new StreamingTextResponse(stream)

    const result = {
      pipeline_id:  `pipe_${Date.now()}`,
      steps_count:  steps.length,
      status:       'completed',
      latency_ms:   steps.length * 0.4 + Math.random() * 0.5,
      output: {
        type:   'structured',
        data:   `[Stub] Pipeline output for ${steps.length} step(s) on input: ${JSON.stringify(input).slice(0, 60)}`,
      },
    }

    return NextResponse.json({ ok: true, ...result })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
