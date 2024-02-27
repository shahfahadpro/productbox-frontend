import { ReactNode, FC } from "react";

interface Props {
  if: boolean;
  children: ReactNode;
}

export const ShouldRender: FC<Props> = (props) => {
  const { if: condition, children } = props;

  if (!condition) {
    return null;
  }

  return children;
};
