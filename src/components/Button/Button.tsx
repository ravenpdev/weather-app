import { BorderRadius, Kind, Sizes } from '@/types'

type ButtonType = 'submit' | 'button' | 'reset'

type ButtonProps = {
  type: ButtonType
  kind?: Kind
  size?: Sizes
  children: React.ReactNode
  onClick?: () => void
  border?: boolean
  borderRadius?: BorderRadius
}

const Button = ({
  type,
  children,
  onClick,
  kind,
  size,
  border,
  borderRadius,
}: ButtonProps) => {
  const classes = ['py-1 px-3']

  if (border) {
    classes.push('border')
  }

  switch (kind) {
    case 'primary':
      classes.push('bg-purple-500 text-purple-50 hover:bg-purple-600')
      break
    case 'secondary':
      classes.push('bg-pink-500 text-pink-50 hover:bg-pink-600')
      break
    case 'warning':
      classes.push('bg-amber-500 text-amber-50 hover:bg-amber-600')
      break
    case 'info':
      classes.push('bg-sky-500 text-sky-50 hover:bg-sky-600')
      break
    case 'success':
      classes.push('bg-teal-500 text-teal-50 hover:bg-teal-600')
      break
    case 'error':
      classes.push('bg-red-500 text-red-50 hover:bg-red-600')
      break
    default:
      classes.push('bg-gray-100 hover:bg-gray-200')
  }

  switch (size) {
    case 'xs':
      classes.push('text-xs')
      break
    case 'sm':
      classes.push('text-sm')
      break
    case 'large':
      classes.push('text-lg')
      break
  }

  if (borderRadius) {
    switch (borderRadius) {
      case 'sm':
        classes.push('rounded-sm')
        break
      case 'md':
        classes.push('rounded-md')
        break
      case 'lg':
        classes.push('rounded-lg')
        break
      case 'full':
        classes.push('rounded-full')
        break
      default:
        classes.push('rounded-none')
    }
  }

  return (
    <button
      className={classes.join(' ')}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
