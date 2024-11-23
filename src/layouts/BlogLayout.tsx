import { Container, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

interface BlogLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function BlogLayout({ title, children }: BlogLayoutProps) {
  return (
    <>
      <Container size="md" mt="md">
        <Group>
        <Link to="/practices">← Back</Link>

          <Text ta="center" size="xl" fw={700}>
            {title}
          </Text>
        </Group>
        {children}
      </Container>
    </>
  );
}
