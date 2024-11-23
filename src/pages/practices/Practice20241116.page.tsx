import { useEffect, useState } from 'react';
import { Blockquote, Button, Code, Divider, Flex, Space, Text, TextInput, Highlight, Image, InputBase } from '@mantine/core';
import { BlogLayout } from '@/layouts/BlogLayout';
import { TitleHyperlink } from '@/components/TitleHyperlink/TitleHyperlink';
import MyIdentity from '@/components/MyIdentity/MyIdentity';
import { Quote } from 'lucide-react';
import { IMaskInput } from 'react-imask';

export function Practice20241116() {
  const [counter, setCounter] = useState(0);

  {/* untuk tabel (duh) */}
  const [tableData, setTableData] = useState([
    {
      name: 'M Reihan Fahlevi',
      npm: 2428270001,
      github: 'reihanboo',
    }
  ]);

  {/* untuk form Create */}
  {/* shouldve used useform but fuck it we ball */}
  const [fullName, setFullName] = useState('');
  const [npm, setNpm] = useState('');
  const [github, setGithub] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [npmError, setNpmError] = useState('');

  useEffect(() => {
    if (counter > 0) {
      document.title = `Counter: ${counter}`;
    } else {
      document.title = 'UKM Programming - Pertemuan ke-2';
    }
  }, [counter]);

  const handleCreate = () => {
    if (!fullName || !npm) {
      // ew
      if (!fullName) setFullNameError('Semua input perlu diisi... karena gaada edit :)');
      if (!npm) setNpmError('Semua input perlu diisi... karena gaada edit :) (ya kecuali github soalnya kan cuman demo)');
      return;
    }

    if (npm.length < 10) {
      setNpmError('Nomor NPM gaada yang dibawah 10 angka, sial.');
      return;
    }

    setFullNameError('');
    setNpmError('');

    // wut happened to push, react?
    setTableData(oldArray => [...oldArray, { name: fullName, npm: parseInt(npm), github: github }]);

    setFullName('');
    setNpm('');
    setGithub('');
  }

  return (
    // manual dates are unironically the most cancerous thing i've ever typed
    <BlogLayout title='Pertemuan ke-2' author='M Reihan Fahlevi' date='2024-11-16'>
      
      <Divider my="md" />

      <TitleHyperlink title="Counter" hyperref="counter" />

      <Flex gap={5}>
        <Button onClick={() => { setCounter(counter+1) }}>
          Add a number ({counter})
        </Button>
        <Button color='red' onClick={() => { setCounter(0) }}>
          Reset counter
        </Button>
      </Flex>
      <Text size="sm" c={'dimmed'} style={{ marginTop: 'auto' }}>
        * Menekan tombol reset juga me-reset <Code>document.title</Code>.
      </Text>

      <Space h={'md'} />

      <TitleHyperlink title="Komponen Identitas" hyperref="myidentity" />

      <MyIdentity data={tableData} />

      <Space h={'md'} />

      <TitleHyperlink title="Menampilkan Input" hyperref="crud" />

      <Blockquote p={12} m={10} color="blue" cite="– Pertanyaan ke-empat pada kuis minggu ke-dua" icon={<Quote size={20} />} mt="xl">
        <Highlight highlight={"(boleh dengan cara apapun)"}>Membuat form yang memiliki input nama dan menampilkan nama di web (boleh dengan cara apapun).</Highlight>
      </Blockquote>

      <TextInput
          label={'Nama Lengkap'}
          placeholder="Masukkan nama lengkap"
          onChange={(event) => {
            setFullName(event.currentTarget.value);
          }}
          error={fullNameError}
          value={fullName}
        />

      <InputBase 
          component={IMaskInput} 
          mask="0000000000" 
          placeholder="Masukkan nomor NPM"
          description="maks. 10 angka; min. 10 angka; hanya bisa angka; troll = ban" 
          label="NPM"
          onChange={(event) => setNpm(event.currentTarget.value)}
          error={npmError}
          value={npm}
        />
      
      <TextInput
          label={'Github'}
          placeholder="Masukkan username Github"
          onChange={(event) => setGithub(event.currentTarget.value)}
          value={github}
        />

      <Button onClick={handleCreate} style={{ marginTop: 10 }}>
        Create
      </Button>

      <Image src="https://i.imgur.com/ZvJrVh0.gif" alt="Logo UKM Programming" style={{width: '500px', height: 'auto', marginTop: 20, marginLeft: 'auto', marginRight: 'auto'}} />
      

    </BlogLayout>
  );
}
