import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import colors from './colors'

export const profileList = [
  {
    id: 1,
    icon: <MaterialCommunityIcons name='account' size={36} color={colors.primary} />,
    listTitle: 'Edit Profile',
    route: 'EditProfileScreen',
  },
  {
    id: 2,
    icon: <AntDesign name='star' size={36} color={colors.primary} />,
    listTitle: 'About',
  },
  {
    id: 3,
    icon: <Ionicons name='ios-settings-sharp' size={36} color={colors.primary} />,
    listTitle: 'Settings',
  },
]

export const profileSecondList = [
  {
    id: 1,
    icon: <Ionicons name='document-text' size={36} color={colors.primary} />,
    listTitle: 'Terms & Privacy Policy',
  },
  {
    id: 2,
    icon: <MaterialIcons name='logout' size={36} color={colors.primary} />,
    listTitle: 'Log Out',
  },
]

export const editProfile = [
  {
    id: 1,
    placeholder: 'Name',
  },
  {
    id: 2,
    placeholder: 'Location',
  },
  {
    id: 3,
    placeholder: 'Account Type',
  },
  {
    id: 4,
    placeholder: 'Phone',
  },
]
