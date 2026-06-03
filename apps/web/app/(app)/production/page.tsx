import { ModulePage } from "@/components/module-page";
import { modules } from "@/lib/mock-data";

export default function ProductionPage() {
  return <ModulePage data={modules.production} />;
}
