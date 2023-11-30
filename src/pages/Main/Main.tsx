import MemberCard from 'components/MemberCard/MemberCard'
import styles from './Main.module.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getMembers } from 'app/app-reducer'
import { Member } from 'components/MemberCard/types'

export default function Main() {
  const dispatch = useAppDispatch()
  const members = useAppSelector((state) => state.members)

  useEffect(() => {
    dispatch(getMembers())
  }, [])

  return (
    <>
      <h1 className={styles.title}>Reading Club Members</h1>
      <div className={styles.table}>
        {members.map((item: Member) => (
          <MemberCard key={item.id} info={item} />
        ))}
      </div>
    </>
  )
}
