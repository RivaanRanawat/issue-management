import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssuesPage() {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}

export default IssuesPage;
