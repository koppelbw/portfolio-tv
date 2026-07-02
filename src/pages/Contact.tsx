const BARS = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0']

export default function Contact() {
  return (
    <>
      <p className="kicker">CH 05 · Open line</p>
      <h2 className="section">CONTACT</h2>
      <p className="subtitle">Transmission open 24/7</p>

      <p className="lede">
        Interested in working together, talking shop, or debating the best era of
        broadcast test patterns? Tune in below.
      </p>

      <div className="smpte" aria-hidden="true">
        {BARS.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </div>

      <a className="contact-row" href="mailto:koppelbw@gmail.com">
        <span className="proto">EMAIL //</span>
        koppelbw@gmail.com
      </a>
      <a
        className="contact-row"
        href="https://www.linkedin.com/in/william-koppelberger-5405905a/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="proto">LINKEDIN //</span>
        william-koppelberger ↗
      </a>
    </>
  )
}
