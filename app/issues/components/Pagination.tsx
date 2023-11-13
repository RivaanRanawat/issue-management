"use client";
import React from "react";
import { Button, Flex, Text } from "@radix-ui/themes";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  noOfIssues,
}: {
  currentPage: number;
  noOfIssues: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(noOfIssues / 10);

  const changePageHandler = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex align="center" gap="2" justify="end">
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePageHandler(currentPage - 1)}
      >
        <AiOutlineLeft />
      </Button>
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changePageHandler(currentPage + 1)}
      >
        <AiOutlineRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
