import './Input.module.scss'
import { TextField } from '@mui/material'

interface Props {
  name: string
  type: string
  label: string
  error: boolean | undefined
  value: string
  onChange: Function
}

function Input({ name, type, label, error, value, onChange }: Props) {
  return (
    <TextField
      margin="normal"
      fullWidth
      name={name}
      label={label}
      type={type}
      id={type}
      error={error}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
    />
  )
}

export default Input
