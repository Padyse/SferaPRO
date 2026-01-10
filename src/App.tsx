import { ArrowRight, Sparkles, Shield, Bot, MousePointerClick, Zap, Rocket, Globe, Star, ChevronDown } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/Sfera_ecosystem'

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
      {children}
    </span>
  )
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
}

function ButtonPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,60,247,0.25)] transition hover:opacity-90"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

function ButtonSecondary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
    >
      {children}
    </a>
  )
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative h-8 w-8">
       <div
  className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-300 opacity-70 blur-[10px] animate-pulse"
  style={{ animationDuration: '3.5s' }}
/>

<div
  className="absolute -inset-1 rounded-full border border-white/10 animate-spin"
  style={{ animationDuration: '12s' }}
/>

<div
  className="absolute inset-[2px] rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-300 animate-spin"
  style={{ animationDuration: '18s', animationDirection: 'reverse' }}
/>

        <div className="absolute inset-[7px] rounded-full bg-slate-950" />
        <div className="absolute inset-[10px] rounded-full bg-gradient-to-br from-fuchsia-300 to-cyan-200" />
      </div>

      <div className="text-xs font-semibold tracking-[0.28em] text-white/80">
        <span className="bg-gradient-to-r from-fuchsia-200 via-white to-cyan-200 bg-clip-text text-transparent">
          SFERA
        </span>
      </div>
    </div>
  )
}


function SectionTitle({ title, highlight }: { title: string; highlight: string }) {
  return (
    <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
      {title} <GradientText>{highlight}</GradientText>
    </h2>
  )
}
function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth">
      {/* background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(255,60,247,0.18),transparent_55%),radial-gradient(1000px_600px_at_70%_60%,rgba(0,240,255,0.14),transparent_60%),radial-gradient(900px_500px_at_30%_70%,rgba(122,54,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/40 to-slate-950" />
      </div>

      {/* HERO */}
      <header className="relative">
        <Container>
          {/* Top bar */}
          <div className="pt-8 md:pt-10 flex items-center justify-between">
            <LogoMark />

  <nav className="hidden md:flex items-center gap-6 text-sm text-white/65">
  <a href="#ecosystem" className="hover:text-white">Экосистема</a>
  <a href="#services" className="hover:text-white">Сервисы</a>
  <a href="#how" className="hover:text-white">Как начать</a>
</nav>


            <a
              href={TELEGRAM_URL}
              className="hidden md:inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 hover:bg-white/10"
            >
              Telegram
            </a>
          </div>

          <div className="relative flex min-h-[76vh] flex-col items-center justify-center pb-16 pt-10 text-center md:min-h-[88vh]">
            {/* hero rings */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 rounded-full border border-fuchsia-500/20" />
              <div className="absolute inset-10 rounded-full border border-cyan-400/15" />
              <div className="absolute inset-24 rounded-full border border-purple-400/10" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-cyan-400/10 blur-2xl" />
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              Цифровая экосистема <br />
              <GradientText>нового поколения</GradientText>
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-white/60 md:text-base">
              VPN, нейросети и умные сервисы в одном пространстве
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <ButtonPrimary href={TELEGRAM_URL}>
                <span className="inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                    <path
                      d="M21.8 4.6L2.7 12.3c-1.3.5-1.3 1.2-.2 1.6l4.9 1.5 1.9 5.8c.2.6.1.8.9.8.6 0 .9-.3 1.2-.6l2.4-2.3 5 3.7c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.8-1.6-1.4ZM9.6 15.1l9.9-6.2c.5-.3.9-.1.6.2l-8 7.2-.3 3.1-1.9-6.1c-.2-.6.2-1 .8-1.2Z"
                      fill="currentColor"
                    />
                  </svg>
                  Перейти в Telegram
                </span>
              </ButtonPrimary>
              <ButtonSecondary href={TELEGRAM_URL}>Начать использовать</ButtonSecondary>
            </div>

            {/* scroll down */}
            <div className="mt-12 flex items-center justify-center">
              <a
                href="#ecosystem"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10"
                aria-label="Скролл вниз"
              >
                <ChevronDown className="h-5 w-5 text-white/60 transition group-hover:text-white/80 group-hover:translate-y-[2px]" />
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="py-20 md:py-24">
        <Container>
          <div className="py-4">
            <SectionTitle title="Экосистема" highlight="Sfera" />
            <p className="mt-3 text-center text-sm text-white/55">
              Не один сервис, а целая экосистема связанных решений для вашего цифрового мира
            </p>
          </div>

          <div className="relative mx-auto mt-12 flex max-w-3xl items-center justify-center">
            {/* dots */}
            <div className="pointer-events-none absolute inset-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-white/20"
                  style={{
                    left: `${20 + (i * 7) % 60}%`,
                    top: `${15 + (i * 11) % 70}%`,
                    filter: 'blur(0.2px)',
                  }}
                />
              ))}
            </div>

            <div className="grid w-full grid-cols-3 items-center gap-10">
              {/* left */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-fuchsia-500/25 blur-xl" />
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-400/40 bg-white/5">
                    <Bot className="h-7 w-7 text-fuchsia-300" />
                  </div>
                </div>
                <div className="text-xs text-white/70">Sfera AI</div>
              </div>

              {/* center */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/35 to-cyan-400/25 blur-2xl" />
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-slate-950/50 backdrop-blur">
                    <div className="text-xs font-semibold tracking-[0.25em] text-white/70">SFERA</div>
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-fuchsia-400/25" />
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/35 bg-white/5">
                    <Shield className="h-7 w-7 text-cyan-200" />
                  </div>
                </div>
                <div className="text-xs text-white/70">Sfera VPN</div>
              </div>
            </div>

            {/* bottom */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl" />
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-purple-300/25 bg-white/5">
                    <Sparkles className="h-6 w-6 text-purple-200" />
                  </div>
                </div>
                <div className="text-[11px] text-white/55">Скоро</div>
              </div>
            </div>

            {/* connectors */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1px] w-[68%] -translate-x-1/2 -translate-y-1/2 bg-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[1px] -translate-x-1/2 -translate-y-[22%] bg-white/10" />
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-24">
        <Container>
          <SectionTitle title="Наши" highlight="Сервисы" />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/15 ring-1 ring-fuchsia-400/30">
                  <Bot className="h-6 w-6 text-fuchsia-200" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Sfera AI</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-fuchsia-300/80">искусственный интеллект</div>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-fuchsia-300" /> Генерация текста и изображений</div>
                <div className="flex items-center gap-3"><MousePointerClick className="h-4 w-4 text-fuchsia-300" /> Помощь в учёбе и задачах</div>
                <div className="flex items-center gap-3"><Star className="h-4 w-4 text-fuchsia-300" /> Креатив и эксперименты</div>
              </div>

              <a
                href={TELEGRAM_URL}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Попробовать
              </a>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-300/30">
                  <Shield className="h-6 w-6 text-cyan-100" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Sfera VPN</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-cyan-200/80">виртуальная частная сеть</div>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3"><Zap className="h-4 w-4 text-cyan-200" /> Быстрый и стабильный интернет</div>
                <div className="flex items-center gap-3"><MousePointerClick className="h-4 w-4 text-cyan-200" /> Простое подключение</div>
                <div className="flex items-center gap-3"><Shield className="h-4 w-4 text-cyan-200" /> Безопасность и приватность</div>
              </div>

              <a
                href={TELEGRAM_URL}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Попробовать
              </a>
            </Card>
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section id="why" className="py-20 md:py-24">
        <Container>
          <SectionTitle title="Почему" highlight="Sfera?" />

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <Card className="p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 ring-1 ring-yellow-300/25">
                <Zap className="h-5 w-5 text-yellow-200" />
              </div>
              <div className="mt-4 text-sm font-semibold">Быстро</div>
              <div className="mt-2 text-xs text-white/60">Мгновенный отклик и высокая скорость работы всех сервисов</div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-yellow-400/70 to-transparent" />
            </Card>

            <Card className="p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 ring-1 ring-fuchsia-300/25">
                <Sparkles className="h-5 w-5 text-fuchsia-200" />
              </div>
              <div className="mt-4 text-sm font-semibold">Просто</div>
              <div className="mt-2 text-xs text-white/60">Интуитивный интерфейс, понятный каждому пользователю</div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-fuchsia-400/70 to-transparent" />
            </Card>

            <Card className="p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-300/25">
                <Shield className="h-5 w-5 text-cyan-100" />
              </div>
              <div className="mt-4 text-sm font-semibold">Безопасно</div>
              <div className="mt-2 text-xs text-white/60">Надёжная защита данных и конфиденциальность</div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-cyan-300/70 to-transparent" />
            </Card>

            <Card className="p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 ring-1 ring-purple-300/25">
                <Rocket className="h-5 w-5 text-purple-200" />
              </div>
              <div className="mt-4 text-sm font-semibold">Современно</div>
              <div className="mt-2 text-xs text-white/60">Передовые технологии и постоянные обновления</div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-purple-300/70 to-transparent" />
            </Card>
          </div>
        </Container>
      </section>

      {/* HOW */}
      <section id="how" className="py-20 md:py-24">
        <Container>
          <SectionTitle title="Как" highlight="начать?" />
          <p className="mt-3 text-center text-sm text-white/55">Три простых шага до начала использования</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="relative pt-10">
              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(0,240,255,0.25)]">1</div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-300/25">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-cyan-200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M22 3L15 21L11 14L3 10L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mt-5 text-center text-sm font-semibold">Открыть Telegram</div>
              <div className="mt-2 text-center text-xs text-white/60">Запустите мессенджер на любом устройстве</div>
              <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-cyan-300/70 to-transparent" />
            </Card>

            <Card className="relative pt-10">
              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(255,60,247,0.25)]">2</div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 ring-1 ring-purple-300/25">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-purple-200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="mt-5 text-center text-sm font-semibold">Запустить бота</div>
              <div className="mt-2 text-center text-xs text-white/60">Найдите нужный сервис Sfera и запустите его</div>
              <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400/70 to-transparent" />
            </Card>

            <Card className="relative pt-10">
              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(255,60,247,0.25)]">3</div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/10 ring-1 ring-fuchsia-300/25">
                <MousePointerClick className="h-6 w-6 text-fuchsia-200" />
              </div>
              <div className="mt-5 text-center text-sm font-semibold">Пользоваться</div>
              <div className="mt-2 text-center text-xs text-white/60">Наслаждайтесь всеми возможностями экосистемы</div>
              <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-purple-300/70 to-transparent" />
            </Card>
          </div>
        </Container>
      </section>

      {/* TRUST */}
      <section id="trust" className="py-20 md:py-24">
        <Container>
          <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
            Нам <GradientText>доверяют</GradientText>
          </h2>
          <p className="mt-3 text-center text-sm text-white/55">Масштабный проект с впечатляющими показателями</p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <MetricCard accent="fuchsia" value="1 000+" label="Активных пользователей" icon={<Bot className="h-5 w-5" />} />
            <MetricCard accent="cyan" value="150+" label="Стран присутствия" icon={<Globe className="h-5 w-5" />} />
            <MetricCard accent="yellow" value="99.9%" label="Стабильность работы" icon={<Zap className="h-5 w-5" />} />
            <MetricCard accent="purple" value="5/5" label="Средняя оценка" icon={<Star className="h-5 w-5" />} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-14">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-fuchsia-500/25 via-purple-500/15 to-cyan-400/20 opacity-60" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

            <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400/40 to-cyan-300/30 ring-1 ring-white/10">
              <Sparkles className="h-7 w-7 text-white/90" />
            </div>

            <h3 className="relative mt-6 text-2xl font-semibold md:text-3xl">
              Присоединяйтесь к экосистеме <GradientText>Sfera</GradientText>
            </h3>
            <p className="relative mx-auto mt-3 max-w-2xl text-sm text-white/60">
              Начните использовать передовые технологии уже сегодня. Простой старт, мощные возможности.
            </p>

            <div className="relative mt-8 flex flex-col items-center gap-4">
              <a
                href={TELEGRAM_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-10 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Начать сейчас <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-6 text-xs text-white/55">
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300" /> Безопасно</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Быстро</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-300" /> Надёжно</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer id="contacts" className="border-t border-white/10 bg-slate-950/40">
        <Container>
          <div className="grid gap-10 py-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <LogoMark />
              <p className="mt-4 text-sm text-white/55">
                Цифровая экосистема нового поколения. VPN, нейросети и умные сервисы в одном пространстве.
              </p>
              <div className="mt-6 flex gap-3">
                <a href={TELEGRAM_URL} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10" aria-label="Telegram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8 4.6L2.7 12.3c-1.3.5-1.3 1.2-.2 1.6l4.9 1.5 1.9 5.8c.2.6.1.8.9.8.6 0 .9-.3 1.2-.6l2.4-2.3 5 3.7c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.8-1.6-1.4Z" fill="currentColor" />
                  </svg>
                </a>
                <a href={TELEGRAM_URL} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </div>

            <FooterCol title="Сервисы" items={[{ label: 'Sfera AI', href: TELEGRAM_URL }, { label: 'Sfera VPN', href: TELEGRAM_URL }]} />
            <FooterCol title="Компания" items={[{ label: 'О нас', href: '#' }, { label: 'Блог', href: '#' }, { label: 'Карьера', href: '#' }]} />
            <FooterCol title="Поддержка" items={[{ label: 'Помощь', href: '#' }, { label: 'Документация', href: '#' }, { label: 'FAQ', href: '#' }]} />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row">
            <div>© 2026 Sfera. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/60">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white/60">Условия использования</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

function MetricCard({
  accent,
  value,
  label,
  icon,
}: {
  accent: 'fuchsia' | 'cyan' | 'yellow' | 'purple'
  value: string
  label: string
  icon: React.ReactNode
}) {
  const accentMap: Record<string, string> = {
    fuchsia: 'from-fuchsia-500/50 to-transparent text-fuchsia-200 ring-fuchsia-300/25',
    cyan: 'from-cyan-400/50 to-transparent text-cyan-100 ring-cyan-300/25',
    yellow: 'from-yellow-400/50 to-transparent text-yellow-200 ring-yellow-300/25',
    purple: 'from-purple-400/50 to-transparent text-purple-200 ring-purple-300/25',
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className={`inline-flex items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ${accentMap[accent].split(' ').slice(-1)[0]}`}>
        <div className={accentMap[accent].split(' ')[2]}>{icon}</div>
      </div>
      <div className={`mt-4 text-3xl font-semibold ${accentMap[accent].split(' ')[2]}`}>{value}</div>
      <div className="mt-2 text-xs text-white/55">{label}</div>
      <div className={`mt-5 h-[2px] w-full bg-gradient-to-r ${accentMap[accent].split(' ')[0]} ${accentMap[accent].split(' ')[1]}`} />
    </div>
  )
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white/80">{title}</div>
      <ul className="mt-4 space-y-3 text-sm text-white/55">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href} className="hover:text-white/70">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
