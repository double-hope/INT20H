import { IconColor, IconName } from 'common/enums';

export type IconProps = {
  icon: IconName;
  color: IconColor;
  size?: SizeProp;
};
  
export type SizeProp = 'lg' | 'md' | 'sm' | 'xs';