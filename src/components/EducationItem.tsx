import type { FC } from "react";

interface ISpecialization {
  i18n: string;
  name: string;
}

interface IQualification {
  i18n: string;
  code: string;
  name: string;
}

interface IDiploma {
  i18n: string;
  title?: string;
  href?: string;
}

interface EducationItemProps {
  specialization: ISpecialization;
  qualification: IQualification;
  diploma?: IDiploma;
}

const EducationItem: FC<EducationItemProps> = (props) => {
  return (
    <div>
      <p className="font-medium">{props.qualification.i18n}</p>
      <p className="text-sm">{`${props.qualification.code} ${props.qualification.name}`}</p>
      <p className="pt-2 font-medium">{props.specialization.i18n}</p>
      <p className="text-sm">{props.specialization.name}</p>
      <p className="pt-2 font-medium">{props.diploma?.i18n}</p>
      <a
        className="text-sm opacity-50 transition duration-500 hover:opacity-100"
        href={props.diploma?.href}
        target="_blank"
      >
        {props.diploma?.title ? `${props.diploma.title}` : ""}
      </a>
    </div>
  );
};

export default EducationItem;
