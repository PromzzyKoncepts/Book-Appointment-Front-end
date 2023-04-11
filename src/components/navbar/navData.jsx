import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import DeleteIcon from '@mui/icons-material/Delete';

export default [
  {
    id: 0,
    icon: <HomeIcon />,
    text: 'Home',
    link: '/',
    isProtected: false,
  },
  {
    id: 1,
    icon: <TravelExploreIcon />,
    text: 'Add New Car',
    link: 'add_car',
    isProtected: true,
  },
  {
    id: 2,
    icon: <DeleteIcon />,
    text: 'Delete a Car',
    link: 'delete_car',
    isProtected: true,
  },
  {
    id: 3,
    icon: <BookmarksIcon />,
    text: 'Reservations',
    link: 'reservations',
    isProtected: true,
  },
  {
    id: 4,
    icon: <BookmarkAddIcon />,
    text: 'Reserve',
    link: 'reserve',
    isProtected: true,
  },
];
