type ButtonProps = {
  type: 'submit' | 'button'
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>

const Button = ({ type, children, ...restProps }: ButtonProps) => {
  return (
    <button type={type} {...restProps}>
      {children}
    </button>
  )
}

export default Button
