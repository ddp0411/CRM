import { ModulePage } from "@/components/module-page";
import { modules } from "@/lib/mock-data";

export default function WarehousePage() {
  return <ModulePage data={modules.warehouse} />;
}
