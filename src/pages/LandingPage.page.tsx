import { useEffect, useState } from 'react';
import { Modal, TextInput, Button, Text } from '@mantine/core';
import { Header } from '../components/Header/Header';
import { Home } from '../components/Home/Home';
import { Link } from 'react-router-dom';

// Helper function to obfuscate text by wrapping each character in a <span>
const obfuscateText = (text) =>
  text.split('').map((char, index) => (
    <span key={index} style={{ userSelect: 'none' }}>
      {char}
    </span>
  ));

export function LandingPage() {
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
    <div>
      <Header />
      <Home />

      <Modal
        opened={opened}
        onClose={() => {}}
        closeOnClickOutside={false}
        closeOnEscape={false}
        withCloseButton={false}
        centered
        styles={{
          modal: {
            userSelect: 'none', // Disable text selection
          },
        }}
      >
        <Text style={{display: 'none'}}>yeah no</Text>
        <Text>
          {obfuscateText('Mohon baca dan nilai')}
          {' '}
          <Link to='practices'>{obfuscateText('tugas pertemuan 2024-11-16')}</Link>
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
          mt="md"
        />
        <Button onClick={handleClose} mt="md">
          {obfuscateText('Kirim')}
        </Button>
      </Modal>
    </div>
  );
}
