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
    feed: '.NET 9 / MVC / EF Core / SQL / GitHub / Azure / CI-CD / IaC / Copilot',
    points: [
      'Mentor and lead to a large Agile team of 12 engineers',
      'Oversight of code quality and performance across the platform',
      'Led major refactoring and code structure improvements',
      'Managed migration from on-prem to cloud hosting and resources',
      'AI-driven engineering environment',
      'Modernized a high-profile process handling billions of dollars each year',
    ],
  },
  {
    years: '2023',
    title: 'HCA Healthcare · No Surprise Act',
    role: 'Digital Engineering Team Lead',
    feed: '.NET 5 / MVC / EF Core / SQL / GitHub',
    points: [
      'Technical lead to an Agile team of 5–8 engineers',
      'CI/CD and on-prem hosting oversight',
      'Expanded an existing .NET application on an accelerated timeline',
    ],
  },
  {
    years: '2021 — 2023',
    title: 'HCA Healthcare · CDRA / ROSI',
    role: 'Sr. Software Developer II',
    feed: '.NET 6 / Blazor / EF Core / SQL / GitHub / Azure',
    points: [
      '“Platform of the Year” — Launch, by NTT DATA, Awards Celebration',
      'Mentored and became lead of the Agile team',
      'Took the team through adopting a new technology: Blazor',
      'Implemented domain-centric architecture and CQRS via MediatR',
      'Azure cloud hosting oversight',
    ],
  },
  {
    years: '2020 — 2021',
    title: 'HCA Healthcare · Denial Escalation Workflow',
    role: 'Sr. Software Developer I',
    feed: '.NET Core 3.0 / MVC / EF Core / SQL / JavaScript / jQuery / TFS',
    points: [
      'Full-stack technical contributor',
      'Designed and implemented a bulk data intake system',
      'Partnered with UI/UX designers on a challenging adaptation of an existing business process',
    ],
  },
  {
    years: '2018 — 2020',
    title: 'HCA Healthcare · Price Transparency Web App & API',
    role: 'Sr. Software Developer I',
    feed: '.NET Core 2.0 / REST API / MVC / EF Core / SQL / TFS',
    points: [
      'Full-stack technical contributor',
      'Production deployment and support responsibilities',
      'Delivered a high-profile, time-critical solution to top business leadership',
    ],
  },
  {
    years: '2016 — 2018',
    title: 'HCA Healthcare · Charge Master',
    role: 'Software Developer I',
    feed: '.NET Framework / MVC / EF / SQL / JavaScript / jQuery',
    points: [
      'Front-end and back-end technical contributor',
      'Designed and implemented a bulk data intake system',
    ],
  },
  {
    years: '2015 — 2016',
    title: 'Johnson & Johnson · Health and Wellness Solutions',
    role: 'Jr. Developer',
    feed: 'Java / Log4J / JavaScript / HTML / CSS',
    points: ['Implemented security enhancements in a challenging legacy system'],
  },
]

export default function Career() {
  return (
    <>
      <p className="kicker">CH 02 · Broadcast history</p>
      <h2 className="section">CAREER</h2>
      <p className="subtitle">Launch, by NTT DATA · 2015 — Present</p>
      <p className="lede">
        Launch, a division within NTT DATA, specializes in digital innovation,
        design, and engineering for Fortune 500 companies. My decade there has
        centered on the healthcare sector — shipping high-quality software with
        the teams below.
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
        EDUCATION — B.S. Computer Science, Grand Valley State University, 2014.
        <br />
        AWARDS — C# &amp; T-SQL Microsoft Exams · 2017 / 2018 / 2019 Launch Hackathon
        prize winner.
      </p>
    </>
  )
}
