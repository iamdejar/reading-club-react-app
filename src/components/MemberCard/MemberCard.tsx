import styles from './MemberCard.module.scss'
import { Member } from './types'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { deleteMember, setMemberInModal } from 'app/app-reducer'

interface Props {
  info: Member
  onEdit: Function
}

export default function MemberCard({ info, onEdit }: Props) {
  const dispatch = useAppDispatch()
  const isAdminAuth = useAppSelector((state) => state.isAdminAuth)

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
        {isAdminAuth && (
          <div className={styles.buttons}>
            <button
              onClick={() => {
                onEdit(true)
                dispatch(setMemberInModal(info))
              }}
            >
              <EditOutlinedIcon />
            </button>
            <button onClick={() => dispatch(deleteMember(info.id))}>
              <DeleteForeverOutlinedIcon />
            </button>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{info.name}</div>
        <div className={styles.date}>Joined the club: {info.date}</div>
        {isAdminAuth && (
          <>
            <div className={styles.date}>Tel: {info.tel}</div>
            <div className={styles.date}>Mail: {info.mail}</div>
          </>
        )}
      </div>
    </div>
  )
}
