import * as React from 'react'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
import Input from 'components/Input/Input'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { addMember, editMember } from 'app/app-reducer'
import { Member } from 'components/MemberCard/types'
import dayjs, { Dayjs } from 'dayjs'
import { nanoid } from 'nanoid'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState, useEffect } from 'react'

interface Props {
  isModalOpen: boolean
  setModalOpen: Function
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function MemberFormModal({ isModalOpen, setModalOpen }: Props) {
  const dispatch = useAppDispatch()
  const memberInModal = useAppSelector((state) => state.memberInModal)
  const [entryDate, setEntryDate] = React.useState<Dayjs | null>(dayjs())
  const [inputValues, setInputValues] = useState({
    name: '',
    date: dayjs().format('DD.MM.YYYY'),
    tel: '',
    mail: '',
    books: '',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const date = entryDate ? entryDate : dayjs().format('DD.MM.YYYY')

    const books = String(inputValues.books)
    const booksArr = books.split(',').map((el) => el.trim())

    let memberCard: Member = {
      id: '',
      name: inputValues.name,
      date: dayjs(date).format('DD.MM.YYYY'),
      tel: inputValues.tel,
      mail: inputValues.mail,
      books: booksArr,
    }
    if (memberInModal.id === null) {
      memberCard = {
        ...memberCard,
        id: nanoid(10),
        img: '/assets/member-default.jpeg',
      }

      dispatch(addMember(memberCard))
    } else {
      memberCard = {
        ...memberCard,
        id: memberInModal.id,
        img: memberInModal.img,
      }

      dispatch(editMember(memberCard))
    }

    setModalOpen(false)
  }

  useEffect(() => {
    if (memberInModal.id !== null) {
      // @ts-ignore
      setInputValues(memberInModal)
    }
  }, [memberInModal.id])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={style}>
            <Input
              name="name"
              type="text"
              label="Name"
              error={false}
              value={inputValues.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValues({ ...inputValues, name: e.target.value })
              }
            />
            <DatePicker
              format="DD.MM.YYYY"
              value={entryDate}
              onChange={(value) => setEntryDate(value)}
              className="datepicker-container"
              label="Date of entry"
            />
            <Input
              name="phone"
              type="tel"
              label="Phone"
              error={false}
              value={inputValues.tel}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValues({ ...inputValues, tel: e.target.value })
              }
            />
            <Input
              name="mail"
              type="email"
              label="E-mail"
              error={false}
              value={inputValues.mail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValues({ ...inputValues, mail: e.target.value })
              }
            />
            <Input
              name="books"
              type="text"
              label="List of books separated by commas"
              error={false}
              value={inputValues.books}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValues({ ...inputValues, books: e.target.value })
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Fade>
      </Modal>
    </LocalizationProvider>
  )
}

export default MemberFormModal
