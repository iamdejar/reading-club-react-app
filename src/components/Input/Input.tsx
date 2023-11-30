import './Input.module.scss'
import { TextField } from '@mui/material'

interface Props {
  name: string
  type: string
  label: string
}

export default function Input({ name, type, label }: Props) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={type}
      id={type}
      autoComplete="current-password"
    />
  )
}
