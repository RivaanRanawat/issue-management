import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssuesTable from "./components/IssuesTable";
import StatusFilter from "./components/StatusFilter";

function IssuesPage() {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <StatusFilter />
        <Button size={"3"}>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
      <IssuesTable />
    </div>
  );
}

export default IssuesPage;
