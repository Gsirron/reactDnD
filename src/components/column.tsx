import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type ColumnProps = {
  title: string;

  taskIds: string[];
};

const Column = (props: ColumnProps) => {
  return (
    <Flex>
      <Box></Box>
    </Flex>
  );
};

export default Column;
