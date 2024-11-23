import { Table, ScrollArea, TableData, Anchor } from '@mantine/core';
import { Trash } from 'lucide-react';
import cx from 'clsx';
import { useState } from 'react';
import classes from './MyIdentity.module.css';

interface MyIdentityProps {
  data: Array<{ name: string; npm: number; github: string }>;
}

export default function MyIdentity({ data }: MyIdentityProps) {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.npm}</Table.Td>
      <Table.Td><Anchor target='_blank' href={'//github.com/' + row.github}>github.com/{row.github}</Anchor></Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea style={{maxHeight: 300}} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>Nama Lengkap</Table.Th>
            <Table.Th>NPM</Table.Th>
            <Table.Th>Github</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}