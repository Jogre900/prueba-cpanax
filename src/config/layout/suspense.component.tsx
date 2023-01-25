import { Suspense, ReactNode } from "react";

type SuspenseComponentProps = {
  children: ReactNode | ReactNode[];
};

const SuspenseComponent = ({ children }: SuspenseComponentProps): JSX.Element => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default SuspenseComponent;
