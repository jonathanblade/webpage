import type { FC, ReactElement } from "react";
import { Disclosure as HeadlessDisclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

interface DisclosureProps {
  start: number;
  end?: number;
  organization: string;
  position: string;
  children?: ReactElement;
}

const Disclosure: FC<DisclosureProps> = (props) => {
  return (
    <div>
      <HeadlessDisclosure>
        {({ open }) => (
          <>
            <HeadlessDisclosure.Button className="flex w-full justify-between rounded-lg border border-black/10 px-4 py-2 text-left transition duration-500 hover:border-black/60 dark:border-white/20 dark:hover:border-white/80">
              <div>
                <time className="text-xs">{`${props.start}-${props.end}`}</time>
                <p className="text-lg font-medium">{props.organization}</p>
                <p className="text-sm">{props.position}</p>
              </div>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-6 w-6 transition duration-500`}
              />
            </HeadlessDisclosure.Button>
            <HeadlessDisclosure.Panel className="px-4 pt-2">
              {props.children}
            </HeadlessDisclosure.Panel>
          </>
        )}
      </HeadlessDisclosure>
    </div>
  );
};

export default Disclosure;
