import './Input.module.scss'
import { TextField } from '@mui/material'

interface Props {
  name: string
  type: string
  label: string
  error: boolean | undefined
}

export default function Input({ name, type, label, error }: Props) {
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
      error={error}
    />
  )
}
