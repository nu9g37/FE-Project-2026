export interface CampgroundItem {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  region: number,
  __v: number,
  id: string
}

export interface CampgroundJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CampgroundItem[]
}

export interface BookingItem {
  _id: string,
  bookingDate: string,
  user: string,
  campground: string,
  createAt: string
}

export interface BookingJson {
  success: boolean,
  count: number,
  data: BookingItem[]
}