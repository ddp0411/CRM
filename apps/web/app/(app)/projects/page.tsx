import { ModulePage } from "@/components/module-page";
import { modules } from "@/lib/mock-data";

export default function ProjectsPage() {
  return <ModulePage data={modules.projects} />;
}
