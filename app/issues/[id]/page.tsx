import { Issue } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import React from "react";
import ReactMarkdown from "react-markdown";
import StatusBadge from "../components/StatusBadge";

const EditIssuesPage = async ({ params }: any) => {
  const issue: Issue = (
    await axios.get(`http://localhost:3000/api/issues/${params.id}`)
  ).data;

  if (!issue) {
    return <div>Error!</div>;
  }

  return (
    <div className="max-w-xl space-y-3">
      <Flex justify={"between"}>
        <h1 className="text-3xl font-bold">{issue.title}</h1>
        <StatusBadge status={issue.status} />
      </Flex>
      <Card className="prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default EditIssuesPage;
