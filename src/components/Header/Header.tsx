import { memo, useState } from 'react';
import cx from 'clsx';
import {
  Burger,
  Container,
  Group,
  Menu,
  Tabs,
  Text,
  UnstyledButton,
  Code,
  useMantineTheme,
  Flex,
  Button,
  Modal,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { ArrowRightLeft, ChevronDown, LogOut, Trash } from 'lucide-react';
import { notifications } from '@mantine/notifications';
import { AnnoyKating } from '../AnnoyKating/AnnoyKating';

export const Header = memo(function Header() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpened, menuActions] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [user, setUser] = useState({ name: 'Guest' });
  const [userBuffer, setUserBuffer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const tabs = [
    { value: '/', label: 'Home' },
    { value: '/notes', label: 'Catatan' },
    { value: '/practices', label: 'Latihan' },
    { value: '/practices/2024-11-16', label: 'Latihan Pertemuan 2024-11-16', featured: true },
  ];

  const activeTab = location.pathname;

  const handleLogin = () => {
    if (!userBuffer.trim()) {
      setErrorMessage('Nama tidak bisa kosong.');
      return;
    }
    setUser({ name: userBuffer });
    setErrorMessage('');
    setLoginModalOpened(false);
  };

  const tabItems = tabs.map((tab) => (
    <Tabs.Tab value={tab.value} key={tab.value}>
      <Flex>
        {tab.featured && (
          <>
            <Text size="sm" color={theme.colors.yellow[7]} fw={700} mr={5}>
              FEATURED
            </Text>
            <span style={{position: 'relative', bottom: -3}}>{tab.label}</span>
          </>
        )}
        {!tab.featured && (
          <>
            <span>{tab.label}</span>
          </>
        )}
      </Flex>
    </Tabs.Tab>
  ));
  return (
    <div className={classes.header}>
      { activeTab !== '/practices/2024-11-16' ? (<AnnoyKating />) : null }

      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <div>
            <Link to="/" className={classes.brand}>
              UKM Programming oleh Reihan
            </Link>
            <Code fw={700} ml={5}>v0.0.2</Code>
          </div>

          <Burger opened={menuOpened} onClick={menuActions.toggle} hiddenFrom="xs" size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
                <Group gap={7}>
                  <Text fw={500} size="sm">{user.name}</Text>
                  <ChevronDown size={12} strokeWidth={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item onClick={() => setLoginModalOpened(true)} leftSection={<ArrowRightLeft size={16} strokeWidth={1.5} />}>
                {user.name === 'Guest' ? 'Login' : 'Change account'}
              </Menu.Item>
              <Menu.Item onClick={() => setUser({ name: 'Guest' })} leftSection={<LogOut size={16} strokeWidth={1.5} />}>
                Logout
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                onClick={() => notifications.show({ title: 'This button does nothing!', message: 'kekw', color: 'red' })}
                color="red"
                leftSection={<Trash size={16} strokeWidth={1.5} />}
              >
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container size="md">
        <Tabs
          value={activeTab}
          onChange={(value) => navigate(value || '/')}
          classNames={{ root: classes.tabs, list: classes.tabsList, tab: classes.tab }}
        >
          <Tabs.List>{tabItems}</Tabs.List>
        </Tabs>
      </Container>

      <Modal opened={loginModalOpened} onClose={() => setLoginModalOpened(false)} title="Login" centered>
        <Flex direction="column" gap="md">
          <TextInput
            id="login-modal-user-name"
            value={userBuffer}
            onChange={(e) => setUserBuffer(e.target.value)}
            placeholder="Insert your full name here"
            label="Full Name"
            error={errorMessage}
            withAsterisk
            description="Data is local."
          />
          <Button onClick={handleLogin} w={100} ml="auto">
            Login
          </Button>
        </Flex>
      </Modal>
    </div>
  );
});

export default Header;
