import { useState } from 'react';
import { Container, Center, Paper, Text, Title, Box, Blockquote } from '@mantine/core';

export function Home() {
  const icon = 'q';
  
  return (
    <Container size="md">
      <Center>
        <Blockquote color="blue" iconSize={30} cite="– Forrest Gump" icon={icon} mt="xl">
          Life is like an npm install – you never know what you are going to get.
        </Blockquote>
      </Center>
      <Text></Text>
    </Container>
  );
}
