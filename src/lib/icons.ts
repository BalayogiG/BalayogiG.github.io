import { Bot, Scale, MessagesSquare, Accessibility, KeyRound, Atom, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/BrandIcons";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

export const iconMap: Record<string, IconComponent> = {
  Bot,
  Scale,
  MessagesSquare,
  Accessibility,
  KeyRound,
  Atom,
  Mail,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Twitter: XIcon,
};
