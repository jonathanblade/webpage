import type { FC } from "react";

interface ContactLinkProps {
  header: string;
  href: string;
  text: string;
}

const ContactLink: FC<ContactLinkProps> = (props) => {
  return (
    <li className="mb-3 text-xs font-medium">
      <span className="uppercase">{props.header}</span>
      <a
        className="block opacity-50 transition duration-300 hover:opacity-100"
        href={props.href}
        target="_blank"
      >
        {props.text}
      </a>
    </li>
  );
};

export default ContactLink;
