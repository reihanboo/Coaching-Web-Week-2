import { useState } from 'react';
import { Text } from '@mantine/core';
import { BlogLayout } from '@/layouts/BlogLayout';

export function Practice20241116() {
  const [counter, setCounter] = useState(0);

  return (
    <BlogLayout title='Pertemuan ke-2'>
      <Text size='xl'>pwactice 24-11-16</Text>
    </BlogLayout>
  );
}
