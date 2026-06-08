# Lewis David Creelman

**Software Engineer**

- **Location:** Belfast, Northern Ireland
- **Email:** [LewisIsWorking@gmail.com](mailto:LewisIsWorking@gmail.com)
- **LinkedIn:** [lewis-creelman](https://www.linkedin.com/in/lewis-creelman-05915511a/)
- **GitHub:** [LewisIsWorking](https://github.com/LewisIsWorking)

---

## Professional Summary

Software engineer with around 4 years' full-time commercial experience at Liberty IT (Liberty
Mutual), following a year-long industrial placement with the same company. I build internal
back-end APIs in TypeScript, JavaScript and GraphQL (with some Java) on AWS that serve hundreds
of thousands of insurance quotes per day, and outside of work I independently design and ship
large cross-platform applications in C# / .NET. Comfortable owning features end to end —
designing the approach, writing the code, testing it, and seeing it through to release — and a
strong advocate for clean, event-driven architecture and SOLID design. 

---

## Technical Skills

| Area | Technologies |
|------|--------------|
| **Languages** | TypeScript, JavaScript, Java, C#, Ruby, SQL |
| **Backend & APIs** | Node.js, GraphQL, REST, Java / Spring Boot, ASP.NET Core; data lake / data warehouse |
| **Cloud & DevOps** | AWS (primary), Azure (auth); GitHub Actions CI/CD; Git PR workflow; Netlify; automated semantic versioning; PowerShell |
| **Cross-platform / UI** | .NET 10, Uno Platform, .NET MAUI, Avalonia, WinUI, WebAssembly, SignalR *(personal projects)* |
| **Architecture & practices** | Event-driven messaging, DI / MVVM, SOLID, clean architecture |
| **Testing** | Jest (JS); NUnit, FluentAssertions, NSubstitute (.NET); unit / integration / UI tests |
| **Other** | AI-assisted development (Claude Code), JetBrains Rider, Visual Studio |

---

## Professional Experience

### Associate Software Engineer — Liberty IT (Liberty Mutual)
*Belfast · August 2022 – Present*

- Build and maintain internal **back-end APIs** in TypeScript, JavaScript and GraphQL (Node.js)
  that serve **hundreds of thousands of insurance quotes per day** on the **Quoting Platform** team.
- Develop and operate services on **AWS** (with Azure for authentication), taking features from
  design through implementation, code review, and release.
- Contributed to the team's migration of CI/CD from **Bamboo to GitHub Actions** (now used for
  100% of pipelines), standardising and simplifying the release process.
- Maintain service quality with **Jest** unit tests across the team's APIs.

### Software Engineering Placement — Liberty IT (Liberty Mutual)
*Belfast · 2020 – 2021 · placement year during the BEng*

- Worked on a **Java / Spring Boot** application within a **data lake / data warehouse** team.
- Built a **batch-process calendar view** that internal teams still use today.
- Earned a full year of commercial experience before final year, and was invited back as a
  full-time engineer after graduating.

---

## Selected Projects

### Cross-Platform Application Suite *(personal project)*
*C# · .NET 10 · Uno Platform · ASP.NET Core · SignalR · WebAssembly*

A live, cross-platform app (desktop + browser/WASM) built and maintained solo as a **38-project
.NET solution**, demonstrating end-to-end ownership of a non-trivial codebase:

- Designed an **event-driven architecture** using the CommunityToolkit `IMessenger` for
  decoupled cross-component communication, with a DI/MVVM structure throughout.
- Built a **real-time backend** (ASP.NET Core + SignalR) for chat, news, and directory features,
  secured with JWT authentication and message encryption.
- Built a **complex, data-driven domain engine** driving a multi-step configuration workflow over
  a large structured rules/content catalogue, with validation and offline persistence.
- Targets **desktop and WebAssembly** from one codebase; deployed continuously to production
  via **Netlify** with automated semantic versioning and a PR-based workflow.
- Enforced strict engineering standards (200-line file limit, no partial classes, SOLID),
  backed by **unit, integration, and UI test** projects.

### Event-Sourced Simulation Engine *(personal project)*
*C# · .NET · command → event (event-sourcing / CQRS) architecture*

- Designed a deterministic, **event-sourced engine** that separates command handling from state
  projection, giving fully reproducible state and straightforward unit testing.
- Applied **CQRS-style** command/event modelling — patterns that transfer directly to
  event-driven backend services.

---

## Hackathons & Awards

- **Winner — Quoting Platform Hackathon, Liberty IT.** Built an **observability platform
  integrated with GitHub Actions** that surfaced which builds were deployed across each
  environment, giving the team clear deployment visibility; have since competed in the
  department hackathon twice.
- **Liberty IT "Ignite" internal hackathons** — took part 2–3 times, prototyping internal
  tools and product concepts.
- **Queen's University Belfast Hackathon** (2019) — built a **Ruby** application supporting
  farmers' mental health, addressing rural isolation and depression.

---

## Education

### BEng (Hons) Software Engineering — 2:1
*Queen's University Belfast · 2018 – 2022 (4-year degree including a year-long industrial placement)*

### Further Education
*Coleraine Technical College · 2016 – 2018*

- BTEC Level 3 Extended Diploma in ICT — **D\*D\*D\*** (equivalent to A\*A\*A\* at A-Level)

---

## Professional Development

- **ShipItCon, Dublin (2025)** — software engineering conference; sessions on AI-native
  engineering, micro-frontends, monolith decomposition, and chaos engineering.
