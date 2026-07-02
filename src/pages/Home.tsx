const TOOLS = [
  'C#', '.NET', 'REST API', 'MVC', 'EF CORE', 'SQL', 'REACT', 'TYPESCRIPT',
  'AZURE', 'AWS', 'DOCKER', 'KUBERNETES', 'TERRAFORM', 'CI/CD', 'GIT',
  'AI-ASSISTED DEV', 'AGILE / SCRUM',
]

export default function Home() {
  const reel = [...TOOLS, ...TOOLS]
  return (
    <>
      <p className="kicker">Now broadcasting · Utica, MI</p>
      <h1 className="display">
        WILLIAM
        <br />
        KOPPELBERGER
      </h1>
      <p className="subtitle">Enterprise Application Engineer</p>

      <p className="lede">
        I build cloud-ready enterprise software — hands-on engineering, software
        architecture, and AI-assisted development workflows that accelerate delivery
        and raise code quality. A decade in the healthcare sector shipping
        high-stakes systems, from REST APIs to full-stack modernizations.
      </p>

      <div className="stat-strip">
        <span>
          <b>10+</b> years engineering
        </span>
        <span>
          <b>12</b> engineers led &amp; mentored
        </span>
        <span>
          <b>$1B+</b> yearly process modernized
        </span>
        <span>
          <b>#1</b> “Platform of the Year”
        </span>
      </div>

      <div className="grid cols-3">
        <div className="panel">
          <h3>TECH LEAD</h3>
          <p className="dim">
            Technical Lead of the project awarded “Platform of the Year” at Launch,
            by NTT DATA.
          </p>
        </div>
        <div className="panel">
          <h3>DELIVERY UNDER PRESSURE</h3>
          <p className="dim">
            Delivered a high-profile, time-critical solution to top business
            leadership as the full-stack technical engineer.
          </p>
        </div>
        <div className="panel">
          <h3>MENTOR &amp; MODERNIZER</h3>
          <p className="dim">
            Mentor and lead to a large Agile team modernizing a process handling
            billions of dollars every year.
          </p>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <span className="ticker-inner">
          {reel.map((t, i) => (
            <span key={i}> {t} ·</span>
          ))}
        </span>
      </div>
    </>
  )
}
