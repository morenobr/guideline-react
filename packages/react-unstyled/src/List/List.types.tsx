import { ListItemProps } from './ListItem';
import { DividerProps } from '../Divider';
export interface ListProps {
  children: React.ReactElement<ListItemProps, 'li'> | React.ReactElement<DividerProps,'li'> | Array<React.ReactElement<ListItemProps, 'li'> | React.ReactElement<DividerProps,'li'>>;
  nonInteractive?:boolean;
  dense?:boolean;
  avatarList?:boolean;
  twoLine?:boolean;
  drawer?:boolean;
  role?:string;
  withSelection?:boolean;
  asNavigation?:boolean;
}
