import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import initialdata from "../data/inital-data";
import { DragDropContext } from "react-beautiful-dnd";

const Home: NextPage = () => {
  return (
    <Box as={Container} maxW={"5xl"}>
      <VStack m={"5%"}>
        <Heading>React drag and drop app!</Heading>
        <Box>{/* <DragDropContext></DragDropContext> */}</Box>
      </VStack>
    </Box>
  );
};

export default Home;
