import { useEffect, useState } from 'react';
import { Modal, TextInput, Button, Text, Flex, Grid, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

const obfuscateText = (text: string) =>
  text.split('').map((char, index) => (
    <span key={index} style={{ userSelect: 'none' }}>
      {char}
    </span>
  ));

export function AnnoyKating() {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const hasReadTask = localStorage.getItem('hasReadTask');
    if (!hasReadTask) {
      setOpened(true);
    }
  }, []);

  const handleClose = () => {
    if (inputValue === 'Saya telah membaca dan menilai tugas') {
      localStorage.setItem('hasReadTask', 'true');
      setOpened(false);
    } else {
      setError('Input tidak sesuai. Silakan masukkan teks yang diminta.');
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {}}
        closeOnClickOutside={false}
        closeOnEscape={false}
        withCloseButton={false}
        centered
        styles={{
          content: {
            userSelect: 'none', // Disable text selection
          },
        }}
      >
        <Flex direction="column" gap="md">
          <Text style={{display: 'none'}}>yeah no</Text>
          <Text>
            {obfuscateText('Mohon baca dan nilai')}
            {' '}
            <Link to='/practices/2024-11-16'>{obfuscateText('tugas pertemuan ke-2 (2024-11-16)')}</Link>
            {' '}
            {obfuscateText('sebelum lanjut :)')}
          </Text>
          <Text>
            {obfuscateText(
              'Untuk menutup modal ini, masukkan teks: "Saya telah membaca dan menilai tugas".'
            )}
          </Text>
          <TextInput
            label={obfuscateText('Masukkan teks')}
            placeholder="Saya telah membaca dan menilai tugas"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.currentTarget.value);
              setError('');
            }}
            error={error}
            required
          />
          <Group justify="right">
            <Button onClick={handleClose}>
              {obfuscateText('Kirim')}
            </Button>
          </Group>
        </Flex>
      </Modal>
    </>
  );
}
