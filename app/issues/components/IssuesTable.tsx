import { Table } from "@radix-ui/themes";
import React from "react";

const IssuesTable = () => {
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
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
