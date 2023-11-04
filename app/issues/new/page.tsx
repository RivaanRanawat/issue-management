"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

function NewIssuesPage() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size={"3"}>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea size={"3"} placeholder="Description" />
      <Button>Submit</Button>
    </div>
  );
}

export default NewIssuesPage;
