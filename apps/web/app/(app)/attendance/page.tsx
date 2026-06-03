import { ModulePage } from "@/components/module-page";
import { modules } from "@/lib/mock-data";

export default function AttendancePage() {
  return <ModulePage data={modules.attendance} />;
}
