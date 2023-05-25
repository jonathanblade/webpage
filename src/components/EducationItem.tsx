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
  title: string;
}

interface EducationItemProps {
  specialization: ISpecialization;
  qualification: IQualification;
  diploma: IDiploma;
}

const EducationItem: FC<EducationItemProps> = (props) => {
  return (
    <div>
      <p className="font-medium">{props.qualification.i18n}</p>
      <p className="text-sm">{`${props.qualification.code} ${props.qualification.name}`}</p>
      <p className="pt-2 font-medium">{props.specialization.i18n}</p>
      <p className="text-sm">{props.specialization.name}</p>
      <p className="pt-2 font-medium">{props.diploma.i18n}</p>
      <p className="text-sm">{props.diploma.title}</p>
    </div>
  );
};

export default EducationItem;
