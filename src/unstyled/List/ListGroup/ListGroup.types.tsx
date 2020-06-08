import { ListGroupItemProps } from "./ListGroupItem";

export interface ListGroupProps {
  drawer?: boolean;
  children: React.ReactElement<ListGroupItemProps> | Array<React.ReactElement<ListGroupItemProps>>;
}
