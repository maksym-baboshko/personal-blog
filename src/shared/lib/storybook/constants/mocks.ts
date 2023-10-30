import { type User } from '@shared/types/user'

const userData: User = {
  email: 'max.baboshko@gmail.com',
  username: 'exy',
  fname: 'Maksym',
  lname: 'Baboshko',
  age: 27,
  originCountry: 'ua',
  currentCountry: 'no',
  originCity: 'kharkiv',
  currentCity: 'bergen',
  avatar: 'https://i.pravatar.cc/150?img=7',
  gender: 'male',
  isPrivate: false,
  id: 1
}

export const mockedUser = {
  data: userData,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heC5iYWJvc2hrb0BnbWFpbC5jb20iLCJpYXQiOjE2OTY4OTc3ODYsImV4cCI6MTY5NjkwMTM4Niwic3ViIjoiMSJ9.XYMkuqZs56iuNUeDMeY7hksd_wibHssSlOfPvwudNuk',
  isAuthenticated: true
}
