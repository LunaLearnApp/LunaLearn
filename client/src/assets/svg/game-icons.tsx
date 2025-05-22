import { SVGProps } from "react";

export const MathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#FFD166" />
    <path d="M8 8L16 16" stroke="#2A2D7E" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 8L8 16" stroke="#2A2D7E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ScienceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#7ED6DF" />
    <path d="M10 7V13C10 14.6569 8.65685 16 7 16V16" stroke="#2A2D7E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 7V13C14 14.6569 15.3431 16 17 16V16" stroke="#2A2D7E" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="9" y="5" width="6" height="2" rx="1" fill="#2A2D7E" />
  </svg>
);

export const ReadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#F9A8D4" />
    <rect x="6" y="7" width="12" height="10" rx="1" fill="white" />
    <path d="M8 10H16" stroke="#2A2D7E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 12H16" stroke="#2A2D7E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 14H13" stroke="#2A2D7E" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SocialStudiesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#A78BFA" />
    <circle cx="12" cy="12" r="5" fill="white" />
    <path d="M12 9V12L14 14" stroke="#2A2D7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GamepadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 11H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 9L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="10" r="1" fill="currentColor" />
    <circle cx="14" cy="13" r="1" fill="currentColor" />
    <path d="M6.5 5H17.5C18.3284 5 19 5.67157 19 6.5V17.5C19 18.3284 18.3284 19 17.5 19H6.5C5.67157 19 5 18.3284 5 17.5V6.5C5 5.67157 5.67157 5 6.5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GraduationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CharacterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const AwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M8 15L7 21L12 19L17 21L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ParentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 14C18.2091 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GameIcons = {
  math: <MathIcon />,
  science: <ScienceIcon />,
  reading: <ReadingIcon />,
  "social studies": <SocialStudiesIcon />
};
