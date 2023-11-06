import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import StatusFilter from "./components/StatusFilter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingIssuesPage() {
  const issues = ["l", "o", "a", "d"];

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <StatusFilter />
        <Button size={"3"}>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
      <Table.Root variant="surface" size={"3"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell width={"60%"}>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width={"20%"}>
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width={"20%"}>
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue}>
                <Table.RowHeaderCell>
                  <Skeleton />
                  <div className="block md:hidden">
                    <Skeleton />
                  </div>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Skeleton />
                </Table.Cell>
                <Table.Cell>
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
}

export default LoadingIssuesPage;
