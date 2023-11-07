import { Card } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const IDIssuesLoadingPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <h1 className="text-3xl font-bold">
        <Skeleton width={200} height={24} />
      </h1>
      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default IDIssuesLoadingPage;
