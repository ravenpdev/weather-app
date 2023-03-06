import { BorderInsets, Color } from '@/types'

type TextButttonProps = {
  variant: 'text'
  borderInset?: never
}

type RoundedButtonProps = {
  variant: 'contained'
  borderInset?: never
}

type OutlinedButtonProps = {
  variant: 'outlined'
  borderInset?: never
}

type CustomButtonProps = {
  variant: 'custom'
  borderInset: BorderInsets
}

type ButtonProps = {
  color?: Color
  type?: 'button' | 'reset' | 'submit'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
} & (
  | TextButttonProps
  | RoundedButtonProps
  | OutlinedButtonProps
  | CustomButtonProps
)

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant,
    color,
    size = 'medium',
    borderInset,
    children,
    disabled,
  } = props

  const css: string[] = []

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

  switch (size) {
    case 'small':
      css.push('text-sm py-0.5 px-1')
      break
    case 'medium':
      css.push('text-base py-1 px-3')
      break
    case 'large':
      css.push('text-xl py-1.5 px-4')
      break
  }

  if (variant === 'contained') {
    switch (color) {
      case 'primary':
        css.push('bg-purple-500 text-purple-50 hover:bg-purple-400')
        break
      case 'secondary':
        css.push('bg-pink-500 text-pink-50 hover:text-pink-400')
        break
      default:
        css.push('bg-gray-50 text-gray-700 hover:bg-gray-100')
    }
  }

  if (variant === 'outlined') {
    css.push('border')
    switch (color) {
      case 'primary':
        css.push(
          'border-purple-500 text-purple-500 hover:text-purple-400 hover:border-purple-400'
        )
        break
      case 'secondary':
        css.push(
          'border-pink-500 text-pink-500 hover:text-pink-400 hover:border-purple-400'
        )
        break
      default:
        css.push(
          'bg-gray-500 text-gray-500 hover:text-gray-400 hover:border-purple-500'
        )
    }
  }

  if (variant === 'text') {
    switch (color) {
      case 'primary':
        css.push('hover:bg-purple-100')
        break
      case 'secondary':
        css.push('hover:bg-pink-100')
        break
      default:
        css.push('bg-white hover:bg-opacity-20')
    }
  }

  if (variant === 'custom') {
    switch (color) {
      case 'primary':
        css.push('bg-purple-500 text-purple-50 hover:bg-purple-400')
        break
      case 'secondary':
        css.push('hover:bg-pink-100')
        break
      default:
        css.push('bg-white hover:bg-opacity-20')
    }
  }

  return (
    <button
      type={type}
      className={css.join(' ')}
      onClick={props.onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
