import type { FC, ReactElement } from "react";

interface HardSkillsCardProps {
  children: ReactElement;
  title: string;
}

const HardSkillsCard: FC<HardSkillsCardProps> = (props) => {
  return (
    <div className="flex cursor-pointer justify-center rounded-xl border p-5 opacity-50 transition duration-300 hover:opacity-100">
      {props.children}
      <p className="ml-2 text-xs font-medium">{props.title}</p>
    </div>
  );
};

export default HardSkillsCard;
