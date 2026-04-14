import { NextResponse } from 'next/server'

const MODELS = [
  { id: 'llama-3-70b-instruct',  type: 'llm',    params: '70B',   quantization: 'INT8',  status: 'loaded'   },
  { id: 'llama-3-8b-instruct',   type: 'llm',    params: '8B',    quantization: 'INT4',  status: 'loaded'   },
  { id: 'clip-vit-l-anc',        type: 'vision', params: '307M',  quantization: 'FP8',   status: 'loaded'   },
  { id: 'yolo-v9-anc',           type: 'vision', params: '57M',   quantization: 'INT8',  status: 'loaded'   },
  { id: 'llava-1.6-anc',         type: 'vlm',    params: '13B',   quantization: 'INT8',  status: 'standby'  },
  { id: 'whisper-large-v3-anc',  type: 'audio',  params: '1.5B',  quantization: 'FP8',   status: 'standby'  },
]

// GET /api/models
export async function GET() {
  return NextResponse.json({
    ok: true,
    count:  MODELS.length,
    models: MODELS,
  })
}
