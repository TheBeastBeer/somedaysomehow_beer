import clsx from 'clsx';

type IconProps = JSX.IntrinsicElements['svg'] & {
  direction?: 'up' | 'right' | 'down' | 'left';
};

function Icon({
  children,
  className,
  fill = 'currentColor',
  stroke,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
      fill={fill}
      stroke={stroke}
      className={className || 'w-5 h-11 mx-3'}
    >
      {children}
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Menu</title>
      <line x1="3" y1="6.375" x2="17" y2="6.375" strokeWidth="1.25" />
      <line x1="3" y1="10.375" x2="17" y2="10.375" strokeWidth="1.25" />
      <line x1="3" y1="14.375" x2="17" y2="14.375" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        strokeWidth="1.25"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        strokeWidth="1.25"
      />
    </Icon>
  );
}

export function IconArrow({direction = 'right'}: IconProps) {
  let rotate;

  switch (direction) {
    case 'right':
      rotate = 'rotate-0';
      break;
    case 'left':
      rotate = 'rotate-180';
      break;
    case 'up':
      rotate = '-rotate-90';
      break;
    case 'down':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon className={`w-5 h-5 ${rotate}`}>
      <title>Arrow</title>
      <path d="M7 3L14 10L7 17" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconCaret({
  direction = 'down',
  stroke = 'currentColor',
  ...props
}: IconProps) {
  let rotate;

  switch (direction) {
    case 'down':
      rotate = 'rotate-0';
      break;
    case 'up':
      rotate = 'rotate-180';
      break;
    case 'left':
      rotate = '-rotate-90';
      break;
    case 'right':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon
      {...props}
      className={`w-5 h-5 transition ${rotate}`}
      fill="transparent"
      stroke={stroke}
    >
      <title>Caret</title>
      <path d="M14 8L10 12L6 8" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconSelect(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Select</title>
      <path d="M7 8.5L10 6.5L13 8.5" strokeWidth="1.25" />
      <path d="M13 11.5L10 13.5L7 11.5" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconBag(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Bag</title>
      <path d="m17.238997 5.116083h-2.860542v-.73768c0-2.413613-1.963843-4.378403-4.378403-4.378403-2.413613 0-4.378402 1.963842-4.378402 4.378403v.73664l-2.860543.000072c-.340879 0-.618279.2774-.618279.618279v13.646525c0 .340879.2774.61828.618279.61828h14.476943c.34088 0 .618281-.277401.618281-.61828l.000072-13.645576c.000887-.34088-.276529-.618281-.617408-.618281zm-10.99903 3.412578c.340879 0 .618278-.277399.618278-.618279l.000075-1.557702h6.281642v1.557627c0 .340879.2774.618279.61828.618279.340879 0 .618278-.2774.618278-.618279l.000075-1.557627h2.242227v12.409889h-13.238417v-12.409889h2.24128v1.557627c0 .340879.277399.618354.618279.618354zm3.760085-7.291024c1.731836 0 3.140822 1.408929 3.140822 3.140821v.73664h-6.281644v-.736714c0-1.731837 1.409005-3.140824 3.140822-3.140824z" />
    </Icon>
  );
}

export function IconLogin(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Login</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M8,10.6928545 C10.362615,10.6928545 12.4860225,11.7170237 13.9504747,13.3456144 C12.4860225,14.9758308 10.362615,16 8,16 C5.63738499,16 3.51397752,14.9758308 2.04952533,13.3472401 C3.51397752,11.7170237 5.63738499,10.6928545 8,10.6928545 Z"
          fill="currentColor"
        ></path>
        <path
          d="M8,3.5 C6.433,3.5 5.25,4.894 5.25,6.5 C5.25,8.106 6.433,9.5 8,9.5 C9.567,9.5 10.75,8.106 10.75,6.5 C10.75,4.894 9.567,3.5 8,3.5 Z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </Icon>
  );
}

export function IconAccount(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Account</title>
      <path
        fillRule="evenodd"
        d="m9.99975 13.28125c-2.392625 0-4.5785.872499-6.304375 2.326375-1.326625-1.49075-2.132875-3.455-2.132875-5.607625 0-4.660001 3.7775-8.4375 8.4375-8.4375 4.659874 0 8.4375 3.777499 8.4375 8.4375 0 2.15275-.806252 4.117126-2.133125 5.607876-1.725875-1.454001-3.911875-2.326626-6.304625-2.326626zm.00025 6.71875c-2.9445 0-5.59175-1.272625-7.42175-3.29775-1.6025-1.773375-2.57825-4.123875-2.57825-6.70225 0-5.522876 4.477125-10 10-10s10 4.477124 10 10c0 5.522875-4.477125 10-10 10zm0-15.625c-1.958751 0-3.4375 1.7425-3.4375 3.75s1.478749 3.75 3.4375 3.75 3.4375-1.7425 3.4375-3.75-1.478749-3.75-3.4375-3.75z"
      />
    </Icon>
  );
}

export function IconHelp(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Help</title>
      <path d="M3.375 10a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0ZM10 2.125a7.875 7.875 0 1 0 0 15.75 7.875 7.875 0 0 0 0-15.75Zm.699 10.507H9.236V14h1.463v-1.368ZM7.675 7.576A3.256 3.256 0 0 0 7.5 8.67h1.245c0-.496.105-.89.316-1.182.218-.299.553-.448 1.005-.448a1 1 0 0 1 .327.065c.124.044.24.113.35.208.108.095.2.223.272.383.08.154.12.34.12.558a1.3 1.3 0 0 1-.076.471c-.044.131-.11.252-.197.361-.08.102-.174.197-.283.285-.102.087-.212.182-.328.284a3.157 3.157 0 0 0-.382.383c-.102.124-.19.27-.262.438a2.476 2.476 0 0 0-.164.591 6.333 6.333 0 0 0-.043.81h1.179c0-.263.021-.485.065-.668a1.65 1.65 0 0 1 .207-.47c.088-.139.19-.263.306-.372.117-.11.244-.223.382-.34l.35-.306c.116-.11.218-.23.305-.361.095-.139.168-.3.219-.482.058-.19.087-.412.087-.667 0-.35-.062-.664-.186-.942a1.881 1.881 0 0 0-.513-.689 2.07 2.07 0 0 0-.753-.427A2.721 2.721 0 0 0 10.12 6c-.4 0-.764.066-1.092.197a2.36 2.36 0 0 0-.83.536c-.225.234-.4.515-.523.843Z" />
    </Icon>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Search</title>
      <path
        fillRule="evenodd"
        d="M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"
      />
    </Icon>
  );
}

export function IconCheck({
  stroke = 'currentColor',
  ...props
}: React.ComponentProps<typeof Icon>) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Check</title>
      <circle cx="10" cy="10" r="7.25" strokeWidth="1.25" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.04 10.37 2.42 2.41 3.5-5.56"
      />
    </Icon>
  );
}

export function IconXMark({
  stroke = 'currentColor',
  ...props
}: React.ComponentProps<typeof Icon>) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Delete</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Icon>
  );
}

export function IconRemove(props: IconProps) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Remove</title>
      <path
        d="M4 6H16"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.5 6L6 17H14L14.5 6"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6"
        strokeWidth="1.25"
      />
    </Icon>
  );
}

export function IconFilters(props: IconProps) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Filters</title>
      <circle cx="4.5" cy="6.5" r="2" />
      <line x1="6" y1="6.5" x2="14" y2="6.5" />
      <line x1="4.37114e-08" y1="6.5" x2="3" y2="6.5" />
      <line x1="4.37114e-08" y1="13.5" x2="8" y2="13.5" />
      <line x1="11" y1="13.5" x2="14" y2="13.5" />
      <circle cx="9.5" cy="13.5" r="2" />
    </Icon>
  );
}

export function IconLogo(props: IconProps) {
  return (
    <Icon {...props} fill={props.fill || 'currentColor'}>
      <title>Someday Somehow Brewing</title>
      <path d="m9.775476 15.90023c-.760997 0-1.193321.52952-1.193321.956463.484184.170864.674489.580664.674489.990607 0 .85396-.588054 1.725061-2.369431 1.725061-1.331691 0-2.282994-.546518-2.282994-1.503054-.001484-2.960172 6.285785-3.291131 6.171974-6.606659 2.928697.955073 6.65549-.307879 6.604222-3.146496 0-3.791709-6.347219-4.184583-6.347219-6.370729 0-.939392.830147-1.520128 2.282922-1.520128 1.227895 0 1.83331.478233 1.83331 1.280975 0 .529446-.259452.854031-.812859 1.093111.12101.666094.639914.956465 1.227896.956465.709064 0 1.34898-.461161 1.34898-1.451769-.104464-3.488228-7.798954-2.906906-7.678911 1.007679-.000074 3.245188 6.174274 3.586774 6.174274 6.524524 0 .956463-.951229 1.502982-2.282921 1.502982-1.78145 0-2.369431-.871031-2.369431-1.725061 0-.409872.190233-.819816.674489-.99061-.124866-1.284635-2.228313-1.297238-2.587334.114814-1.912549-.944006-5.75805-.613338-5.744028 1.798773 0 .990606.639915 1.451766 1.349054 1.451766.587979 0 1.106885-.290368 1.227893-.956463-.553479-.239077-.812859-.563589-.812859-1.093111 0-.802743.605342-1.280973 1.833237-1.280973 1.076541 0 1.810757.319162 2.119103.866487 1.284505 2.886828-6.236521 2.911372-6.183325 7.024442-.000074 1.929926 1.712153 3.450052 4.583129 3.450052 4.606426.057883 4.953204-3.939567 2.559661-4.099148" />
    </Icon>
  );
}
