type ProjectLink = {
  href: string
  label: string
}

type Project = {
  title: string
  blurb: string
  tags: string[]
  links: ProjectLink[]
}

const PROJECTS: Project[] = [
  {
    title: 'ITEMCATALOGUE API',
    blurb:
      'Home-inventory platform built on ASP.NET Core 10 with a five-project Clean/Hexagonal architecture. EF Core + SQL Server (SSDT dacpac with schema-drift gates), Azure Blob picture storage, OpenTelemetry observability, ~400 xUnit v3 tests with Testcontainers, and GitHub Actions CI/CD deploying to Azure.',
    tags: ['.NET 10', 'EF Core', 'SQL Server', 'Azure', 'xUnit v3', 'CI/CD'],
    links: [{ href: 'https://github.com/koppelbw/ItemCatalogue', label: 'View source ↗' }],
  },
  {
    title: 'HABITAT · HOUSEVIEW UI',
    blurb:
      'An isometric 3D “dollhouse” front end for ItemCatalogue. React + TypeScript + react-three-fiber + GSAP render your actual floors, rooms, doors, and containers with real-inch geometry — click through the house to browse and manage everything in it, with full CRUD against the API.',
    tags: ['React', 'TypeScript', 'Three.js / R3F', 'GSAP', 'Vite'],
    links: [
      { href: 'https://purple-tree-02473b20f.7.azurestaticapps.net/', label: 'Live demo ↗' },
      { href: 'https://github.com/koppelbw/ItemCatalogue/tree/master/houseview', label: 'View source ↗' },
    ],
  },
  {
    title: 'AZURE-DEVOPS-K8-TERRAFORM',
    blurb:
      'Infrastructure-as-code playground: Terraform-provisioned Kubernetes on Azure, wired to Azure DevOps pipelines for build and deploy. The full loop — cluster up, app shipped, torn down — from code.',
    tags: ['Terraform', 'Kubernetes', 'Azure DevOps', 'IaC'],
    links: [
      { href: 'https://github.com/koppelbw/azure-devops-k8-terraform', label: 'View source ↗' },
    ],
  },
]

export default function Projects() {
  return (
    <>
      <p className="kicker">CH 03 · Off-hours programming</p>
      <h2 className="section">PROJECTS</h2>
      <p className="subtitle">Personal builds, always in production somewhere</p>

      <div className="grid cols-2" style={{ marginTop: 30 }}>
        {PROJECTS.map((p) => (
          <div className="panel" key={p.title}>
            <h3>{p.title}</h3>
            <p className="dim">{p.blurb}</p>
            <p>
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </p>
            <p className="link-row">
              {p.links.map((l) => (
                <a
                  className="link-out"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  key={l.href}
                >
                  {l.label}
                </a>
              ))}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
