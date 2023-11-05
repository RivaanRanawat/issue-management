import { Badge } from "@radix-ui/themes";
import React from "react";
import { Status } from "@prisma/client";

const StatusBadge = ({ status }: { status: Status }) => {
  let text = "Open";
  let color: "orange" | "green" | "sky" = "orange";
  switch (status) {
    case Status.CLOSED:
      text = "Closed";
      color = "green";
      break;
    case Status.IN_PROGRESS:
      text = "In Progress";
      color = "sky";
      break;
  }

  return (
    <Badge size={"2"} color={color}>
      {text}
    </Badge>
  );
};

export default StatusBadge;
