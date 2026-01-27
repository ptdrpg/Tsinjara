import { 
  ArrowDownUp, 
  Bus, 
  Gift,
  Hamburger, 
  HardDrive, 
  QrCode,
  Trash2,
  Pencil
} from "lucide-react-native";

export const creation_data = [
  {
    title: "New Transaction",
    subtitle: "Track your Bills",
    icon: HardDrive,
    link: "/",
  },
  {
    title: "New Channel",
    subtitle: "For Organized content and data",
    icon: HardDrive,
    link: "/",
  },
  {
    title: "Join Channel",
    subtitle: "Scan QR code to join channel",
    icon: QrCode,
    link: "/",
  },
]

export const Tracker_data = [
  {
    icon: Hamburger,
  },
  {
    icon:Bus,
  },
  {
    icon:Gift,
  },
  {
    icon:ArrowDownUp,
  },
]

export const modalSpaceItems = [
    {
      id: '1',
      label: 'edit',
      icon: Pencil,
    },
    {
      id: '2',
      label: 'delete',
      icon: Trash2,
    },
  ];