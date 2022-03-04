import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Task from "./task";
import initaldata from "../data/inital-data";

type ColumnProps = {
  title: string;
  data: {
    id: string;
    content: string;
  };
};

const Column = (props: ColumnProps) => {
  const { title, taskId } = props;
  return (
    <Flex>
      <VStack>
        <Heading>{title}</Heading>
        {taskId.map((taskItem) => (
          <Task key={taskItem} content={taskItem} />
        ))}
      </VStack>
    </Flex>
  );
};

export default Column;
