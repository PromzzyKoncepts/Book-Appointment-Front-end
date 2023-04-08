import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
// import { logout } from '.../redux/apiCalls';

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
    icon: <BarChartIcon />,
    text: 'Delete a Car',
    link: 'delete_car',
    isProtected: true,
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    text: 'Reservations',
    link: 'reservations',
    isProtected: true,
  },
  {
    id: 4,
    icon: <SettingsIcon />,
    text: 'Reserve',
    link: 'reserve',
    isProtected: true,
  },
];
