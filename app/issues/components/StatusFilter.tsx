"use client";
import { Status } from "@prisma/client";
import { Button, DropdownMenu } from "@radix-ui/themes";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const StatusFilter = () => {
  const [status, setStatus] = useState("");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size={"3"}>
          {status.length > 0 ? status : "Filter By Status"}
          <RiArrowDropDownLine />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {Object.keys(Status).map((status) => {
          let statusText = "Open";
          switch (status) {
            case Status.CLOSED:
              statusText = "Closed";
              break;
            case Status.IN_PROGRESS:
              statusText = "In Progress";
              break;
          }
          return (
            <DropdownMenu.Item
              key={status}
              onSelect={() => {
                setStatus(statusText);
              }}
            >
              {statusText}
            </DropdownMenu.Item>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default StatusFilter;
