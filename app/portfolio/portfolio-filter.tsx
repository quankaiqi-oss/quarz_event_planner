"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "../components";
import { projectCategories, projects } from "@/src/data/projects";

export function PortfolioFilter() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All Projects");
  const filtered = useMemo(() => active === "All Projects" ? projects : projects.filter((project) => project.category === active), [active]);

  return <div>
    <div className="filter-row" role="tablist" aria-label="Project filters">
      {projectCategories.map((category) => <button type="button" className={active === category ? "active" : ""} onClick={() => setActive(category)} key={category}>{category}</button>)}
    </div>
    {filtered.length ? <div className="project-grid">{filtered.map((project) => <ProjectCard project={project} key={project.slug} />)}</div> : <p className="empty-state">No verified projects are available in this category yet.</p>}
  </div>;
}
