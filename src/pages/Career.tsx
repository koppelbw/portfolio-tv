type Job = {
  years: string
  title: string
  role: string
  feed: string
  points: string[]
}

const JOBS: Job[] = [
  {
    years: '2023 — 2026',
    title: 'HCA Healthcare · Dispute Resolution Workflow',
    role: 'Digital Engineering Supervisor',
    feed: '.NET 9 / ASP.NET MVC / EF Core / SQL Server / Azure / GitHub / Terraform / GitHub Copilot',
    points: [
      'Lead and mentor to a 12-engineer Agile team modernizing a dispute-resolution platform that processes billions of dollars in healthcare claims annually',
      'Directed the platform’s migration from on-prem hosting to Azure using Terraform IaC and automated CI/CD pipelines with zero downtime to production end users',
      'Led a major refactoring and code-structure overhaul that increased unit test coverage by 20%',
      'Drove team-wide adoption of GitHub Copilot and AI-assisted code review, reducing average PR review times by 50% and establishing higher code quality standards',
      'Remain hands-on: led and implemented a batch-processing subsystem handling hundreds of thousands of data entries per day in .NET 9 and EF Core while owning code quality and performance standards',
    ],
  },
  {
    years: '2023',
    title: 'HCA Healthcare · No Surprises Act Compliance',
    role: 'Digital Engineering Team Lead',
    feed: '.NET 5 / ASP.NET MVC / EF Core / SQL Server / GitHub',
    points: [
      'Technical lead for a team of 5-8 engineers delivering federally mandated No Surprises Act functionality on an accelerated 6-month timeline; shipped on schedule',
      'Designed and led the expansion of the existing .NET application, personally implementing the bulk-import process',
      'Owned CI/CD pipelines and on-prem hosting, maintaining a monthly UAT release cadence throughout the compressed delivery window',
    ],
  },
  {
    years: '2021 — 2023',
    title: 'HCA Healthcare · CDRA / ROSI',
    role: 'Sr. Software Developer II',
    feed: '.NET 6 / Blazor / EF Core / SQL Server / Azure / GitHub',
    points: [
      'Technical lead of the platform awarded “Platform of the Year” at Launch’s annual awards celebration',
      'Led the team’s adoption of Blazor from zero prior experience, ramping 6-8 engineers to full productivity in 3 months',
      'Architected the platform using domain-centric architecture and CQRS via MediatR, improving testability and separation of concerns',
      'Promoted from senior contributor to team lead mid-engagement; owned Azure cloud hosting and deployments',
    ],
  },
  {
    years: '2020 — 2021',
    title: 'HCA Healthcare · Denial Escalation Workflow',
    role: 'Sr. Software Developer I',
    feed: '.NET Core 3.0 / ASP.NET MVC / EF Core / SQL Server / JavaScript / jQuery / TFS',
    points: [
      'Designed and implemented a bulk data intake system handling thousands of records at once, replacing a manual workflow',
      'Partnered with UI/UX designers to translate a complex, long-standing manual business process into an intuitive web workflow',
    ],
  },
  {
    years: '2018 — 2020',
    title: 'HCA Healthcare · Price Transparency Web App & API',
    role: 'Sr. Software Developer I',
    feed: '.NET Core 2.0 / REST API / ASP.NET MVC / EF Core / SQL Server / TFS',
    points: [
      'Built and delivered an executive-priority price transparency application and public REST API under a government-mandated deadline, frequently presented to top business leadership',
      'Owned production deployment and post-launch support end to end',
    ],
  },
  {
    years: '2016 — 2018',
    title: 'HCA Healthcare · Charge Master',
    role: 'Software Developer I',
    feed: '.NET Framework / ASP.NET MVC / Entity Framework / SQL Server / JavaScript / jQuery',
    points: [
      'Full-stack contributor; implemented complex frontend and backend features',
      'Designed a bulk data intake system that automated a legacy process for updating medical procedures',
    ],
  },
  {
    years: '2015 — 2016',
    title: 'Johnson & Johnson · Health & Wellness Solutions',
    role: 'Jr. Developer',
    feed: 'Java / Log4j / JavaScript / HTML / CSS',
    points: ['Implemented security enhancements to a complex legacy Java system'],
  },
]

export default function Career() {
  return (
    <>
      <p className="kicker">CH 02 · Broadcast history</p>
      <h2 className="section">CAREER</h2>
      <p className="subtitle">Launch, by NTT DATA · 2015 — Present</p>
      <p className="lede">
        Digital engineering consultancy delivering products for Fortune 500
        clients. Embedded long-term with HCA Healthcare, one of the largest U.S.
        health systems, across six major platform engagements.
      </p>

      <div>
        {JOBS.map((job) => (
          <article className="job" key={job.title}>
            <span className="years">{job.years}</span>
            <h3>{job.title}</h3>
            <p className="role">{job.role}</p>
            <p className="feed">{job.feed}</p>
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="dim">
        <span className="hl">EDUCATION</span> — B.S. Computer Science, Grand Valley
        State University, 2014.
      </p>
    </>
  )
}
