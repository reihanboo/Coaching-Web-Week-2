import { useState } from 'react';
import { Container, Center, Paper, Text, Title, Box, Blockquote } from '@mantine/core';
import '@mantine/notifications/styles.css';

export function Home() {
  
  return (
      <>
        <Center>
          <Blockquote color="blue" cite="– Forrest Gump" mt="xl">
            Life is like an npm install – you never know what you are going to get.
          </Blockquote>
        </Center>
        <Text></Text>
      </>
  );
}
