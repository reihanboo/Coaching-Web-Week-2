import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing.page';
import { PracticeList } from './pages/PracticeList.page'
import { Practice20241116 } from './pages/practices/Practice20241116.page';
import { NoteList } from './pages/NoteList.page';
import Header from './components/Header/Header';
import { Container } from '@mantine/core';

const routes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/practices',
    element: <PracticeList />,
  },
  {
    path: '/practices/2024-11-16',
    element: <Practice20241116 />,
  },
  {
    path: '/notes',
    element: <NoteList />,
  }
];

export function Router() {
  return (
    <BrowserRouter>
      
      <Header /> {/* goofy */}

      <Container size='md'>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>

    </BrowserRouter>
  );
}
