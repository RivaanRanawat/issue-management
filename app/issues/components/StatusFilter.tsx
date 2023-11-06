"use client";
import React from "react";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const StatusFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <Select.Root
      size={"3"}
      defaultValue={searchParams.get("status") || ""}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);

        const query = params.size ? "?" + params.toString() : "";
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || "All"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
    // <DropdownMenu.Root>
    //   <DropdownMenu.Trigger>
    //     <Button variant="soft" size={"3"}>
    //       {status.length > 0 ? status : "Filter By Status"}
    //       <RiArrowDropDownLine />
    //     </Button>
    //   </DropdownMenu.Trigger>
    //   <DropdownMenu.Content>
    //     {Object.keys(Status).map((status) => {
    //       let statusText = "Open";
    //       switch (status) {
    //         case Status.CLOSED:
    //           statusText = "Closed";
    //           break;
    //         case Status.IN_PROGRESS:
    //           statusText = "In Progress";
    //           break;
    //       }
    //       return (
    //         <DropdownMenu.Item
    //           key={status}
    //           onSelect={() => {
    //             setStatus(statusText);
    //           }}
    //         >
    //           {statusText}
    //         </DropdownMenu.Item>
    //       );
    //     })}
    //   </DropdownMenu.Content>
    // </DropdownMenu.Root>
  );
};

export default StatusFilter;
