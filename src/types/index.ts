export type Kind =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'info'
  | 'success'
  | 'error'

export type Sizes = 'xs' | 'sm' | 'lg'

export type BorderRadius = 'sm' | 'md' | 'lg' | 'full' | 'none'

export type Place = {
  name: string
  country?: string
  state?: string
  lat: number
  lon: number
}
