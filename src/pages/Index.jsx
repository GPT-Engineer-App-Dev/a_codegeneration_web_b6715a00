import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Text, Input, Button, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  // Dummy function to simulate code generation
  const generateCode = () => {
    if (input.trim() === "") {
      toast({
        title: "Error",
        description: "Input can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulating code output based on input
    const generatedCode = `// Generated code based on your input: ${input}\nconsole.log('Hello World!');`;
    setOutput(generatedCode);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Image src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3MTIzODU1OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Code Generation Illustration" boxSize="200px" objectFit="cover" borderRadius="md" />
            <Text fontSize="2xl" fontWeight="bold">
              Welcome to CodeGenX
            </Text>
            <Text fontSize="lg">Enter your request and let our AI generate the code for you.</Text>
            <Box>
              <Input placeholder="Describe the function you need..." size="lg" onChange={(event) => setInput(event.currentTarget.value)} />
              <Button leftIcon={<FaRocket />} colorScheme="teal" variant="solid" size="lg" mt={4} onClick={generateCode}>
                Generate Code
              </Button>
            </Box>
            <Textarea placeholder="Your generated code will appear here..." size="lg" height="200px" value={output} readOnly />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
