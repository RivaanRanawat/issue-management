import React, { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";

const ErrorText = ({ children }: PropsWithChildren) => {
  return children == null ? null : (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorText;
