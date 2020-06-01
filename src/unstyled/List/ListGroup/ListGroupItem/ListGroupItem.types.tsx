import { ListProps } from "../../List.types";

export interface ListGroupItemProps {
  header?: string;
  children: React.ReactElement<ListProps>;
}
