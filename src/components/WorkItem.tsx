import type { FC } from "react";

interface WorkItemProps {
  start: number;
  end?: number;
  company: string;
  country: string;
  city: string;
  position: string;
}

const WorkItem: FC<WorkItemProps> = (props) => {
  return (
    <li className="py-2">
      <time className="text-xs opacity-50">{`${props.start}-${props.end}`}</time>
      <p className="text-lg font-medium">
        {props.company} ({props.country}, {props.city})
      </p>
      <p className="text-sm">{props.position}</p>
    </li>
  );
};

export default WorkItem;
