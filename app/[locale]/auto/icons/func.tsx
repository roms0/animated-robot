import { IconProps } from "./props";

export const Func = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 17C11.5 17 12.3 16 12.3 14.2V10C12.3 8 13.3 6.7 15.5 7M9.5 11.2H15.2M5.5 3H19.5C20.6046 3 21.5 3.89543 21.5 5V19C21.5 20.1046 20.6046 21 19.5 21H5.5C4.39543 21 3.5 20.1046 3.5 19V5C3.5 3.89543 4.39543 3 5.5 3Z"
        stroke="var(--mauve-12)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
