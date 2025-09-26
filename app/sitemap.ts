import { Metadata, MetadataRoute } from "next";
import { courses } from "./data/cources";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getCourrce: MetadataRoute.Sitemap = courses.map((cource) => ({
    url: `https://www.miraclecarecampus.lk/course/${cource.id}`,
  }));

  return [
    {
      url: "https://www.miraclecarecampus.lk/about",
    },
    {
      url: "https://www.miraclecarecampus.lk/contact",
    },
    {
      url: "https://www.miraclecarecampus.lk/courses",
    },
    ...getCourrce,
  ];
}
