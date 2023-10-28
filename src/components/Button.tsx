import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  type: string;
}>;

const Button = ({ type, children }: Props) => {
  return <button className={`btn btn-${type}`}>{children}</button>;
};

export default Button;
