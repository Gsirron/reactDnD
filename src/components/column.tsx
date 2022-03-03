import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Task from "./task";

type ColumnProps = {
  title: string;
  taskIds: any[];
};

const Column = (props: ColumnProps) => {
  const { title, taskIds } = props;
  return (
    <Flex>
      <VStack>
        <Heading>{title}</Heading>
        {taskIds.map((taskItem) => (
          <Task key={taskItem.content} content={taskItem.content} />
        ))}
      </VStack>
    </Flex>
  );
};

export default Column;
