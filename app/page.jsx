const repoBase =
  "https://github.com/tentenco/awesome-agent-skills-for-solo-founders";

const languages = [
  {
    label: "English",
    note: "Main language and canonical source.",
    href: `${repoBase}/blob/main/README.md`
  },
  {
    label: "简体中文",
    note: "面向中文创始人的简体中文版本。",
    href: `${repoBase}/blob/main/README.zh-CN.md`
  },
  {
    label: "繁體中文（台灣）",
    note: "為台灣繁體中文使用者整理的版本。",
    href: `${repoBase}/blob/main/README.zh-TW.md`
  },
  {
    label: "日本語",
    note: "日本語で全体像を確認できます。",
    href: `${repoBase}/blob/main/README.ja.md`
  }
];

const tracks = [
  ["Tier 1", "Business diagnostics core", 11],
  ["Tier 2", "YC / startup accelerators", 4],
  ["Tier 3", "Top AI people IP", 5],
  ["Tier 4", "GTM / marketing / launch", 7],
  ["Tier 5", "Team / role playbooks", 17],
  ["Tier 6", "Skill discovery / infrastructure", 37]
];

const repos = [
  {
    name: "dbskill",
    note: "Business diagnostics and market analysis prompt library.",
    stars: "4.1K",
    href: "https://github.com/dontbesilent2025/dbskill"
  },
  {
    name: "agents",
    note: "Claude Code automation and multi-agent orchestration.",
    stars: "34.8K",
    href: "https://github.com/wshobson/agents"
  },
  {
    name: "claude-mem",
    note: "Memory plugin that captures, compresses, and reinjects context.",
    stars: "72.4K",
    href: "https://github.com/thedotmack/claude-mem"
  },
  {
    name: "CopilotKit",
    note: "Frontend stack for agents and generative UI.",
    stars: "30.6K",
    href: "https://github.com/CopilotKit/CopilotKit"
  },
  {
    name: "activepieces",
    note: "AI workflow automation, agents, and MCP ecosystem.",
    stars: "22.1K",
    href: "https://github.com/activepieces/activepieces"
  },
  {
    name: "seo-geo-claude-skills",
    note: "SEO and GEO skills for research, content, audits, and rank tracking.",
    stars: "1.5K",
    href: "https://github.com/aaron-he-zhu/seo-geo-claude-skills"
  }
];

const roadmap = [
  [
    "Validate the market",
    "Use founder-playbook, dbskill, senior-analyst, and research skills to test the problem."
  ],
  [
    "Write the PRD",
    "Turn findings into requirements, user stories, MVP scope, and technical direction."
  ],
  [
    "Build with agents",
    "Use agent teams, memory, sandboxes, and orchestration to ship the first working product."
  ],
  [
    "Validate product",
    "Use analytics, user feedback, and competitive research to sharpen positioning."
  ],
  [
    "Launch and grow",
    "Apply GTM, SEO, GEO, content, quality, and deployment workflows."
  ]
];

export default function Page() {
  return (
    <div className="shell">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark">AI</span>
          <span>Awesome Agent Skills</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#languages">Languages</a>
          <a href="#tracks">Tracks</a>
          <a href="#roadmap">Roadmap</a>
          <a className="button primary" href={repoBase}>
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">Solo Founder Operating Stack</div>
            <h1>
              81 agent skills, playbooks, and AI infrastructure repos for
              shipping from idea to launch.
            </h1>
            <p className="lede">
              A multilingual knowledge base for founders who want a practical
              AI-native workflow across research, validation, product,
              engineering, GTM, and agent infrastructure.
            </p>
            <div className="actions">
              <a className="button primary" href={repoBase}>
                Open the repository
              </a>
              <a className="button" href="#languages">
                Choose language
              </a>
            </div>
          </div>

          <aside className="dashboard" aria-label="Repository overview">
            <div className="dash-head">
              <span>Knowledge Base</span>
              <span>2026</span>
            </div>
            <div className="metric-grid">
              <Metric value="81" label="Curated repos" />
              <Metric value="6" label="Execution tracks" />
              <Metric value="4" label="Languages" />
              <Metric value="0→1" label="Founder workflow" />
            </div>
            <div className="track-strip">
              {tracks.map(([tier, label, count]) => (
                <div className="track" key={tier}>
                  <b>{tier}</b>
                  <span>{label}</span>
                  <em>{count}</em>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="languages" className="section">
          <h2>Read in your preferred language.</h2>
          <p className="section-intro">
            English is the canonical version. Localized editions keep the same
            catalog structure so teams can share one source of truth across
            regions.
          </p>
          <div className="language-grid">
            {languages.map((language) => (
              <a className="language" href={language.href} key={language.label}>
                <strong>{language.label}</strong>
                <span>{language.note}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="tracks" className="section">
          <h2>Built around founder execution, not tool collecting.</h2>
          <p className="section-intro">
            The repository is organized by the jobs a solo founder needs to get
            done: validate, design, build, automate, launch, and compound
            execution quality.
          </p>
          <div className="repo-grid">
            {repos.map((repo) => (
              <a className="repo" href={repo.href} key={repo.name}>
                <strong>{repo.name}</strong>
                <span>{repo.note}</span>
                <span className="stars">{repo.stars} stars</span>
              </a>
            ))}
          </div>
        </section>

        <section id="roadmap" className="section">
          <h2>A practical 6-week path from idea to launch.</h2>
          <p className="section-intro">
            Use the catalog as a stack, not a shopping list. Start with
            validation, then move into PRD, build, product proof, and growth
            loops.
          </p>
          <div className="roadmap">
            {roadmap.map(([title, body]) => (
              <div className="step" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>

          <div className="band">
            <h2>Maintained by Tenten AI.</h2>
            <p>
              From zero to deployed, measured in days. Making AI part of
              business operations for founders and teams that need practical
              execution.
            </p>
            <div className="actions">
              <a className="button primary" href="https://tentenai.com/">
                Visit Tenten AI
              </a>
              <a className="button" href={repoBase}>
                Contribute on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Built with Tenten AI. Open source under MIT License.</span>
      </footer>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
