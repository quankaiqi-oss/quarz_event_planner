import type { MetadataRoute } from "next";
import { projects } from "@/src/data/projects";
import { services } from "@/src/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quarz.example.com";
  const routes = ["", "/about", "/services", "/portfolio", "/team", "/contact", "/privacy"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: new Date() })),
    ...projects.filter((project) => project.verified).map((project) => ({ url: `${base}/portfolio/${project.slug}`, lastModified: new Date() })),
  ];
}
