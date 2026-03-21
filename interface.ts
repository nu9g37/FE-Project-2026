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
  user: UserItem,
  campground: CampgroundItem,
  createAt: string
}

export interface UserJson {
  success: boolean,
  data: UserItem
}

export interface UserItem {
  _id: string,
  name: string,
  tel: string,
  email: string,
  role: string,
  createAt: string
}

export interface BookingJson {
  success: boolean,
  count: number,
  data: BookingItem[]
}