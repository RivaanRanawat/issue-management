"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface NewIssueForm {
  title: string;
  description: string;
}

function NewIssuesPage() {
  const { register, control, handleSubmit } = useForm<NewIssueForm>();
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          router.push("/issues");
        } catch (error) {
          setError("An unexpected error occurred!");
        }
      })}
    >
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <h1 className="text-3xl font-bold">Create New Issue</h1>
      <TextField.Root size={"3"}>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMdeReact {...field} />}
      />
      <Button>Submit</Button>
    </form>
  );
}

export default NewIssuesPage;
