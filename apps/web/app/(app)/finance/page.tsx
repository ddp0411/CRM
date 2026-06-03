import { ModulePage } from "@/components/module-page";
import { modules } from "@/lib/mock-data";

export default function FinancePage() {
  return <ModulePage data={modules.finance} />;
}
