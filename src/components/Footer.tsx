import { FC } from "react";
import { Icons } from "./Icons";

interface FooterProps {}

const navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: Icons.facebook,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Icons.instagram,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Icons.twitter,
  },
  {
    name: "GitHub",
    href: "#",
    icon: Icons.github,
  },
  {
    name: "YouTube",
    href: "#",
    icon: Icons.youtube,
  },
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-white">
      <div className="mx-auto py-12 md:flex md:items-center md:justify-between container">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary-400 hover:text-primary-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-primary-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
