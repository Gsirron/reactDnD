import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type TaskProps = {
  content: string;
};

const Task = (props: TaskProps) => {
  const { content } = props;
  return (
    <Box>
      <Heading>{content}</Heading>
    </Box>
  );
};

export default Task;
