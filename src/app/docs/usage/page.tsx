// filepath: d:\Code\projects\gpt_markdown_docs_src\src\app\docs\usage\page.tsx
import { SimpleImplementation } from "./SimpleImplementation";
import { AdvancedUsage } from "./AdvancedUsage";
import { BestPractices } from "./BestPractices";

export default function UsagePage() {
  return (
    <div className="space-y-6">
      <SimpleImplementation />
      <AdvancedUsage />
      <BestPractices />
    </div>
  );
}
