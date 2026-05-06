"use client";

import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Command,
  Database,
  GitFork,
  Globe2,
  Languages,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Star,
  Workflow
} from "lucide-react";
import { useMemo, useState } from "react";

const repoBase =
  "https://github.com/tentenco/awesome-agent-skills-for-solo-founders";

const languages = [
  {
    label: "English",
    locale: "Main",
    note: "Canonical source",
    href: `${repoBase}/blob/main/README.md`
  },
  {
    label: "简体中文",
    locale: "zh-CN",
    note: "Simplified Chinese",
    href: `${repoBase}/blob/main/README.zh-CN.md`
  },
  {
    label: "繁體中文",
    locale: "zh-TW",
    note: "Taiwan Traditional Chinese",
    href: `${repoBase}/blob/main/README.zh-TW.md`
  },
  {
    label: "日本語",
    locale: "ja",
    note: "Japanese",
    href: `${repoBase}/blob/main/README.ja.md`
  }
];

const tracks = [
  {
    id: "diagnostics",
    tier: "Tier 1",
    label: "Business diagnostics",
    count: 11,
    signal: "Idea validation",
    color: "blue"
  },
  {
    id: "accelerators",
    tier: "Tier 2",
    label: "YC / accelerators",
    count: 4,
    signal: "Startup method",
    color: "yellow"
  },
  {
    id: "ip",
    tier: "Tier 3",
    label: "AI people IP",
    count: 5,
    signal: "Product judgment",
    color: "green"
  },
  {
    id: "gtm",
    tier: "Tier 4",
    label: "GTM / launch",
    count: 7,
    signal: "Distribution",
    color: "red"
  },
  {
    id: "team",
    tier: "Tier 5",
    label: "Team playbooks",
    count: 17,
    signal: "Execution roles",
    color: "blue"
  },
  {
    id: "infra",
    tier: "Tier 6",
    label: "Agent infrastructure",
    count: 37,
    signal: "Operating layer",
    color: "green"
  }
];

const repos = [
  {
    name: "hermes-agent",
    owner: "NousResearch",
    track: "infra",
    stars: "133.9K",
    stage: "Operate",
    href: "https://github.com/NousResearch/hermes-agent",
    note: "Personal AI agent that grows with the user."
  },
  {
    name: "claude-mem",
    owner: "thedotmack",
    track: "infra",
    stars: "72.4K",
    stage: "Operate",
    href: "https://github.com/thedotmack/claude-mem",
    note: "Captures, compresses, and reinjects Claude Code context."
  },
  {
    name: "learn-claude-code",
    owner: "shareAI-lab",
    track: "infra",
    stars: "58.2K",
    stage: "Build",
    href: "https://github.com/shareAI-lab/learn-claude-code",
    note: "Claude Code-like agent harness tutorial built from shell primitives."
  },
  {
    name: "oh-my-openagent",
    owner: "code-yeongyu",
    track: "infra",
    stars: "55.9K",
    stage: "Build",
    href: "https://github.com/code-yeongyu/oh-my-openagent",
    note: "Lightweight agent harness for local and CLI-based agent work."
  },
  {
    name: "cherry-studio",
    owner: "CherryHQ",
    track: "infra",
    stars: "45K",
    stage: "Operate",
    href: "https://github.com/CherryHQ/cherry-studio",
    note: "AI productivity studio with autonomous agents and assistants."
  },
  {
    name: "agents",
    owner: "wshobson",
    track: "team",
    stars: "34.8K",
    stage: "Build",
    href: "https://github.com/wshobson/agents",
    note: "Claude Code automation and multi-agent orchestration."
  },
  {
    name: "CopilotKit",
    owner: "CopilotKit",
    track: "infra",
    stars: "30.6K",
    stage: "Build",
    href: "https://github.com/CopilotKit/CopilotKit",
    note: "Frontend stack for agents and generative UI."
  },
  {
    name: "activepieces",
    owner: "activepieces",
    track: "infra",
    stars: "22.1K",
    stage: "Automate",
    href: "https://github.com/activepieces/activepieces",
    note: "AI workflow automation, agents, and MCP ecosystem."
  },
  {
    name: "scientific-agent-skills",
    owner: "K-Dense-AI",
    track: "diagnostics",
    stars: "20.1K",
    stage: "Research",
    href: "https://github.com/K-Dense-AI/scientific-agent-skills",
    note: "Research, analysis, finance, engineering, and writing skills."
  },
  {
    name: "Agent-Reach",
    owner: "Panniantong",
    track: "diagnostics",
    stars: "18.8K",
    stage: "Research",
    href: "https://github.com/Panniantong/Agent-Reach",
    note: "Read and search internet sources across social and developer platforms."
  },
  {
    name: "baoyu-skills",
    owner: "JimLiu",
    track: "ip",
    stars: "17.1K",
    stage: "Learn",
    href: "https://github.com/JimLiu/baoyu-skills",
    note: "Applied AI workflow skill collection."
  },
  {
    name: "seo-geo-claude-skills",
    owner: "aaron-he-zhu",
    track: "gtm",
    stars: "1.5K",
    stage: "Launch",
    href: "https://github.com/aaron-he-zhu/seo-geo-claude-skills",
    note: "SEO and GEO skills for research, content, audits, and rank tracking."
  }
];

const roadmap = [
  ["Validate", "Market study, interviews, problem proof", "founder-playbook"],
  ["Scope", "PRD, MVP boundaries, technical direction", "vibe-coding"],
  ["Build", "Agent teams, memory, sandboxes, orchestration", "agents"],
  ["Sharpen", "Positioning, quality checks, user feedback", "research skills"],
  ["Launch", "GTM, SEO, GEO, deployment, content loops", "gtm skills"]
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("all");

  const filteredRepos = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return repos.filter((repo) => {
      const matchesTrack =
        selectedTrack === "all" || repo.track === selectedTrack;
      const matchesQuery =
        normalized.length === 0 ||
        [repo.name, repo.owner, repo.note, repo.stage]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return matchesTrack && matchesQuery;
    });
  }, [query, selectedTrack]);

  const selectedTrackLabel =
    selectedTrack === "all"
      ? "All tracks"
      : tracks.find((track) => track.id === selectedTrack)?.label;

  return (
    <div className="product-shell">
      <aside className="sidebar">
        <a className="brand" href="/">
          <img
            alt="Tenten AI"
            className="brand-logo"
            src="https://s4.tenten.co/tentenai-logo-blk.svg"
          />
          <span>
            <strong>Skills KB</strong>
            <small>Tenten AI</small>
          </span>
        </a>

        <nav className="side-nav" aria-label="Dashboard navigation">
          <a className="active" href="#overview">
            <LayoutDashboard size={18} />
            Overview
          </a>
          <a href="#catalog">
            <Database size={18} />
            Catalog
          </a>
          <a href="#languages">
            <Languages size={18} />
            Languages
          </a>
          <a href="#roadmap">
            <Workflow size={18} />
            Roadmap
          </a>
        </nav>

        <div className="sidebar-note">
          <ShieldCheck size={18} />
          <span>Canonical catalog: 81 curated repos across 6 founder tracks.</span>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <span className="status-pill">Production knowledge base</span>
            <h1>Agent skills for solo founders</h1>
          </div>
          <div className="top-actions">
            <a className="ghost-button" href={repoBase}>
              <GitFork size={17} />
              GitHub
            </a>
            <a className="primary-button" href={repoBase}>
              Open catalog
              <ArrowUpRight size={17} />
            </a>
          </div>
        </header>

        <section id="overview" className="hero-grid">
          <div className="hero-panel">
            <div className="hero-copy">
              <Command className="hero-icon" size={28} />
              <p className="eyebrow">0 to 1 operating system</p>
              <h2>
                A curated AI stack for research, product, engineering, launch,
                and agent operations.
              </h2>
              <p>
                The repository is structured as a practical founder dashboard:
                evaluate the catalog by language, lifecycle stage, operating
                track, and execution role.
              </p>
            </div>
            <div className="hero-metrics">
              <Metric value="81" label="Repos curated" />
              <Metric value="6" label="Tracks mapped" />
              <Metric value="4" label="Languages live" />
            </div>
          </div>

          <div className="signal-panel">
            <div className="panel-head">
              <span>Collection health</span>
              <CheckCircle2 size={18} />
            </div>
            <div className="score-ring" aria-label="Collection quality score">
              <strong>98</strong>
              <span>ready</span>
            </div>
            <ul className="check-list">
              <li>Multilingual README set linked</li>
              <li>Production Vercel dashboard active</li>
              <li>Track counts match source catalog</li>
            </ul>
          </div>
        </section>

        <section className="track-grid" aria-label="Track overview">
          {tracks.map((track) => (
            <button
              className={`track-card ${track.color} ${
                selectedTrack === track.id ? "selected" : ""
              }`}
              key={track.id}
              onClick={() =>
                setSelectedTrack(selectedTrack === track.id ? "all" : track.id)
              }
              type="button"
            >
              <span>{track.tier}</span>
              <strong>{track.label}</strong>
              <small>{track.signal}</small>
              <em>{track.count}</em>
            </button>
          ))}
        </section>

        <section id="catalog" className="catalog-panel">
          <div className="catalog-head">
            <div>
              <p className="eyebrow">Repo explorer</p>
              <h2>{selectedTrackLabel}</h2>
              <span>
                Search the highlighted subset. The full list lives in the
                multilingual README catalog.
              </span>
            </div>
            <label className="search-box">
              <Search size={18} />
              <input
                aria-label="Search repositories"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search skill, owner, stage..."
                value={query}
              />
            </label>
          </div>

          <div className="table-shell">
            <div className="table-row table-header">
              <span>Repository</span>
              <span>Track</span>
              <span>Stage</span>
              <span>Stars</span>
            </div>
            {filteredRepos.map((repo) => {
              const track = tracks.find((item) => item.id === repo.track);
              return (
                <a className="table-row" href={repo.href} key={repo.href}>
                  <span className="repo-cell">
                    <strong>{repo.name}</strong>
                    <small>
                      {repo.owner} · {repo.note}
                    </small>
                  </span>
                  <span>{track?.label}</span>
                  <span>{repo.stage}</span>
                  <span className="stars">
                    <Star size={15} />
                    {repo.stars}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section id="languages" className="split-section">
          <div className="section-copy">
            <p className="eyebrow">Language coverage</p>
            <h2>One knowledge base, four entry points.</h2>
            <p>
              English remains the canonical source. Localized files preserve the
              same catalog structure so teams can evaluate and share the stack
              across markets.
            </p>
          </div>
          <div className="language-list">
            {languages.map((language) => (
              <a className="language-row" href={language.href} key={language.label}>
                <Globe2 size={18} />
                <span>
                  <strong>{language.label}</strong>
                  <small>{language.note}</small>
                </span>
                <em>{language.locale}</em>
              </a>
            ))}
          </div>
        </section>

        <section id="roadmap" className="roadmap-panel">
          <div className="section-copy compact">
            <p className="eyebrow">Founder workflow</p>
            <h2>Six weeks from signal to launch.</h2>
          </div>
          <div className="roadmap">
            {roadmap.map(([title, body, tool], index) => (
              <div className="step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{body}</p>
                <small>{tool}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-panel">
          <BookOpen size={22} />
          <div>
            <h2>Use the repository as the source of truth.</h2>
            <p>
              The dashboard is a polished entry point. The GitHub repo contains
              the complete 81-repo multilingual catalog and contribution path.
            </p>
          </div>
          <a className="primary-button" href={repoBase}>
            View README
            <ArrowUpRight size={17} />
          </a>
        </section>
      </main>
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
