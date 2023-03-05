import { forwardRef } from 'react'

type TextFieldProps = {
  label?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { label, ...restProps } = props

  if (!label) {
    return <input type="text" {...restProps} ref={ref} />
  }

  return (
    <div>
      <label className="capitalize" htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input type="text" {...restProps} ref={ref} />
    </div>
  )
})

// const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
//   <input type="text" {...props} ref={ref} />
// ))

// const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
//   const {label, ...restProps} = props
//   if (!label) {
//     return <input type="text" {...restProps} ref={ref} />
//   }

//   return (
//     <>
//       <div>
//         <label className="capitalize" htmlFor={label.toLowerCase()}>
//           {label}
//         </label>
//         <input {...restProps} type="text" ref={ref} />
//       </div>
//     </>
//   )
// })

export default TextField
