import { useDisclosure } from '@mantine/hooks';
import { Popover, Card, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classes from './ArticleCard.module.css';

export function ArticleCard({
  margin = 0,
  title = 'Untitled',
  author = 'Unknown',
  date = '2022/04/01',
  url = '#',
}: {
  margin?: number;
  title?: string;
  author?: string;
  date?: string;
  url?: string;
}) {
  const [opened, { close, open }] = useDisclosure(false);
  const humanizedDate = moment.duration(moment(new Date(date)).diff(moment())).humanize(true);

  return (
    <Card
      withBorder
      radius="md"
      p={0}
      className={classes.card}
      style={{ marginBottom: margin }}
    >
      <Group className={classes.body} justify='space-between'>
        <Link to={url} className={classes.title}>
          {title}
        </Link>
        <Group gap="xs">
          <Text size="xs">{author}</Text>
          <Text size="xs" color="dimmed">•</Text>
          <Popover position="right" withArrow shadow="md" opened={opened}>
            <Popover.Target>
              <Text size="xs" color="dimmed" onMouseEnter={open} onMouseLeave={close}>{humanizedDate}</Text>
            </Popover.Target>
            <Popover.Dropdown style={{ pointerEvents: 'none' }}>
              <Text size="xs" color="dimmed">{date}</Text>
            </Popover.Dropdown>
          </Popover>
          
        </Group>
      </Group>
    </Card>
  );
}
