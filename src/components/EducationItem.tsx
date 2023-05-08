import type { FC } from "react";

interface ISpecialization {
  i18: string;
  name: string;
}

interface IQualification {
  i18: string;
  code: string;
  name: string;
}

interface IDiploma {
  i18: string;
  title?: string;
  href?: string;
}

interface EducationItemProps {
  start: number;
  end: number;
  university: string;
  department: string;
  degree: string;
  specialization: ISpecialization;
  qualification: IQualification;
  diploma?: IDiploma;
}

const EducationItem: FC<EducationItemProps> = (props) => {
  return (
    <li className="py-2">
      <time className="text-xs opacity-50">{`${props.start}-${props.end}`}</time>
      <p className="text-lg font-medium">{`${props.university}, ${props.department}`}</p>
      <p className="text-sm">{props.degree}</p>
      <p className="font-medium">{props.qualification.i18}</p>
      <p className="text-sm">{`${props.qualification.code} ${props.qualification.name}`}</p>
      <p className="font-medium">{props.specialization.i18}</p>
      <p className="text-sm">{props.specialization.name}</p>
      <p className="font-medium">{props.diploma?.i18}</p>
      <a
        className="text-sm opacity-50 transition duration-300 hover:opacity-100"
        href={props.diploma?.href}
        target="_blank"
      >
        {props.diploma?.title ? `# ${props.diploma.title}` : ""}
      </a>
    </li>
  );
};

export default EducationItem;
