import { AppShell, Burger, Grid, Group, Skeleton, Code, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import navbarClasses from './Welcome.module.css';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'

// start - navbar
const data = [
  { link: 'practices', label: 'Kuis Pertemuan ke-2'},
  // { link: '', label: ''},
];
// end - navbar

export function Welcome() {
  // start - header
  const [opened, { toggle }] = useDisclosure();
  // end - header

  // start - navbar
  const [active, setActive] = useState('Kuis Pertemuan ke-2');

  const links = useMemo(
    () =>
      data.map((item) => (
        <a
          className={navbarClasses.link}
          data-active={item.label === active || undefined}
          href={item.link}
          key={item.label}
          onClick={(event) => {
            event.preventDefault();
            setActive(item.label);
          }}
        >
          <span>{item.label}</span>
        </a>
      )),
    [active]
  );  
  // start - navbar

  const headerConfig = useMemo(() => ({
    height: { base: 40, md: 50, lg: 60 },
  }), []);
  
  const navbarConfig = useMemo(() => ({
    width: { base: 150, md: 225, lg: 300 },
    breakpoint: 'sm',
    collapsed: { mobile: !opened },
  }), [opened]);


  return (
    <AppShell header={headerConfig} navbar={navbarConfig} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify='space-between'>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>
            <Link to="/" style={{marginRight: 10, fontFamily: 'monospace', fontStretch: '50%'}}>
              UKM Programming oleh Reihan
            </Link>
            <Code fw={700}>v0.0.1</Code>
          </div>
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <div className={navbarClasses.navbarMain}>
          {links}
        </div>

        <div className={navbarClasses.footer}>
          <a href="#" className={navbarClasses.link} onClick={(event) => event.preventDefault()}>
            <span>Change account</span>
          </a>

          <a href="#" className={navbarClasses.link} onClick={(event) => event.preventDefault()}>
            <span>Logout</span>
          </a>
        </div>
      </AppShell.Navbar>
      <AppShell.Main>
        welkome
      </AppShell.Main>
    </AppShell>
  );
}
