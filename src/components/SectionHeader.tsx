import type { FC } from "react";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: FC<SectionHeaderProps> = (props) => {
  return <h1 className="py-10 text-6xl uppercase">{props.text}</h1>;
};

export default SectionHeader;
