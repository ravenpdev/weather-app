export type Color =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'info'
  | 'success'
  | 'error'

export type BorderInsets = 'top' | 'left' | 'right' | 'botton' | 'full' | 'none'

export type Place = {
  name: string
  country?: string
  state?: string
  lat: number
  lon: number
}
