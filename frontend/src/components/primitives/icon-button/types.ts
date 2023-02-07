import { IconColor, IconName } from 'common/enums';

export type IconButtonProps = {
  icon: IconName;
  color: IconColor;
  callback: () => void;
  size?: SizeProp;
};
  
export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';