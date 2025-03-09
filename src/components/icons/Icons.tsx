type IconProps = {
  color?: string;
};

export function FacebookIcon({ color = "#fff" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"
        fill={color}
      />
    </svg>
  );
}

export function SoundCloudIcon({ color = "#fff" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="30"
      height="30"
    >
      <path
        d="M30 11C26.398438 11 23 12.789063 21 15.6875L21 36L42.5 36C46.601563 36 50 32.601563 50 28.5C50 24.398438 46.601563 21 42.5 21C42 21 41.5 21.085938 41 21.1875C40.5 15.488281 35.800781 11 30 11 Z M 17 16C16.300781 16 15.601563 16.085938 15 16.1875L15 36L17 36 Z M 18 16L18 36L20 36L20 16.5C19.398438 16.300781 18.699219 16.101563 18 16 Z M 14 16.5C13.300781 16.800781 12.601563 17.101563 12 17.5L12 36L14 36 Z M 11 18.3125C10.199219 19.011719 9.5 19.90625 9 20.90625L9 36L11 36 Z M 6.5 22C6.324219 22.011719 6.148438 22.042969 6 22.09375L6 35.90625C6.300781 36.007813 6.699219 36 7 36L8 36L8 22.09375C7.699219 21.992188 7.300781 22 7 22C6.851563 22 6.675781 21.988281 6.5 22 Z M 5 22.3125C4.300781 22.511719 3.601563 22.8125 3 23.3125L3 34.6875C3.601563 35.085938 4.300781 35.488281 5 35.6875 Z M 2 24.09375C0.800781 25.394531 0 27.101563 0 29C0 30.898438 0.800781 32.605469 2 33.90625Z"
        fill={color}
      />
    </svg>
  );
}

export function ShoppingCartIcon({ color = "#fff" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M4.4160156 1.9960938L1.0039062 2.0136719L1.0136719 4.0136719L3.0839844 4.0039062L6.3789062 11.908203L5.1816406 13.822266C4.3432852 15.161017 5.3626785 17 6.9414062 17L19 17L19 15L6.9414062 15C6.8301342 15 6.8173041 14.978071 6.8769531 14.882812L8.0527344 13L15.521484 13C16.247484 13 16.917531 12.605703 17.269531 11.970703L20.871094 5.484375C21.242094 4.818375 20.760047 4 19.998047 4L5.25 4L4.4160156 1.9960938 z M 7 18 A 2 2 0 0 0 5 20 A 2 2 0 0 0 7 22 A 2 2 0 0 0 9 20 A 2 2 0 0 0 7 18 z M 17 18 A 2 2 0 0 0 15 20 A 2 2 0 0 0 17 22 A 2 2 0 0 0 19 20 A 2 2 0 0 0 17 18 z"
        fill={color}
      />
    </svg>
  );
}

export function StartIcon({ color = "#fff" }: IconProps) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      viewBox="0 0 64 64"
      width="30"
      height="30"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M11 9L11 55L20 55L20 34.097656L49.789062 54.929688L53 53L53 11L49.789062 9.0703125L20 29.902344L20 9L11 9 z"
        fill={color}
      />
    </svg>
  );
}

export function PauseIcon({ color = "#fff" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="250"
      height="250"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
    >
      <path
        d="M6 5L6 19L10 19L10 5L6 5 z M 14 5L14 19L18 19L18 5L14 5 z"
        fill={color}
      />
    </svg>
  );
}

export function PlayIcon({ color = "#fff" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      width="40"
      height="40"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M8,5v14l11-7L8,5z" fill={color} />
    </svg>
  );
}

export function EndIcon({ color = "#fff" }: IconProps) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      viewBox="0 0 64 64"
      width="30"
      height="30"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M44 9L44 29.902344L14.210938 9.0703125L11 11L11 32L11 53L14.210938 54.929688L44 34.097656L44 55L53 55L53 9L44 9 z"
        fill={color}
      />
    </svg>
  );
}

export function UpIcon({ color = "#aaa" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M13 6.171875L3.585938 15.585938L6.414063 18.414063L13 11.828125L19.585938 18.414063L22.414063 15.585938Z"
        fill={color}
      />
    </svg>
  );
}

export function MenuIcon({ color = "#000" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M6 9 A 2.0002 2.0002 0 1 0 6 13L42 13 A 2.0002 2.0002 0 1 0 42 9L6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26L42 26 A 2.0002 2.0002 0 1 0 42 22L6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39L42 39 A 2.0002 2.0002 0 1 0 42 35L6 35 z"
        fill={color}
      />
    </svg>
  );
}

export function XIcon({ color = "#000" }: IconProps) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width="250"
      height="250"
    >
      <path
        d="M5.7070312 4.2929688L4.2929688 5.7070312L10.585938 12L4.2929688 18.292969L5.7070312 19.707031L12 13.414062L18.292969 19.707031L19.707031 18.292969L13.414062 12L19.707031 5.7070312L18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 z"
        fill={color}
      />
    </svg>
  );
}
