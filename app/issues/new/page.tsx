"use client";
import { Button, Callout, TextField, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { createNewIssueSchema } from "../../createNewIssueSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorText from "@/app/components/ErrorText";
import Loader from "@/app/components/Loader";

type IssueType = z.infer<typeof createNewIssueSchema>;

function NewIssuesPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueType>({
    resolver: zodResolver(createNewIssueSchema),
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        try {
          setLoading(true);
          await axios.post("/api/issues", data);
          setLoading(false);
          router.push("/issues");
        } catch (error) {
          setLoading(false);
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
      <ErrorText>{errors.title?.message}</ErrorText>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMdeReact {...field} />}
      />
      <ErrorText>{errors.description?.message}</ErrorText>
      <Button disabled={isLoading}>Submit {isLoading && <Loader />}</Button>
    </form>
  );
}

export default NewIssuesPage;
