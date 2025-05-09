export interface SubItem {
  id: string;
  title: string;
  onPress?: () => void;
}

export interface MenuItem {
  id: string;
  title: string;
  subItems: SubItem[];
}

export type FontAwesomeIconName =
  | 'newspaper-o'
  | 'home'
  | 'users'
  | 'cutlery'
  | 'laptop'
  | 'building'
  | 'globe'
  | 'wheelchair'
  | 'heart'
  | 'heartbeat'
  | 'soccer-ball-o'
  | 'paint-brush'
  | 'refresh'
  | 'link'
  | 'flag'
  | 'calendar'
  | 'plus-square'
  | 'search'
  | 'weixin'
  | 'plane';

export interface Service {
  name: string;
  label: string;
  icon: FontAwesomeIconName;
}
