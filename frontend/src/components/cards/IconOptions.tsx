import {
  LucideIcon,
  Cpu,
  Layers,
  ClipboardList,
  PenTool,
  BookOpen,
  Book,
  FileText,
  ShieldCheck,
  Brain,
  Code,
  Languages,
  Folder,
  Sun,
  Star,
  Pen
} from "lucide-react";

const availableIcons = [
  "Default",
  "Cpu",
  "Layers",
  "ClipboardList",
  "PenTool",
  "BookOpen",
  "Book",
  "FileText",
  "ShieldCheck",
  "Brain",
  "Code",
  "Languages",
  "Pen",
  "Folder",
  "Star",
  "Sun",
];

export const iconMap: Record<string, LucideIcon> = {
  "Default": BookOpen,

  Cpu,
  Layers,
  ClipboardList,
  PenTool,
  BookOpen,
  Book,
  FileText,
  ShieldCheck,
  Brain,
  Code,
  Languages,
  Pen,
  Folder,
  Star,
  Sun,
};

export const iconOptions = availableIcons.map((iconName) => {
  const IconComponent = iconMap[iconName];
  return { iconName, IconComponent };
});