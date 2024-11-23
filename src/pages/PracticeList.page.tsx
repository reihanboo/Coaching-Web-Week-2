import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { List } from '@mantine/core';

const practices = [
  { id: 1, name: 'Pertemuan ke-2', link: '/practices/2024-11-16', author: 'M Reihan Fahlevi', date: '2024-11-16' },
];

export function PracticeList() {
  return (
    <>
      <List spacing="sm" size="md" center>
        {practices.map((practice) => (
          <ArticleCard 
            title={practice.name}
            url={practice.link}
            author={practice.author}
            date={practice.date}
            key={practice.id} 
            margin={10} 
            />
        ))}
      </List>
    </>
  );
}
