import { ComboboxItem, rem, Select, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  let colorScheme = useMantineColorScheme().colorScheme;

  return (
    <Select
        style={{ width: 90 }}
        data={[{value: 'dark', label: 'Dark'}, {value: 'light', label: 'Light'}, {value: 'auto', label: 'System'}]}
        defaultValue={colorScheme}
        allowDeselect={false}
        onChange={(_value) => setColorScheme((_value as 'light' | 'dark' | 'auto') ?? 'dark')}
      />
  );
}
