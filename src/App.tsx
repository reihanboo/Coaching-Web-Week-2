import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Notifications />
      <Router />
    </MantineProvider>
  );
}
