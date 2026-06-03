import { ModulePage } from "@/components/module-page";
import { modules } from "@/lib/mock-data";

export default function LeadsPage() {
  return <ModulePage data={modules.leads} />;
}
