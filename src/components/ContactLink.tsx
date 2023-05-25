import type { FC } from "react";

interface ContactLinkProps {
  header: string;
  href: string;
  text: string;
}

const ContactLink: FC<ContactLinkProps> = (props) => {
  return (
    <li className="py-2 text-sm">
      <span className="font-medium uppercase">{props.header}</span>
      <br />
      <a
        className="opacity-50 transition duration-500 hover:opacity-100"
        href={props.href}
        target="_blank"
      >
        {props.text}
      </a>
    </li>
  );
};

export default ContactLink;
