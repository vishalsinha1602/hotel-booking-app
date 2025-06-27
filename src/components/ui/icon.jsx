import icons from '@/lib/icons';

const Icon = ({ icon, ...props }) => {
  const IconComponent = icons[icon];
  return <IconComponent />;
};

export default Icon;
