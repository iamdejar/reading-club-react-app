import MemberCard from 'components/MemberCard/MemberCard'
import styles from './Main.module.scss'

export default function Main() {
  const cards = [
    {
      id: 101,
      img: '/assets/member-0.webp',
      name: 'Mary Margo',
      date: '21.10.2001',
      books: ['book 1', 'book 2'],
    },
    {
      id: 102,
      img: '/assets/member-1.webp',
      name: 'Ann Samy',
      date: '12.05.2002',
      books: ['book 1', 'book 2'],
    },
    {
      id: 103,
      img: '/assets/member-2.webp',
      name: 'Sam Kilman',
      date: '17.10.2002',
      books: ['book 1', 'book 2'],
    },
    {
      id: 104,
      img: '/assets/member-3.webp',
      name: 'Alex Bilbo',
      date: '21.10.2001',
      books: ['book 1', 'book 2'],
    },
    {
      id: 105,
      img: '/assets/member-4.webp',
      name: 'Samanta Fisher',
      date: '12.05.2002',
      books: ['book 1', 'book 2'],
    },
    {
      id: 106,
      img: '/assets/member-5.jpeg',
      name: 'Bob Dilan',
      date: '17.10.2002',
      books: ['book 1', 'book 2'],
    },
  ]

  return (
    <div className={styles.table}>
      {cards.map((item) => (
        <MemberCard key={item.id} info={item} />
      ))}
    </div>
  )
}
