export interface ICard {
  id: number
  urlImg: string
  title: string
  type: string
  size: string
  barcode: number
  manufacturer: string
  brand: string
  description: string
  price: number
  counter: number
  care: [string?, string?]
}
