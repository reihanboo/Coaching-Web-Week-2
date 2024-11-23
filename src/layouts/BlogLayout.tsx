import { Container, Flex, Group, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import moment from 'moment';
import { Link } from 'react-router-dom';

interface BlogLayoutProps {
  title: string;
  date: string;
  author: string;
  children: React.ReactNode;
}

export function BlogLayout({ title, date, author, children }: BlogLayoutProps) {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <>
      <Group justify='space-between'>
        <Flex>
          <Link to="/practices" style={{marginBottom: 'auto', marginTop: 'auto', marginRight: 10}}>← Back</Link>

          <Text ta="center" size="xl" fw={700}>
            {title}
          </Text>
        </Flex>
        <Flex>
          <Group gap="xs">
            <Text size="xs">{author}</Text>
            <Text size="xs" color="dimmed">•</Text>
            <Popover position="bottom" withArrow shadow="md" opened={opened}>
              <Popover.Target>
                <Text size="xs" color="dimmed" onMouseEnter={open} onMouseLeave={close}>{moment.duration(moment(new Date(date)).diff(moment())).humanize(true)}</Text>
              </Popover.Target>
              <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                <Text size="xs" color="dimmed">{date}</Text>
              </Popover.Dropdown>
            </Popover>
          </Group>
        </Flex>
      </Group>
      {children}
    </>
  );
}
