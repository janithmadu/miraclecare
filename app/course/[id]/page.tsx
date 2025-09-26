import { courses } from "../../data/cources";
import CourcesComponet from "@/components/CourcesComponet";

export async function generateStaticParams({
  params,
}: {
  params: { id: string };
}) {
  const course = courses.find((c) => c.id === params.id);
  return course ? [{ id: course.id }] : [];
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  return <CourcesComponet course={course} />;
}
