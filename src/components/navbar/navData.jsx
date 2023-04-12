import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default [
  {
    id: 1,
    icon: <HomeIcon />,
    text: 'Home',
    link: '/',
    isProtected: false,
  },
  {
    id: 2,
    icon: <AddIcon />,
    text: 'Add New Car',
    link: 'add_car',
    isProtected: true,
  },
  {
    id: 3,
    icon: <DeleteIcon />,
    text: 'Delete a Car',
    link: 'delete_car',
    isProtected: true,
  },
  {
    id: 4,
    icon: <LibraryBooksIcon />,
    text: 'Reservations',
    link: 'reservations',
    isProtected: true,
  },
  {
    id: 5,
    icon: <LibraryAddIcon />,
    text: 'Reserve',
    link: 'reserve',
    isProtected: true,
  },
];
