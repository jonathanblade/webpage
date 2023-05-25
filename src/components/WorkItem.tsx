import type { FC } from "react";

interface IArea {
  i18n: string;
  values: string[];
}

interface IStack {
  i18n: string;
  values: string[];
}

interface WorkItemProps {
  area: IArea;
  stack: IStack;
}

const WorkItem: FC<WorkItemProps> = (props) => {
  return (
    <div>
      <p className="font-medium">{props.area.i18n}</p>
      <p className="text-sm">
        {props.area.values.map((value, index) => (
          <span key={index} className="pr-2">
            {value}
          </span>
        ))}
      </p>
      <p className="pt-2 font-medium">{props.stack.i18n}</p>
      <p className="text-sm">
        {props.stack.values.map((value, index) => (
          <span key={index} className="inline-block pr-2">
            {value}
          </span>
        ))}
      </p>
    </div>
  );
};

export default WorkItem;
