import { useEffect, useRef } from 'react'

/** Fullscreen animated static. `level` drives opacity: ambient hum vs channel-change burst. */
export default function Noise({ level }: { level: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let last = 0

    const resize = () => {
      // quarter resolution keeps the grain chunky and cheap; CSS scales it up
      canvas.width = Math.ceil(window.innerWidth / 4)
      canvas.height = Math.ceil(window.innerHeight / 4)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw)
      if (t - last < 50) return
      last = t
      const { width, height } = canvas
      const image = ctx.createImageData(width, height)
      const buf = new Uint32Array(image.data.buffer)
      for (let i = 0; i < buf.length; i++) {
        const v = (Math.random() * 255) | 0
        buf[i] = (255 << 24) | (v << 16) | (v << 8) | v
      }
      ctx.putImageData(image, 0, 0)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="noise" style={{ opacity: level }} aria-hidden="true" />
}
