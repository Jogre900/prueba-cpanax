import React from "react";
type HeadingProps = {
  title: string;
  className?: string | undefined;
};

const Heading = ({ title, className }: HeadingProps) => {
  return <h1 className={"color-secondary mv-0" + className}>{title}</h1>;
};

export default Heading;
