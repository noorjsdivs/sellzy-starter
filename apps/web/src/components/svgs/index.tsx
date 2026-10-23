import React from "react";

export const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.25 4.58594L15.7336 12.9402C15.6016 15.0746 15.5356 16.1419 15.0006 16.9092C14.7361 17.2885 14.3955 17.6087 14.0006 17.8493C13.2018 18.3359 12.1325 18.3359 9.99395 18.3359C7.8526 18.3359 6.78192 18.3359 5.98254 17.8484C5.58733 17.6073 5.24666 17.2866 4.98224 16.9066C4.4474 16.1381 4.38288 15.0694 4.25384 12.9319L3.75 4.58594"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2.5 4.58464H17.5M13.3798 4.58464L12.8109 3.41107C12.433 2.63152 12.244 2.24174 11.9181 1.99864C11.8458 1.94472 11.7692 1.89675 11.6892 1.85522C11.3283 1.66797 10.8951 1.66797 10.0288 1.66797C9.14069 1.66797 8.69665 1.66797 8.32974 1.86307C8.24842 1.90631 8.17082 1.95622 8.09774 2.01228C7.76803 2.26522 7.58386 2.66926 7.2155 3.47735L6.71077 4.58464"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_edit)">
      <path
        d="M11.7279 3.23918C12.3489 2.56637 12.6594 2.22997 12.9893 2.03374C13.7855 1.56027 14.7657 1.54554 15.5751 1.9949C15.9106 2.18114 16.2306 2.50807 16.8707 3.16194C17.5108 3.8158 17.8308 4.14274 18.0131 4.48541C18.453 5.31223 18.4386 6.31363 17.9751 7.12689C17.783 7.46393 17.4537 7.78111 16.7951 8.41548L8.95869 15.9632C7.71057 17.1654 7.0865 17.7664 6.30655 18.0711C5.5266 18.3757 4.66917 18.3533 2.95431 18.3085L2.72099 18.3024C2.19893 18.2887 1.9379 18.2819 1.78616 18.1097C1.63442 17.9375 1.65514 17.6716 1.69657 17.1398L1.71907 16.851C1.83568 15.3543 1.89398 14.6059 2.18626 13.9332C2.47854 13.2604 2.9827 12.7142 3.99103 11.6217L11.7279 3.23918Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.833 3.33594L16.6663 9.16927"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 18.3359L18.3337 18.3359"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_edit">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const AddCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_add_circle)">
      <path
        d="M9.99935 6.66797V13.3346M13.3327 10.0013L6.66602 10.0013"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3327 9.9987C18.3327 5.39632 14.6017 1.66536 9.99935 1.66536C5.39698 1.66536 1.66602 5.39632 1.66602 9.9987C1.66602 14.6011 5.39698 18.332 9.99935 18.332C14.6017 18.332 18.3327 14.6011 18.3327 9.9987Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_add_circle">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const RemoveCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_remove_circle)">
      <path
        d="M13.3335 10L6.66683 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3332 9.9987C18.3332 5.39632 14.6022 1.66536 9.99984 1.66536C5.39746 1.66536 1.6665 5.39632 1.6665 9.9987C1.6665 14.6011 5.39746 18.332 9.99984 18.332C14.6022 18.332 18.3332 14.6011 18.3332 9.9987Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_remove_circle">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
