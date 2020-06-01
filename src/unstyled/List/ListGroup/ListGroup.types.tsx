import { ListGroupItemProps } from "./ListGroupItem";

export interface ListGroupProps {
  children: React.ReactElement<ListGroupItemProps> | Array<React.ReactElement<ListGroupItemProps>>;
}
