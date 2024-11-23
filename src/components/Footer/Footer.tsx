import { ActionIcon, Image, Code, Container, Group } from '@mantine/core';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

export function Footer() {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div>
          <Link to="/" className={classes.brand}>
            UKM Programming oleh Reihan
          </Link>
          <Code fw={700} ml={5}>
            v0.0.2
          </Code>
        </div>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon onClick={() => openInNewTab('https://github.com/reihanboo')} size="lg" color="gray" variant="subtle">
            <Github size={18} strokeWidth={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
