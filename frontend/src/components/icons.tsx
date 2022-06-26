import React, { FC } from 'react';

interface IconProps {
	color?: string;
}

export const BellIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M9.99877 19.75H13.9988C13.9988 20.75 13.2818 21.75 11.9988 21.75C10.7158 21.75 9.99877 20.75 9.99877 19.75ZM20.2408 15.5249L19.1348 13.679C18.7158 12.98 18.4948 12.1799 18.4948 11.3669V8.73999C18.4948 5.16099 15.5808 2.25 11.9998 2.25C8.41877 2.25 5.50476 5.16099 5.50476 8.73999V11.3669C5.50476 12.1799 5.28376 12.98 4.86476 13.679L3.75876 15.5249C3.42076 16.0869 3.41277 16.7649 3.73677 17.3369C4.06077 17.9089 4.64676 18.25 5.30376 18.25H18.6978C19.3558 18.25 19.9418 17.9079 20.2658 17.3369C20.5868 16.7659 20.5788 16.0879 20.2408 15.5249Z"
		/>
	</svg>
);

export const MenuIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M22 5C22 4.447 21.552 4 21 4H8C7.448 4 7 4.447 7 5C7 5.553 7.448 6 8 6H21C21.552 6 22 5.553 22 5ZM3 11H21C21.552 11 22 11.447 22 12C22 12.553 21.552 13 21 13H3C2.448 13 2 12.553 2 12C2 11.447 2.448 11 3 11ZM12 18H21C21.552 18 22 18.447 22 19C22 19.553 21.552 20 21 20H12C11.448 20 11 19.553 11 19C11 18.447 11.448 18 12 18Z"
		/>
	</svg>
);

export const PassIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M21 7V17C21 19.757 18.757 22 16 22H12C11.448 22 11 21.553 11 21C11 20.447 11.448 20 12 20H16C17.654 20 19 18.654 19 17V7C19 5.346 17.654 4 16 4H12C11.448 4 11 3.553 11 3C11 2.447 11.448 2 12 2H16C18.757 2 21 4.243 21 7ZM14.923 12.382C15.024 12.138 15.024 11.862 14.923 11.618C14.872 11.495 14.799 11.385 14.706 11.292L10.707 7.29297C10.316 6.90197 9.684 6.90197 9.293 7.29297C8.902 7.68397 8.902 8.31603 9.293 8.70703L11.586 11H4C3.448 11 3 11.447 3 12C3 12.553 3.448 13 4 13H11.586L9.293 15.293C8.902 15.684 8.902 16.316 9.293 16.707C9.488 16.902 9.744 17 10 17C10.256 17 10.512 16.902 10.707 16.707L14.706 12.708C14.799 12.615 14.872 12.505 14.923 12.382Z"
		/>
	</svg>
);

export const UserIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M12 13C15.033 13 17.5 10.532 17.5 7.5C17.5 4.468 15.033 2 12 2C8.967 2 6.5 4.468 6.5 7.5C6.5 10.532 8.967 13 12 13ZM12 4C13.93 4 15.5 5.57 15.5 7.5C15.5 9.43 13.93 11 12 11C10.07 11 8.5 9.43 8.5 7.5C8.5 5.57 10.07 4 12 4ZM20 17.967V18.978C20 19.974 19.636 20.929 18.975 21.667C18.777 21.888 18.504 22 18.229 22C17.992 22 17.753 21.916 17.562 21.745C17.15 21.377 17.116 20.744 17.484 20.333C17.816 19.962 17.999 19.48 17.999 18.978V17.967C17.999 16.568 17.072 15.358 15.746 15.025C15.554 14.977 15.349 15.001 15.185 15.095C13.204 16.197 10.786 16.191 8.82397 15.101C8.65097 15.002 8.447 14.977 8.255 15.025C6.926 15.358 6 16.568 6 17.967V18.978C6 19.481 6.18301 19.962 6.51501 20.333C6.88301 20.744 6.84801 21.377 6.43701 21.745C6.02501 22.114 5.39302 22.078 5.02502 21.667C4.36402 20.929 4 19.974 4 18.978V17.967C4 15.65 5.54903 13.642 7.76703 13.085C8.45403 12.91 9.19803 13.011 9.80603 13.358C11.155 14.106 12.836 14.1121 14.204 13.3521C14.803 13.0091 15.547 12.909 16.235 13.084C18.451 13.642 20 15.649 20 17.967Z"
		/>
	</svg>
);

export const EyeIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M21.4386 9.98755C20.097 7.75155 17.0858 4.00049 11.9972 4.00049C6.90959 4.00049 3.89842 7.75155 2.55579 9.98755C1.81099 11.2285 1.81099 12.7715 2.55579 14.0125C3.89842 16.2485 6.90959 19.9995 11.9972 19.9995C17.0858 19.9995 20.097 16.2485 21.4386 14.0125C22.1834 12.7715 22.1834 11.2295 21.4386 9.98755ZM19.7241 12.9835C18.5994 14.8575 16.1011 18.0005 11.9972 18.0005C7.89432 18.0005 5.395 14.8565 4.27031 12.9835C3.90641 12.3775 3.90641 11.6235 4.27031 11.0165C5.395 9.14348 7.89432 5.99951 11.9972 5.99951C16.1011 5.99951 18.5994 9.14248 19.7241 11.0165C20.088 11.6235 20.088 12.3775 19.7241 12.9835ZM11.9972 7.50049C9.51687 7.50049 7.49843 9.51949 7.49843 12.0005C7.49843 14.4815 9.51687 16.5005 11.9972 16.5005C14.4775 16.5005 16.496 14.4815 16.496 12.0005C16.496 9.51949 14.4775 7.50049 11.9972 7.50049ZM11.9972 14.5005C10.6196 14.5005 9.49788 13.3795 9.49788 12.0005C9.49788 10.6215 10.6196 9.50049 11.9972 9.50049C13.3748 9.50049 14.4965 10.6215 14.4965 12.0005C14.4965 13.3795 13.3748 14.5005 11.9972 14.5005Z"
		/>
	</svg>
);

export const EyeSlashIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M21.4448 9.98612C20.8878 9.05812 19.9808 7.8131 18.7268 6.6851L20.7048 4.70719C21.0958 4.31719 21.0958 3.68413 20.7048 3.29313C20.3138 2.90213 19.6818 2.90213 19.2908 3.29313L8.82782 13.7561L8.8258 13.7581L3.2908 19.2931C2.8998 19.6841 2.8998 20.3162 3.2908 20.7072C3.4858 20.9022 3.7418 21.0002 3.9978 21.0002C4.2538 21.0002 4.5098 20.9022 4.7048 20.7072L6.87183 18.5401C8.45083 19.5091 10.1718 20.0002 11.9998 20.0002C17.0688 20.0002 20.0918 16.2521 21.4458 14.0141C22.1878 12.7721 22.1878 11.2301 21.4448 9.98612ZM14.4978 12.0011C14.4978 13.3801 13.3758 14.5011 11.9978 14.5011C11.6798 14.5011 11.3728 14.4381 11.0868 14.3261L14.3218 11.0911C14.4348 11.3761 14.4978 11.6831 14.4978 12.0011ZM19.7308 12.9832C18.5978 14.8572 16.0868 18.0011 11.9998 18.0011C10.7098 18.0011 9.48482 17.6842 8.34082 17.0722L9.61081 15.8022C10.3178 16.2512 11.1348 16.5011 11.9978 16.5011C14.4788 16.5011 16.4978 14.4821 16.4978 12.0011C16.4978 11.1381 16.2478 10.3212 15.7988 9.61417L17.3108 8.10209C18.4248 9.08209 19.2368 10.1911 19.7298 11.0141C20.0878 11.6131 20.0878 12.3892 19.7308 12.9832ZM3.9378 15.9461C3.4298 15.3431 2.96482 14.6951 2.55582 14.0171C1.81182 12.7721 1.8118 11.2292 2.5538 9.9882C3.9078 7.7492 6.92982 4.00114 11.9998 4.00114C12.9778 4.00114 13.9248 4.14214 14.8958 4.43314C15.4248 4.59114 15.7258 5.14916 15.5668 5.67716C15.4078 6.20616 14.8518 6.50716 14.3218 6.34916C13.5398 6.11516 12.7798 6.00114 11.9988 6.00114C7.91081 6.00114 5.39982 9.14508 4.26782 11.0191C3.91182 11.6141 3.91181 12.3892 4.26981 12.9892C4.62281 13.5732 5.02481 14.1352 5.46481 14.6562C5.82081 15.0792 5.76782 15.7101 5.34582 16.0651C5.15782 16.2241 4.9288 16.3012 4.7008 16.3012C4.4178 16.3012 4.1358 16.1801 3.9378 15.9461ZM11.2948 7.56315C11.8378 7.48615 12.3518 7.85311 12.4358 8.39811C12.5198 8.94411 12.1458 9.45608 11.6008 9.54008C10.5478 9.70308 9.69883 10.5522 9.53583 11.6042C9.45983 12.0982 9.03383 12.4522 8.54883 12.4522C8.49783 12.4522 8.44681 12.4481 8.3948 12.4401C7.8488 12.3561 7.47481 11.8451 7.55881 11.2991C7.85781 9.36311 9.35883 7.86215 11.2948 7.56315Z"
		/>
	</svg>
);

export const PenIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M20.6578 3.34253C19.7928 2.47753 18.6427 2.00049 17.4197 2.00049C16.1967 2.00049 15.0467 2.47753 14.1817 3.34253L3.64872 13.8755C3.20372 14.3205 2.91371 14.8835 2.81071 15.5035L2.02073 20.2415C1.94073 20.7215 2.09875 21.2145 2.44175 21.5575C2.72675 21.8425 3.11372 21.9995 3.51072 21.9995C3.59372 21.9995 3.67571 21.9925 3.75871 21.9785L8.49674 21.1885C9.11674 21.0855 9.67973 20.7955 10.1247 20.3505L20.6578 9.8175C21.5228 8.95251 21.9997 7.80147 21.9997 6.57947C21.9997 5.35647 21.5228 4.20753 20.6578 3.34253ZM8.71073 18.9385C8.56273 19.0865 8.37474 19.1835 8.16874 19.2175L4.10673 19.8945L4.78373 15.8325C4.81773 15.6265 4.91472 15.4385 5.06272 15.2905L12.9687 7.38452L16.6167 11.0325L8.71073 18.9385ZM19.2438 8.40454L18.0307 9.61743L14.3827 5.96948L15.5957 4.75647C16.0827 4.26947 16.7317 4.00049 17.4197 4.00049C18.1087 4.00049 18.7568 4.26947 19.2438 4.75647C19.7308 5.24347 19.9997 5.89144 19.9997 6.58044C19.9997 7.26944 19.7308 7.91754 19.2438 8.40454Z"
		/>
	</svg>
);

export const InfoIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8ZM13 12V16C13 16.553 12.552 17 12 17C11.448 17 11 16.553 11 16V12C11 11.447 11.448 11 12 11C12.552 11 13 11.447 13 12Z"
		/>
	</svg>
);

export const BackIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 24 24">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M17.7069 20.2931C18.0979 20.6841 18.0979 21.3162 17.7069 21.7072C17.5119 21.9022 17.256 22.0002 17 22.0002C16.744 22.0002 16.488 21.9022 16.293 21.7072L7.29301 12.7072C6.90201 12.3162 6.90201 11.6841 7.29301 11.2931L16.293 2.29313C16.684 1.90213 17.3159 1.90213 17.7069 2.29313C18.0979 2.68413 18.0979 3.31619 17.7069 3.70719L9.41398 12.0002L17.7069 20.2931Z"
		/>
	</svg>
);

export const CommentIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 26 26">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M18.4167 2.16675H7.58334C4.59659 2.16675 2.16667 4.59666 2.16667 7.58341V21.6667C2.16667 22.1044 2.43101 22.501 2.83509 22.6678C2.96943 22.7242 3.11026 22.7501 3.25001 22.7501C3.53167 22.7501 3.80901 22.6396 4.01592 22.4327L6.63109 19.8175C6.83584 19.6138 7.10777 19.5001 7.3981 19.5001H18.4167C21.4034 19.5001 23.8333 17.0702 23.8333 14.0834V7.58341C23.8333 4.59666 21.4034 2.16675 18.4167 2.16675ZM21.6667 14.0834C21.6667 15.8752 20.2085 17.3334 18.4167 17.3334H7.3981C6.53035 17.3334 5.71351 17.6713 5.09926 18.2856L4.33334 19.0515V7.58341C4.33334 5.79158 5.79151 4.33341 7.58334 4.33341H18.4167C20.2085 4.33341 21.6667 5.79158 21.6667 7.58341V14.0834Z"
		/>
	</svg>
);

export const HeartIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 26 26">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M21.9951 4.8079C20.5922 3.1049 18.64 2.16675 16.4972 2.16675C15.2622 2.16675 14.0673 2.45602 13.0002 3.00636C11.9342 2.45602 10.7382 2.16675 9.5032 2.16675C7.36036 2.16675 5.40818 3.1049 4.00527 4.8079C2.48535 6.65282 1.85487 9.17154 2.31745 11.5462C3.39429 17.0658 8.98213 20.9019 11.3351 22.295C11.8486 22.5973 12.4239 22.7501 12.9991 22.7501C13.5744 22.7501 14.1507 22.5973 14.6642 22.294C17.0172 20.9019 22.605 17.0658 23.6818 11.5462C24.1455 9.17154 23.515 6.65282 21.9951 4.8079ZM21.5553 11.1303C20.6464 15.7886 15.662 19.1849 13.5614 20.4286C13.2158 20.6322 12.7846 20.6322 12.439 20.4286C10.3384 19.1849 5.35294 15.7886 4.44511 11.1303C4.10494 9.38505 4.56537 7.53573 5.67903 6.18481C6.6627 4.9899 8.02121 4.33341 9.50429 4.33341C10.5551 4.33341 11.5626 4.62266 12.4174 5.16866C12.7727 5.39508 13.2277 5.39508 13.583 5.16866C14.4389 4.62266 15.4453 4.33341 16.4961 4.33341C17.9803 4.33341 19.3388 4.9899 20.3214 6.18481C21.435 7.53573 21.8965 9.38505 21.5553 11.1303Z"
		/>
	</svg>
);

export const SendIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 26 26">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M22.8623 3.13844C22.0335 2.30969 20.8613 1.98363 19.7206 2.26855L5.51483 5.81966C3.49767 6.32341 2.15216 8.059 2.16625 10.1379C2.18141 12.2168 3.55074 13.9339 5.57441 14.4095L10.444 15.5555L11.5901 20.4242C12.0657 22.4489 13.7829 23.8182 15.8618 23.8323C15.8726 23.8323 15.8845 23.8323 15.8953 23.8323C17.9591 23.8323 19.6794 22.4911 20.1821 20.4847L23.7333 6.27788C24.0171 5.14255 23.6921 3.96827 22.8623 3.13844ZM21.6305 5.75579L18.0794 19.9616C17.7619 21.2291 16.7317 21.7046 15.8769 21.6678C15.02 21.6613 13.9984 21.2019 13.6994 19.9301L12.5381 14.9955L17.0166 10.5181C17.4402 10.0945 17.4402 9.4098 17.0166 8.98622C16.593 8.56264 15.9083 8.56264 15.4848 8.98622L11.0062 13.4637L6.07164 12.3023C4.79981 12.0033 4.33939 10.9817 4.33397 10.1248C4.32856 9.26791 4.77386 8.23987 6.04136 7.92246L20.2471 4.37134C20.35 4.34642 20.4464 4.3355 20.5363 4.3355C20.9436 4.3355 21.2188 4.55979 21.3315 4.67246C21.4669 4.80896 21.7724 5.18921 21.6305 5.75579Z"
		/>
	</svg>
);

export const StarIcon: FC<IconProps> = ({ color }) => (
	<svg viewBox="0 0 26 26">
		<path
			fill={color !== undefined ? color : 'white'}
			d="M23.7109 10.3945C23.4097 9.46172 22.6156 8.79547 21.6384 8.6568L17.251 8.02851L15.2912 4.11664C14.8557 3.2478 13.9782 2.70825 13 2.70825C12.0217 2.70825 11.1442 3.2478 10.7087 4.11664L8.74894 8.02851L4.36145 8.6568C3.38429 8.79655 2.59021 9.46172 2.28904 10.3945C1.99113 11.3196 2.24353 12.3131 2.94553 12.9891L6.11102 16.0311L5.36461 20.3201C5.19886 21.2713 5.58237 22.218 6.36453 22.791C6.81628 23.1225 7.34821 23.2916 7.88338 23.2916C8.28746 23.2916 8.69477 23.1951 9.07069 22.9991L12.9989 20.9646L16.927 22.9991C17.8035 23.4541 18.8402 23.3717 19.6343 22.791C20.4164 22.218 20.7999 21.2713 20.6342 20.3201L19.8878 16.0311L23.0533 12.9891C23.7564 12.3131 24.0088 11.3186 23.7109 10.3945ZM21.5529 11.4269L17.9714 14.8676C17.7114 15.1157 17.5933 15.4787 17.655 15.8351L18.5 20.6916C18.5314 20.8703 18.4383 20.982 18.3538 21.0427C18.292 21.0871 18.1274 21.1791 17.9248 21.0751L13.4983 18.7828C13.1863 18.6203 12.8136 18.6203 12.5016 18.7828L8.07513 21.0751C7.87255 21.1791 7.70788 21.0871 7.64613 21.0427C7.56163 20.9809 7.46846 20.8703 7.49987 20.6916L8.34487 15.8351C8.40662 15.4797 8.28746 15.1167 8.02855 14.8676L4.44705 11.4269C4.31163 11.2969 4.32028 11.155 4.3517 11.0597C4.37878 10.9762 4.45569 10.8312 4.66802 10.8019L9.61672 10.0934C9.9688 10.0424 10.2732 9.82361 10.4314 9.50619L12.6446 5.0873C12.7367 4.90205 12.9068 4.87492 12.9989 4.87492C13.0909 4.87492 13.261 4.90205 13.3531 5.0873L15.5664 9.50619C15.7245 9.82361 16.03 10.0424 16.381 10.0934L21.3308 10.8019C21.5431 10.8312 21.62 10.9762 21.6471 11.0597C21.6796 11.155 21.6883 11.2969 21.5529 11.4269Z"
		/>
	</svg>
);
