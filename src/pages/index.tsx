import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import initialdata from "../data/inital-data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/column";

const Home: NextPage = () => {
  let state: any[] = initialdata;
  return (
    <Box as={Container} maxW={"5xl"}>
      <VStack m={"5%"}>
        <Heading>React drag and drop app!</Heading>

        <Box>{/* <DragDropContext></DragDropContext> */}</Box>
        <Box>
          {state.map((columnItem) => (
            <Column
              key={columnItem.title}
              title={columnItem.title}
              taskIds={columnItem.taskIds}
            />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
