import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import initialdata from "../data/inital-data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/column";
import initaldata from "../data/inital-data";

type objectType = {
  [key: string]: { id: string; title: string; taskIds: string[] };
};

const Home: NextPage = () => {
  const values: objectType = initialdata.columns;
  return (
    <Box as={Container} maxW={"5xl"}>
      <VStack m={"5%"}>
        <Heading>React drag and drop app!</Heading>

        <Box>{/* <DragDropContext></DragDropContext> */}</Box>
        <Box>
          {Object.entries(values).map(([key, value]) => (
            <Column
              key={key}
              title={value.title}
              data={value.taskIds.map((taskId) => initaldata.tasks[taskId])}
            />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
