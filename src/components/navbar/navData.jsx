import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

export default [
  {
    id: 0,
    icon: <HomeIcon />,
    text: 'Home',
    link: '/',
  },
  {
    id: 1,
    icon: <TravelExploreIcon />,
    text: 'Add New Car',
    link: 'add_car',
  },
  {
    id: 2,
    icon: <BarChartIcon />,
    text: 'Delete a Car',
    link: 'delete_car',
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    text: 'Reservations',
    link: 'reservations',
  },
  {
    id: 4,
    icon: <SettingsIcon />,
    text: 'Reserve',
    link: 'reserve',
  },
];
