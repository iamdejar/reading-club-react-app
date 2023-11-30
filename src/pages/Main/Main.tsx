import MemberCard from 'components/MemberCard/MemberCard'
import styles from './Main.module.scss'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getMembers } from 'app/app-reducer'
import { Member } from 'components/MemberCard/types'
import Button from '@mui/material/Button'
import MemberFormModal from 'components/MemberFormModal/MemberFormModal'

export default function Main() {
  const dispatch = useAppDispatch()
  const members = useAppSelector((state) => state.members)
  const isAdminAuth = useAppSelector((state) => state.isAdminAuth)

  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    dispatch(getMembers())
  }, [])

  return (
    <>
      <h1 className={styles.title}>Reading Club Members</h1>

      <div className={styles.counterRow}>
        <div>Members: {members.length}</div>

        {isAdminAuth && (
          <Button
            variant="contained"
            onClick={() => setModalOpen(!isModalOpen)}
          >
            Add new
          </Button>
        )}
      </div>

      <div className={styles.table}>
        {members.map((item: Member) => (
          <MemberCard key={item.id} info={item} />
        ))}
      </div>

      <MemberFormModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </>
  )
}
