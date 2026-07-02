import { useEffect, useRef, useState, type ComponentType } from 'react'
import Noise from './components/Noise'
import Home from './pages/Home'
import Career from './pages/Career'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

type Channel = {
  slug: string
  num: string
  label: string
  page: ComponentType
}

const CHANNELS: Channel[] = [
  { slug: '', num: '01', label: 'HOME', page: Home },
  { slug: 'career', num: '02', label: 'CAREER', page: Career },
  { slug: 'projects', num: '03', label: 'PROJECTS', page: Projects },
  { slug: 'about', num: '04', label: 'ABOUT ME', page: About },
  { slug: 'contact', num: '05', label: 'CONTACT', page: Contact },
]

const AMBIENT_NOISE = 0.06

function slugFromHash(): string {
  return window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '')
}

export default function App() {
  const [slug, setSlug] = useState(slugFromHash)
  const [noise, setNoise] = useState(AMBIENT_NOISE)
  const [osdVisible, setOsdVisible] = useState(true)
  const timers = useRef<number[]>([])
  const firstRender = useRef(true)

  const channel = CHANNELS.find((c) => c.slug === slug) ?? CHANNELS[0]

  useEffect(() => {
    const onHashChange = () => setSlug(slugFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // channel-change static burst + OSD flash
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      timers.current.push(window.setTimeout(() => setOsdVisible(false), 2600))
      return
    }
    timers.current.forEach(clearTimeout)
    timers.current = []
    setNoise(0.85)
    setOsdVisible(true)
    timers.current.push(window.setTimeout(() => setNoise(AMBIENT_NOISE), 240))
    timers.current.push(window.setTimeout(() => setOsdVisible(false), 2200))
    document.querySelector('.screen')?.scrollTo(0, 0)
  }, [slug])

  const Page = channel.page

  return (
    <div className="tv" data-theme={channel.num}>
      {/* CRT tube outline: every edge bows gently outward (parabolic arcs)
          into small rounded corners; objectBoundingBox units keep it responsive */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="crt-tube" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0 Q 0.7225,0 0.945,0.012 Q 0.9831,0.0141 0.986,0.06 Q 1,0.28 1,0.5 Q 1,0.72 0.986,0.94 Q 0.9831,0.9859 0.945,0.988 Q 0.7225,1 0.5,1 Q 0.2775,1 0.055,0.988 Q 0.0169,0.9859 0.014,0.94 Q 0,0.72 0,0.5 Q 0,0.28 0.014,0.06 Q 0.0169,0.0141 0.055,0.012 Q 0.2775,0 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="crt-shell">
        <div className="crt">
          <div className="screen">
        <div className="frame">
          <header className="nav">
            <a className="brand" href="#/">
              <span className="rec">●</span>WK-TV
            </a>
            <nav className="channels" aria-label="Channels">
              {CHANNELS.map((c) => (
                <a
                  key={c.num}
                  className={`channel${c.num === channel.num ? ' active' : ''}`}
                  href={`#/${c.slug}`}
                >
                  <span className="num">{c.num}</span>
                  {c.label}
                </a>
              ))}
            </nav>
          </header>

          <main className="page" key={channel.num}>
            <Page />
          </main>

          <footer className="tv-footer">
            <span>
              © 2026 WILLIAM KOPPELBERGER · UTICA, MI <span className="cursor" />
            </span>
            <div className="footer-links">
              <a href="https://github.com/koppelbw" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/william-koppelberger-5405905a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
            <span className="signal">
              SIGNAL: <span className="ok">OK</span> · CH {channel.num}
            </span>
          </footer>
        </div>
          </div>

          <Noise level={noise} />
          <div className="overlay-scanlines" aria-hidden="true" />
          <div className="overlay-vignette" aria-hidden="true" />
          <div className={`osd${osdVisible ? ' visible' : ''}`} aria-hidden="true">
            CH {channel.num} · {channel.label}
          </div>
          <div className="boot" aria-hidden="true" />
        </div>
      </div>

      <span className="bezel-brand" aria-hidden="true">
        Koppelberger · Model WK-2600
      </span>
      <span className="bezel-led" aria-hidden="true" />
    </div>
  )
}
