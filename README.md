# AI Native Computer — Official Website

> **The Computer Built for the Age of AI**
> Purpose-built silicon · AI-first OS · Unified SDK

---

## 🚀 Quick Start

```bash
git clone https://github.com/your-org/ai-native-computer
cd ai-native-computer
npm install
npm run dev
# → http://localhost:3000
```

---

## 🗂 Project Structure

```
src/
├── app/                          Next.js 14 App Router pages
│   ├── page.tsx                  Landing (Hero + Features + Use Cases + CTA)
│   ├── products/page.tsx         ANC-X1 · AI-OS · SDK (tabbed)
│   ├── architecture/page.tsx     Animated stack diagram + data-flow
│   ├── developers/page.tsx       Code examples + REST API reference
│   ├── about/page.tsx            Vision + roadmap timeline
│   └── api/
│       ├── inference/route.ts    POST /api/inference
│       ├── models/route.ts       GET  /api/models
│       ├── hardware/
│       │   └── status/route.ts   GET  /api/hardware/status
│       └── pipeline/
│           └── run/route.ts      POST /api/pipeline/run
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            Sticky nav · active route · mobile menu
│   │   └── Footer.tsx            4-column footer
│   ├── ui/
│   │   ├── ParticleCanvas.tsx    RAF particle system (no deps)
│   │   ├── GlowCard.tsx          Reusable glow-border card
│   │   ├── SectionLabel.tsx      Section tag + gradient heading
│   │   └── HardwareDashboard.tsx Live polling hardware status widget
│   └── sections/
│       ├── HeroSection.tsx       Particles + grid + stats bar
│       ├── FeaturesSection.tsx   6-card capability grid
│       └── UseCasesSection.tsx   4 use-case cards + CTA
│
└── styles/
    └── globals.css               CSS variables, design tokens, utility classes
```

---

## 🎨 Design System

| Token         | Value       | Usage                        |
|---------------|-------------|------------------------------|
| `--color-bg`  | `#030a0e`   | Page background              |
| `--color-green` | `#00ff88` | Primary accent (NVIDIA-style)|
| `--color-blue`  | `#00aaff` | Secondary accent (Intel-style)|
| `--color-teal`  | `#00ffcc` | Highlight / gradient end     |
| Font heading  | Orbitron    | All headings / labels        |
| Font body     | Rajdhani    | Body text / navigation       |
| Font code     | JetBrains Mono | Code blocks, specs        |

---

## 🔌 API Reference

### POST `/api/inference`
```json
{ "model": "llama-3-70b-instruct", "prompt": "...", "max_tokens": 512 }
```

### GET `/api/models`
Returns list of loaded models + hardware assignments.

### GET `/api/hardware/status`
Returns live NPU utilization, memory, thermal, and power metrics.

### POST `/api/pipeline/run`
```json
{ "steps": [{ "op": "detect", "model": "yolo-v9-anc" }], "input": { ... } }
```

---

## 🧩 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next@14` | App Router + API routes |
| `framer-motion` | Page transitions, scroll reveals, stagger animations |
| `tailwindcss` | Utility-first CSS (custom ANC tokens) |

---

## 🏗 Production Deployment

```bash
npm run build
npm start
# or
vercel deploy
```

Set these env vars for real hardware integration:
```
ANC_RUNTIME_HOST=grpc://your-anc-node:9090
ANC_API_TOKEN=your-secret-token
```

## ✉️ Inquiry Mail System

The Contact / Inquiry page now submits to a real server-side handler at `/api/inquiry`.

What it does:
- Validates required fields on both client and server
- Applies anti-spam checks with honeypot, dwell-time, link filtering, and request rate limiting
- Generates a trackable Inquiry ID in the format `ONM-YYYYMMDD-XXX`
- Sends the internal inquiry email to `contact@onemindsys.com` and optionally copies `admin@onemindsys.com`
- Sends an automatic acknowledgment email back to the customer
- Optionally forwards the same payload to a webhook for CRM or automation intake
- Persists a backup record under `/tmp/onemind-inquiries` whenever delivery is degraded or unavailable

Copy `.env.example` to `.env.local` and configure SMTP before testing.

Required mail-related env vars:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REQUIRE_TLS=true
SMTP_USER=admin@onemindsys.com
SMTP_PASS=your-google-workspace-app-password
INQUIRY_FROM_EMAIL=admin@onemindsys.com
INQUIRY_ACK_FROM_EMAIL=contact@onemindsys.com
INQUIRY_REPLY_TO_EMAIL=contact@onemindsys.com
INQUIRY_TO_EMAIL=contact@onemindsys.com
INQUIRY_CC_EMAIL=admin@onemindsys.com
```

Optional webhook / tuning env vars:
```bash
INQUIRY_WEBHOOK_URL=
INQUIRY_WEBHOOK_TOKEN=
INQUIRY_STORAGE_DIR=/tmp/onemind-inquiries
INQUIRY_RATE_LIMIT_WINDOW_MS=600000
INQUIRY_RATE_LIMIT_MAX_ATTEMPTS=5
INQUIRY_MIN_DWELL_TIME_MS=2500
INQUIRY_MAX_LINK_COUNT=4
```

Local test flow:
```bash
npm run dev
# open http://localhost:3000/support
# submit a real email address through the form
```

Expected result:
- The page shows a real Inquiry ID after submission
- `contact@onemindsys.com` receives the structured internal inquiry email
- The customer receives the acknowledgment email
- If delivery is degraded, the UI shows a professional failure or partial-success message instead of a fake success toast

---

## 📄 License

Apache 2.0 — see [LICENSE](./LICENSE)
