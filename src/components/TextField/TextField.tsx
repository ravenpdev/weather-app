import { BorderInsets } from '@/types'
import { forwardRef } from 'react'

type TextFiledSize = 'small' | 'medium' | 'large'

type StandardTextFieldProps = {
  variant: 'standard'
  borderInset?: never
}

type FilledTextFieldProps = {
  variant: 'filled'
  borderInset?: never
}

type OutlinedTextFieldProps = {
  variant: 'outlined'
  borderInset?: never
}

type CustomTextFieldProps = {
  variant: 'custom'
  borderInset: BorderInsets
}

type TextFieldProps = {
  type: 'text' | 'email' | 'password'
  value: string
  size?: TextFiledSize
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} & (
  | StandardTextFieldProps
  | FilledTextFieldProps
  | OutlinedTextFieldProps
  | CustomTextFieldProps
)

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { variant, type, value, size, borderInset } = props
  const css = ['px-2 w-full']

  switch (size) {
    case 'small':
      css.push('py-0.5')
      break
    case 'medium':
      css.push('py-1.5')
      break
    case 'large':
      css.push('py-2')
      break
    default:
      css.push('py-1')
  }

  if (variant === 'custom') {
    switch (borderInset) {
      case 'top':
        css.push('rounded-t')
        break
      case 'left':
        css.push('rounded-l')
        break
      case 'right':
        css.push('rounded-r')
        break
      case 'botton':
        css.push('rounded-b')
        break
      case 'full':
        css.push('rounded-full')
        break
      case 'none':
        css.push('rounded-none')
        break
      default:
        css.push('rounded')
    }

    css.push('outline-none')
  }

  if (variant === 'outlined') {
    css.push(
      'border border-gray-200 bg-transparent rounded outline-none focus:border-gray-50 text-gray-700'
    )
  }

  if (variant === 'filled') {
    css.push('bg-gray-200 text-gray-700 rounded outline-none focus:bg-gray-100')
  }

  return (
    <input
      type={type}
      value={value}
      ref={ref}
      className={css.join(' ')}
      onChange={props.onChange}
    />
  )
})

export default TextField
