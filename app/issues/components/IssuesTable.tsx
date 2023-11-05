import { Issue } from "@prisma/client";
import { Table, Text } from "@radix-ui/themes";
import axios from "axios";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import StatusBadge from "./StatusBadge";

const IssuesTable = async () => {
  const issues: Issue[] = (await axios.get("http://localhost:3000/api/issues"))
    .data;

  return (
    <Table.Root variant="surface" size={"3"}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell width={"60%"}>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={"20%"}>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={"20%"}>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => {
          // Format the date using date-fns
          const formattedDate = format(
            new Date(issue.createdAt),
            "EEE, MMM d yyyy",
            {
              useAdditionalWeekYearTokens: true,
            }
          );

          return (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
              <Table.Cell>
                <StatusBadge status={issue.status} />{" "}
              </Table.Cell>
              <Table.Cell>{formattedDate}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
