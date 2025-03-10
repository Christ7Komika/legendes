type IconProps = {
  color?: string;
  className?: string;
};

export function FacebookIcon({ color = "#fff", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function SoundCloudIcon({ color = "#fff", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function ShoppingCartIcon({ color = "#fff", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function StartIcon({ color = "#fff", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function PauseIcon({ color = "#fff", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function PlayIcon({ color = "#fff", className }: IconProps) {
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
      <path d="M8,5v14l11-7L8,5z" fill={color} className={className} />
    </svg>
  );
}

export function EndIcon({ color = "#fff", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function UpIcon({ color = "#aaa", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function MenuIcon({ color = "#000", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function XIcon({ color = "#000", className }: IconProps) {
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
        className={className}
      />
    </svg>
  );
}

export function EmptyIcon({ color = "#000", className }: IconProps) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M90.896,75.311L76.527,46.576c-0.155-0.313-0.475-0.511-0.823-0.511h-0.211h-4.727H50.229H22.835   c0.094-0.545,0.207-1.072,0.355-1.559c0.147-0.487-0.128-1.002-0.616-1.149c-0.484-0.146-1.001,0.128-1.149,0.616   c-0.197,0.653-0.353,1.357-0.463,2.091h-2.732c-0.111,0-0.217,0.026-0.319,0.066c-0.027,0.01-0.054,0.022-0.079,0.035   c-0.079,0.039-0.15,0.086-0.216,0.146c-0.015,0.014-0.031,0.024-0.046,0.038c-0.064,0.067-0.121,0.142-0.164,0.228L3.038,75.311   c-0.004,0.007-0.001,0.014-0.005,0.023c-0.055,0.119-0.092,0.248-0.092,0.387v23.349c0,0.51,0.412,0.922,0.921,0.922h86.211   c0.509,0,0.922-0.412,0.922-0.922V75.721c0-0.139-0.036-0.269-0.093-0.387C90.896,75.324,90.899,75.317,90.896,75.311z    M88.58,74.799h-8.968l-3.245-9.847c0.021-0.076,0.049-0.15,0.049-0.232V50.471L88.58,74.799z M18.897,65.642h55.756l3.021,9.157   H15.879L18.897,65.642z M50.229,47.909h20.538h3.805v15.889h-55.42V47.909H50.229z M17.308,50.891v13.681l-3.37,10.228H5.354   L17.308,50.891z M89.149,98.147H4.783V76.643h9.82h64.342h10.204V98.147z"
          fill={color}
          className={className}
        />
        <path
          d="M64.961,82.385c-1.419,0-2.713,0.607-3.661,1.637H32.669c-0.943-1.029-2.29-1.637-3.696-1.637   c-2.764,0-5.012,2.248-5.012,5.012c0,2.763,2.248,5.011,5.012,5.011c1.407,0,2.754-0.606,3.696-1.637h28.633   c0.946,1.03,2.24,1.637,3.66,1.637c2.763,0,5.011-2.248,5.011-5.011C69.971,84.633,67.723,82.385,64.961,82.385z M28.973,90.563   c-1.746,0-3.168-1.42-3.168-3.167c0-1.748,1.421-3.168,3.168-3.168c1.005,0,1.93,0.463,2.534,1.267   c0.414,0.553,0.633,1.21,0.633,1.901c0,0.69-0.219,1.349-0.633,1.901C30.903,90.102,29.979,90.563,28.973,90.563z M33.744,88.929   c0.052-0.162,0.082-0.328,0.118-0.492c0.017-0.081,0.043-0.162,0.058-0.245c0.042-0.26,0.063-0.526,0.063-0.792   c0-0.27-0.021-0.536-0.063-0.795c-0.015-0.084-0.041-0.166-0.058-0.248c-0.035-0.165-0.066-0.331-0.116-0.489h26.441   c-0.052,0.161-0.081,0.326-0.116,0.489c-0.018,0.082-0.045,0.164-0.059,0.248c-0.043,0.26-0.064,0.525-0.064,0.795   c0,0.266,0.021,0.532,0.064,0.792c0.014,0.083,0.041,0.165,0.059,0.247c0.033,0.166,0.064,0.33,0.116,0.49H33.744z M64.961,90.563   c-1.004,0-1.923-0.459-2.528-1.26c-0.007-0.008-0.012-0.018-0.02-0.025c-0.066-0.09-0.12-0.182-0.176-0.279   c-0.037-0.063-0.076-0.122-0.108-0.185c-0.044-0.09-0.08-0.179-0.116-0.272c-0.023-0.061-0.051-0.118-0.07-0.178   c-0.033-0.105-0.057-0.217-0.078-0.325c-0.012-0.05-0.027-0.1-0.033-0.149c-0.027-0.162-0.039-0.328-0.039-0.493   c0-0.691,0.219-1.349,0.634-1.899c0.604-0.806,1.529-1.269,2.535-1.269c1.746,0,3.167,1.42,3.167,3.168   C68.128,89.144,66.707,90.563,64.961,90.563z"
          fill={color}
          className={className}
        />
        <path
          d="M13.736,41.472c0.155,0.339,0.489,0.54,0.84,0.54c0.128,0,0.257-0.026,0.382-0.083c0.464-0.211,0.668-0.758,0.457-1.222   l-2.303-5.057c-0.21-0.462-0.756-0.668-1.221-0.457c-0.464,0.211-0.668,0.758-0.458,1.221L13.736,41.472z"
          fill={color}
          className={className}
        />
        <path
          d="M17.624,40.418c0.106,0.039,0.215,0.058,0.323,0.058c0.374,0,0.726-0.229,0.864-0.598l1.376-3.68   c0.179-0.477-0.063-1.008-0.54-1.186c-0.478-0.179-1.009,0.064-1.187,0.542l-1.376,3.679C16.904,39.708,17.146,40.24,17.624,40.418   z"
          fill={color}
          className={className}
        />
        <path
          d="M7.203,42.111l3.68,1.376c0.105,0.04,0.215,0.058,0.323,0.058c0.374,0,0.725-0.229,0.864-0.598   c0.179-0.477-0.063-1.008-0.54-1.187L7.85,40.383c-0.477-0.178-1.008,0.065-1.186,0.542C6.484,41.4,6.727,41.933,7.203,42.111z"
          fill={color}
          className={className}
        />
        <path
          d="M24.221,41.559c0.261,0,0.52-0.109,0.703-0.323c0.395-0.463,0.849-0.88,1.347-1.241c0.411-0.298,0.505-0.874,0.206-1.287   c-0.3-0.411-0.875-0.505-1.287-0.206c-0.615,0.446-1.177,0.962-1.669,1.536c-0.33,0.387-0.285,0.968,0.103,1.301   C23.798,41.486,24.01,41.559,24.221,41.559z"
          fill={color}
          className={className}
        />
        <path
          d="M47.262,41.303l1.959,0.633c0.094,0.029,0.188,0.044,0.282,0.044c0.391,0,0.751-0.249,0.878-0.639   c0.156-0.484-0.109-1.003-0.594-1.16l-1.959-0.633c-0.487-0.154-1.004,0.109-1.16,0.593C46.512,40.628,46.777,41.147,47.262,41.303   z"
          fill={color}
          className={className}
        />
        <path
          d="M53.166,43.172c0.676,0.201,1.344,0.394,2,0.572c0.08,0.022,0.163,0.032,0.24,0.032c0.408,0,0.78-0.271,0.891-0.681   c0.133-0.491-0.157-0.998-0.648-1.13c-0.642-0.175-1.295-0.362-1.956-0.56c-0.491-0.149-1.003,0.133-1.146,0.62   C52.4,42.514,52.678,43.027,53.166,43.172z"
          fill={color}
          className={className}
        />
        <path
          d="M59.267,44.674c0.744,0.128,1.457,0.22,2.117,0.275c0.027,0.001,0.053,0.002,0.078,0.002c0.475,0,0.877-0.364,0.916-0.846   c0.043-0.508-0.332-0.952-0.84-0.996c-0.607-0.052-1.268-0.136-1.963-0.255c-0.503-0.082-0.978,0.252-1.063,0.753   C58.427,44.111,58.765,44.588,59.267,44.674z"
          fill={color}
          className={className}
        />
        <path
          d="M29.467,38.517c0.07,0,0.142-0.007,0.214-0.024c0.599-0.143,1.239-0.246,1.902-0.308c0.507-0.047,0.879-0.496,0.832-1.003   c-0.047-0.506-0.496-0.891-1.003-0.832c-0.749,0.07-1.475,0.187-2.156,0.349c-0.496,0.118-0.802,0.614-0.686,1.11   C28.671,38.231,29.05,38.517,29.467,38.517z"
          fill={color}
          className={className}
        />
        <path
          d="M41.395,39.515c0.647,0.178,1.302,0.368,1.957,0.563c0.089,0.025,0.178,0.038,0.265,0.038c0.397,0,0.764-0.258,0.882-0.657   c0.146-0.488-0.131-1.002-0.619-1.148c-0.668-0.2-1.335-0.391-1.996-0.573c-0.49-0.135-0.999,0.153-1.134,0.644   C40.613,38.871,40.903,39.38,41.395,39.515z"
          fill={color}
          className={className}
        />
        <path
          d="M35.507,38.242c0.648,0.071,1.307,0.171,1.962,0.296c0.06,0.011,0.116,0.017,0.176,0.017c0.433,0,0.819-0.308,0.903-0.748   c0.097-0.5-0.23-0.983-0.731-1.079c-0.702-0.136-1.412-0.242-2.108-0.319c-0.508-0.051-0.962,0.31-1.017,0.816   C34.636,37.732,35.001,38.187,35.507,38.242z"
          fill={color}
          className={className}
        />
        <path
          d="M67.115,29.184c-0.835,0.156-1.619,0.543-2.266,1.12c-0.381,0.339-0.413,0.922-0.074,1.301   c0.18,0.205,0.435,0.309,0.688,0.309c0.22,0,0.438-0.078,0.612-0.234c0.389-0.348,0.879-0.59,1.379-0.684   c0.498-0.093,0.83-0.575,0.736-1.075C68.098,29.418,67.614,29.087,67.115,29.184z"
          fill={color}
          className={className}
        />
        <path
          d="M66.953,42.213c-0.477,0.294-1.026,0.524-1.635,0.682c-0.492,0.126-0.79,0.629-0.662,1.123   c0.107,0.416,0.482,0.692,0.893,0.692c0.076,0,0.153-0.009,0.23-0.03c0.789-0.204,1.51-0.506,2.146-0.898   c0.433-0.268,0.565-0.836,0.298-1.27C67.953,42.079,67.385,41.943,66.953,42.213z"
          fill={color}
          className={className}
        />
        <path
          d="M77.227,33.925c-0.13,0.492,0.161,0.997,0.652,1.127c0.08,0.021,0.158,0.031,0.238,0.031c0.407,0,0.78-0.272,0.891-0.686   c0.177-0.665,0.312-1.383,0.405-2.141c0.063-0.505-0.295-0.966-0.8-1.027c-0.504-0.065-0.966,0.294-1.029,0.801   C77.501,32.704,77.381,33.341,77.227,33.925z"
          fill={color}
          className={className}
        />
        <path
          d="M71.118,34.755c0.021,0,0.041,0,0.059-0.001c0.51-0.033,0.896-0.471,0.863-0.979c-0.059-0.88-0.244-1.662-0.551-2.321   c-0.215-0.46-0.764-0.663-1.227-0.445c-0.461,0.216-0.659,0.765-0.443,1.226c0.211,0.451,0.338,1.009,0.381,1.66   C70.23,34.381,70.637,34.755,71.118,34.755z"
          fill={color}
          className={className}
        />
        <path
          d="M64.161,33.891c-0.481,0.154-0.742,0.69-0.594,1.174c0.212,0.7,0.591,1.391,1.128,2.052   c0.182,0.225,0.447,0.341,0.717,0.341c0.203,0,0.409-0.068,0.58-0.206c0.396-0.32,0.457-0.901,0.136-1.296   c-0.386-0.476-0.653-0.957-0.82-1.505C65.148,33.972,64.64,33.738,64.161,33.891z"
          fill={color}
          className={className}
        />
        <path
          d="M69.538,38.31c-0.161-0.058-0.321-0.122-0.482-0.191c-0.461-0.202-1.006,0.01-1.212,0.477   c-0.202,0.467,0.012,1.01,0.479,1.213c0.257,0.111,0.518,0.212,0.778,0.302c0.075,0.263,0.268,0.49,0.541,0.601   c0.112,0.046,0.23,0.068,0.346,0.068c0.254,0,0.5-0.106,0.674-0.295c0.437-0.004,0.822-0.317,0.899-0.762   c0.056-0.316-0.056-0.622-0.272-0.828c0.076-0.26,0.148-0.513,0.214-0.758c0.132-0.492-0.161-0.997-0.653-1.127   c-0.49-0.128-0.996,0.163-1.127,0.655C69.666,37.874,69.605,38.09,69.538,38.31z"
          fill={color}
          className={className}
        />
        <path
          d="M74.66,39.968c0.142,0,0.286-0.033,0.422-0.102c0.697-0.359,1.33-0.848,1.879-1.452c0.34-0.377,0.311-0.959-0.066-1.302   c-0.376-0.344-0.959-0.314-1.302,0.063c-0.398,0.44-0.854,0.793-1.354,1.05c-0.454,0.233-0.633,0.79-0.398,1.242   C74.003,39.785,74.327,39.968,74.66,39.968z"
          fill={color}
          className={className}
        />
        <path
          d="M77.702,28.083c0.012,0.21,0.091,0.396,0.216,0.543c0.14,0.257,0.372,0.449,0.782,0.449c0.509,0,0.925-0.44,0.925-0.949   c0-0.473,0-1.729-1.025-1.729c-0.509,0-0.93,0.48-0.93,0.989c0,0.06,0.006,0.159,0.013,0.319c0.003,0.008,0.003,0.018,0.003,0.026   L77.702,28.083z"
          fill={color}
          className={className}
        />
        <path
          d="M34.981,59.912c0.059,0,0.119-0.008,0.18-0.019c0.676-0.133,1.373-0.301,2.074-0.503c0.489-0.14,0.772-0.65,0.633-1.139   c-0.14-0.489-0.648-0.782-1.141-0.632c-0.65,0.184-1.298,0.34-1.922,0.464c-0.501,0.097-0.826,0.584-0.728,1.082   C34.164,59.606,34.55,59.912,34.981,59.912z"
          fill={color}
          className={className}
        />
        <path
          d="M22.901,56.661c0.5,0.564,1.064,1.073,1.675,1.513c0.164,0.118,0.353,0.174,0.538,0.174c0.287,0,0.567-0.134,0.749-0.383   c0.298-0.413,0.204-0.99-0.209-1.286c-0.501-0.363-0.963-0.781-1.374-1.242c-0.338-0.383-0.92-0.417-1.302-0.078   C22.598,55.698,22.563,56.28,22.901,56.661z"
          fill={color}
          className={className}
        />
        <path
          d="M28.66,59.962c0.693,0.149,1.43,0.245,2.187,0.281c0.016,0.001,0.031,0.001,0.046,0.001c0.488,0,0.896-0.385,0.92-0.876   c0.026-0.509-0.366-0.942-0.875-0.967c-0.657-0.031-1.291-0.114-1.885-0.242c-0.498-0.101-0.988,0.207-1.097,0.705   S28.162,59.854,28.66,59.962z"
          fill={color}
          className={className}
        />
        <path
          d="M21.891,53.315c0.038,0,0.076-0.003,0.113-0.008c0.506-0.06,0.865-0.521,0.803-1.027c-0.085-0.69-0.144-1.352-0.179-1.983   c-0.026-0.508-0.434-0.888-0.97-0.872c-0.508,0.027-0.898,0.461-0.871,0.97c0.036,0.671,0.099,1.375,0.188,2.111   C21.035,52.975,21.432,53.315,21.891,53.315z"
          fill={color}
          className={className}
        />
        <path
          d="M89.728,6.419c-2.453,0-4.611,0.799-6.298,1.723l0.086-0.599c0.005-0.043,0.009-0.088,0.009-0.13   c0-1.365-0.592-3.586-2.508-4.762l0.584-1.355c0.2-0.468-0.017-1.011-0.485-1.211c-0.468-0.2-1.008,0.015-1.21,0.483L79.294,1.99   c-0.405-0.079-0.841-0.129-1.318-0.129c-0.479,0-0.915,0.05-1.321,0.13l-0.609-1.423c-0.201-0.469-0.742-0.684-1.21-0.485   c-0.469,0.202-0.686,0.743-0.484,1.211l0.582,1.357c-1.916,1.175-2.509,3.397-2.509,4.762c0,0.044,0.005,0.087,0.01,0.13   l0.085,0.596c-1.684-0.923-3.84-1.721-6.295-1.721c-4.623,0-6.801,3.813-7.305,5.828c-0.036,0.148-0.036,0.301,0,0.448   c0.504,2.015,2.682,5.824,7.305,5.824c3.079,0,5.691-1.259,7.435-2.403l0.619,4.33c0.03,1.485,1.028,3.627,3.701,3.627   c2.671,0,3.666-2.143,3.696-3.629l0.619-4.331c1.747,1.144,4.361,2.404,7.437,2.404c4.624,0,6.798-3.81,7.302-5.824   c0.036-0.148,0.036-0.301,0-0.448C96.525,10.232,94.352,6.419,89.728,6.419z M75.541,16.27h4.867l-0.247,1.728h-4.372L75.541,16.27   z M77.976,3.706c3.433,0,3.688,3.076,3.707,3.65l-0.678,4.737l-0.324,2.257c0,0.001,0.001,0.002,0,0.004l-0.01,0.071h-5.394   l-0.01-0.074c0,0,0,0,0-0.001l-0.644-4.507c0-0.002-0.001-0.003-0.001-0.004l-0.354-2.483C74.288,6.771,74.55,3.706,77.976,3.706z    M73.366,14.078c-1.473,1.092-4.067,2.596-7.144,2.596c-3.807,0-5.149-3.29-5.45-4.202c0.299-0.897,1.664-4.209,5.45-4.209   c2.72,0,5.06,1.169,6.632,2.238l0.49,3.436L73.366,14.078z M79.831,20.375c0,0.31-0.09,1.855-1.855,1.855   c-1.697,0-1.851-1.425-1.858-1.855c0-0.044-0.003-0.087-0.01-0.13l-0.057-0.402h3.846l-0.059,0.402   C79.833,20.287,79.831,20.33,79.831,20.375z M89.728,16.674c-3.069,0-5.664-1.504-7.146-2.596l0.166-1.146l0.348-2.432   c1.573-1.071,3.918-2.239,6.633-2.239c3.808,0,5.148,3.299,5.447,4.207C94.876,13.382,93.533,16.674,89.728,16.674z"
          fill={color}
          className={className}
        />
      </g>
    </svg>
  );
}

export function VisaCardIcon() {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 -140 780 780"
      enableBackground="new 0 0 780 500"
      version="1.1"
      xmlSpace="preserve"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="780" height="500" fill="#0E4595" />
      <path
        d="m293.2 348.73l33.361-195.76h53.36l-33.385 195.76h-53.336zm246.11-191.54c-10.57-3.966-27.137-8.222-47.822-8.222-52.725 0-89.865 26.55-90.18 64.603-0.299 28.13 26.514 43.822 46.752 53.186 20.771 9.595 27.752 15.714 27.654 24.283-0.131 13.121-16.586 19.116-31.922 19.116-21.357 0-32.703-2.967-50.227-10.276l-6.876-3.11-7.489 43.823c12.463 5.464 35.51 10.198 59.438 10.443 56.09 0 92.5-26.246 92.916-66.882 0.199-22.269-14.016-39.216-44.801-53.188-18.65-9.055-30.072-15.099-29.951-24.268 0-8.137 9.668-16.839 30.557-16.839 17.449-0.27 30.09 3.535 39.938 7.5l4.781 2.26 7.232-42.429m137.31-4.223h-41.232c-12.773 0-22.332 3.487-27.941 16.234l-79.244 179.4h56.031s9.16-24.123 11.232-29.418c6.125 0 60.555 0.084 68.338 0.084 1.596 6.853 6.49 29.334 6.49 29.334h49.514l-43.188-195.64zm-65.418 126.41c4.412-11.279 21.26-54.723 21.26-54.723-0.316 0.522 4.379-11.334 7.074-18.684l3.605 16.879s10.219 46.729 12.354 56.528h-44.293zm-363.3-126.41l-52.24 133.5-5.567-27.13c-9.725-31.273-40.025-65.155-73.898-82.118l47.766 171.2 56.456-0.064 84.004-195.39h-56.521"
        fill="#ffffff"
      />
      <path
        d="m146.92 152.96h-86.041l-0.681 4.073c66.938 16.204 111.23 55.363 129.62 102.41l-18.71-89.96c-3.23-12.395-12.597-16.094-24.186-16.527"
        fill="#F2AE14"
      />
    </svg>
  );
}

export function AirtelIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      enableBackground=" 0 0 264 66"
      viewBox="0 0 264 66"
    >
      <path
        d="M23.6 63.8c3.7-1.3 6.7-3.1 9.5-4.9l.8-.5c3-1.9 6-4 9-6.6 6.7-5.7 10.7-11.4 13-18.2.9-2.8 2.3-8.2.6-13.3-1.2-3.7-3.5-6.8-6.8-9.1-.4-.3-4.6-3.6-12.4-3.6-7.2 0-15.1 2.7-23.4 8.1l-.3.2c-.3.1-.5.3-.7.5-.2.1-.4.3-.6.4-1.7 1.1-3.3 2.4-4.9 3.7C3.8 23.8-.2 29.4 0 34.1c.1 2 1 3.7 2.5 4.9 1.4 1.1 3.2 1.6 5.3 1.6 4.3 0 9-2.3 12.2-4.2.2-.1.4-.3.6-.4.6-.4 1.1-.7 1.7-1.1l.6-.4c4.6-3 9.3-6.1 14.6-7.9 1.4-.5 2.6-.7 3.7-.7.5 0 1.1 0 1.6.2 1.6.4 2.8 1.3 3.5 2.7 1.2 2.5.9 6.3-.7 9.9-2.3 4.8-6.2 9.6-11.7 14.2-2.8 2.3-5.4 4.1-7.6 5.3l-.3.1c-1.1.6-2.3 1.2-3.5 1.7l-.2.1c-.4.1-.7.3-1 .4-5.3 1.4-2.1-3.2-2.1-3.2 1.2-1.4 2.4-2.5 3.6-3.6.7-.7 1.5-1.3 2.2-2.1l.2-.2c.9-.9 2.2-2.2 2.1-4-.1-2.4-2.6-3.9-4.9-3.9h-.2c-2.2 0-4.3 1.3-5.7 2.4-1.4 1.1-2.8 2.7-3.8 4.2-1.4 2.2-4.4 7.8-1.5 12.3 1.2 1.8 3.1 2.7 5.8 2.7 1.9 0 4.1-.4 6.6-1.3zM127.3 0c-4.2 0-7.7 3.3-7.7 7.4 0 4.2 3.3 7.4 7.6 7.4 4.2 0 7.6-3.3 7.6-7.4.1-2-.7-3.9-2.1-5.2-1.4-1.4-3.3-2.2-5.4-2.2zm-6 65.1h11.9V18.6l-11.9 1.9v44.6zm-26-47.3c-5.7 0-10.8 1.6-16.1 4.1l-1.3.7 3.2 7 1.8-.8c3.7-1.6 7.7-2.7 11.3-2.6 4.3.2 6.1 2.1 6.1 6.2v2.4h-7.1c-11.4 0-18.4 5.9-18.6 15C74.6 58.5 82 66 92.3 66c8.3 0 15.4-2.6 20.1-7.3V33.8c-.1-12.1-8.9-16-17.1-16zm4.9 38.5c-1.2.8-3.6 1.5-6.2 1.5-4.8 0-7-3.6-6.9-7.8.1-3.5 2.3-7.4 8.3-7.4h4.8v13.7zM221 57.7c-3.3 0-5.5-1.1-6.9-2.6-2.1-2.3-3.1-6.9-2.8-11.9H237V42c-.2-16.5-6-24-18.5-24-14 0-19.5 12.6-19.6 24.5-.1 7.5 2.8 15.1 8.1 19.4 3.2 2.6 7.7 4.1 12.8 4.1 2.8 0 5.8-.4 8.5-1.2 5.2-1.6 9-4.3 9-4.3l-3.4-6.8c-.7.5-5.9 4-12.9 4zm-2.6-30.9c5.3 0 6.1 5.6 6.1 9.1h-12.9c.2-4.5 2.1-9.1 6.8-9.1zm-75.7.1v38.2h12.2V29.2c1.6-1.5 5-2.8 8.2-3 3-.1 4.9.5 4.9.5l3.4-7.4c-1.3-.6-4.4-1.4-8-1.4-5.4 0-13.4 1.5-20.7 9zm119.5 30.8c-5-.4-6-2.5-6-6.1v-46l-12 2v43.2c0 10.2 5.7 14.6 15.2 14.6 2 0 4.6-.5 4.6-.5v-7.3c0 .2-1.1.2-1.8.1zM186.7 5.8l-12.2 1.9v43.4c0 9.7 5.8 14.3 15.6 14.3 2.3 0 4.5-.4 4.5-.4v-7.2h-1.7c-5.1-.2-6.1-2.9-6.1-6.1V27.2h7.9v-8.6h-7.9l-.1-12.8z"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  );
}

export function MTNIcon() {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1920 1280"
    >
      <defs>
        <style>{".cls-1{fill:none}"}</style>
      </defs>
      <path
        fill="#000404"
        id="MTN_Logo"
        d="M960 320c-353.46 0-640 143.27-640 320s286.54 320 640 320 640-143.27 640-320-286.54-320-640-320Zm0 589.48c-325.56 0-589.48-120.65-589.48-269.48S634.44 370.52 960 370.52 1549.48 491.17 1549.48 640 1285.56 909.48 960 909.48Zm-80.71-325.62v-50.53h180.55v50.53h-65v162.81H944.3V583.86Zm398.49-50.53v213.34h-50.52l-91.63-127v127h-50.52V533.33h50.52l91.63 127v-127ZM640.72 746.67V533.33h50.52l56.13 86.34 56.13-86.34H854v213.34h-50.5V626l-38.32 58.9h-35.62L691.24 626v120.67Z"
      />
      <g id="Digital_clear_space">
        <path
          d="M0 1280c176.73 0 320-286.54 320-640S176.73 0 0 0M1920 0c-176.73 0-320 286.54-320 640s143.27 640 320 640M1600 1280c0-176.73-286.54-320-640-320s-640 143.27-640 320M320 0c0 176.73 286.54 320 640 320s640-143.27 640-320"
          className="cls-1"
        />
        <path d="M0 0h1920v1280H0z" className="cls-1" />
      </g>
    </svg>
  );
}
