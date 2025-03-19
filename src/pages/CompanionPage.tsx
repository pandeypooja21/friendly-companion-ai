
import { useState } from "react";
import { cn } from "@/lib/utils";
import PageLayout from "@/components/layout/PageLayout";
import CompanionChat from "@/components/companion/CompanionChat";

const CompanionPage = () => {
  return (
    <PageLayout fullHeight className="flex flex-col pt-4 pb-0">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Companion</h1>
      </div>
      
      <div className="flex-1 overflow-hidden rounded-t-2xl bg-companion-muted/50 backdrop-blur-lg shadow-soft">
        <CompanionChat />
      </div>
    </PageLayout>
  );
};

export default CompanionPage;
