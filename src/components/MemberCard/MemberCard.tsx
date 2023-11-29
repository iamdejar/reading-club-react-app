import styles from './MemberCard.module.scss'
import { Member } from './types'

interface Props {
  info: Member
}

export default function MemberCard({ info }: Props) {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <img src={process.env.PUBLIC_URL + info.img} alt="" />
        <div className={styles.books}>
          <ul>
            {info.books.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{info.name}</div>
        <div className={styles.date}>{info.date}</div>
      </div>
    </div>
  )
}
