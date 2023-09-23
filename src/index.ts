/// <reference types="@types/google.maps" />
import { User } from './User'
import { CustomMap } from './CustomMap'

const user = new User()
// const company = new Company()

const customMap = new CustomMap('custommap')
customMap.addMarker(user)
