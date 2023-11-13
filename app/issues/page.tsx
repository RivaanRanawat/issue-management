import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssuesTable from "./components/IssuesTable";
import StatusFilter from "./components/StatusFilter";
import Pagination from "./components/Pagination";

function IssuesPage({ searchParams }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <StatusFilter />
        <Button size={"3"}>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
      <IssuesTable searchParams={searchParams} />
      <Pagination
        currentPage={parseInt(searchParams.page) || 1}
        noOfIssues={30}
      />
    </div>
  );
}

export default IssuesPage;
