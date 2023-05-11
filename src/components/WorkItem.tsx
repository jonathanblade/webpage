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
    <div className="cursor-pointer rounded-xl border p-5">
      <time className="text-xs">{`${props.start}-${props.end}`}</time>
      <p className="text-lg font-medium">
        {props.company} ({props.country}, {props.city})
      </p>
      <p className="text-sm">{props.position}</p>
    </div>
  );
};

export default WorkItem;
