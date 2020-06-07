import { ListItemProps } from './ListItem';
import { ListDividerProps } from './ListDivider';
export interface ListProps {
  children: React.ReactElement<ListItemProps, 'li'> | React.ReactElement<ListDividerProps,'li'> | Array<React.ReactElement<ListItemProps, 'li'> | React.ReactElement<ListDividerProps,'li'>>;
  nonInteractive?:boolean;
  dense?:boolean;
  avatarList?:boolean;
  twoLine?:boolean;
  role?:string;
  withSelection?:boolean;
  asNavigation?:boolean;
}
