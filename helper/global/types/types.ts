import type { PropType } from 'vue'

const categories = ['laptop', 'clothes']
const discountTypes = ['percent', 'absolute']
const statuses = [
  { value: 'active', title: 'Đang bán' },
  { value: 'unActive', title: 'Dừng bán' }
]

export interface Product {
  id: string | null,
  category: string | null,
  sku: string | null,
  name: string | null,
  slug: string | null,
  price: number | null,
  discount: number | null,
  discountType: string | null,
  status: string
  images: PropType<string[]>,
  description: string | null,
  brand: string | null,
  warrantyPeriodByMonth: number | null,
  warrantyType: string | null,
  shipFrom: Province | null,
  hasVariant: boolean | null,
  variants: Variant[]
}

export interface Province {
  idProvince: string,
  name: string
}

export interface District {
  idProvince: string,
  idDistrict: string,
  name: string
}

export interface Variant {
  colorName: string,
  price: number
}

const variant:Variant = { colorName: 'Red', price: 10000}

