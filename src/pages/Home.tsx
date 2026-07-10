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
      <p className="subtitle">Software Engineer</p>

      <p className="lede">
        Hands-on full-stack engineer and technical lead — 11 years designing,
        building, and shipping .NET/Azure platforms for the healthcare industry,
        including systems processing billions of dollars in transactions annually.
      </p>

      <div className="stat-strip">
        <span>
          <b>11</b> years engineering
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
          <h3>CLOUD MIGRATION, ZERO DOWNTIME</h3>
          <p className="dim">
            Directed a platform’s on-prem-to-Azure migration with Terraform IaC and
            automated CI/CD — zero downtime for production users.
          </p>
        </div>
        <div className="panel">
          <h3>AI-DRIVEN SDLC</h3>
          <p className="dim">
            Drove team-wide adoption of GitHub Copilot and AI-assisted code review —
            PR review times down 50%, unit test coverage up 20%.
          </p>
        </div>
        <div className="panel">
          <h3>“PLATFORM OF THE YEAR”</h3>
          <p className="dim">
            Technical lead of the platform awarded Platform of the Year at Launch,
            by NTT DATA — while leading and mentoring a 12-engineer Agile team.
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
