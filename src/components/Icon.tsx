import React from 'react';

const IconBootstrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%" fill="currentColor">
      {children}
    </svg>
  );
};

const IconX = () => {
  return (
    <IconBootstrap>
      <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
    </IconBootstrap>
  );
};

const IconCheck = () => {
  return (
    <IconBootstrap>
      <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 011.071 1.05l-3.992 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 01.02-.022z" />
    </IconBootstrap>
  );
};

const IconArrow = ({ left }: { left?: Boolean }) => {
  if (left) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z" />
      </IconBootstrap>
    );
  }

  return null;
};

const IconSearch = () => {
  // twitter
  // return (
  //   <svg viewBox="0 0 24 24" width="100%" height="100%">
  //     <path fill="currentColor" d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
  //   </svg>
  // );

  // bootstrap icon
  return (
    <IconBootstrap>
      <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" />
      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
    </IconBootstrap>
  );
};

const IconHouse = ({ fill }: { fill?: Boolean }) => {
  if (fill) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" />
        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" />
      </IconBootstrap>
    );
  }

  return (
    <IconBootstrap>
      <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" />
      <path fillRule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" />
    </IconBootstrap>
  );
};

const IconChat = ({ squareQuote }: { squareQuote?: Boolean }) => {
  if (squareQuote) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M14 1H2a1 1 0 00-1 1v8a1 1 0 001 1h2.5a2 2 0 011.6.8L8 14.333 9.9 11.8a2 2 0 011.6-.8H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
        <path fillRule="evenodd" d="M7.066 4.76A1.665 1.665 0 004 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 008 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112z" />
      </IconBootstrap>
    );
  }

  return null;
};

const IconBookmark = ({ check, checkFill, x, xFill }: { check?: Boolean, checkFill?: Boolean, x?: Boolean, xFill?: Boolean }) => {
  if (check) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
        <path fillRule="evenodd" d="M10.854 5.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 7.793l2.646-2.647a.5.5 0 01.708 0z" />
      </IconBootstrap>
    );
  }

  if (checkFill) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm6.854 5.854a.5.5 0 00-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z" />
      </IconBootstrap>
    );
  }

  if (x) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
        <path fillRule="evenodd" d="M6.146 5.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z" />
      </IconBootstrap>
    );
  }

  if (xFill) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm2.854 5.146a.5.5 0 10-.708.708L7.293 7 6.146 8.146a.5.5 0 10.708.708L8 7.707l1.146 1.147a.5.5 0 10.708-.708L8.707 7l1.147-1.146a.5.5 0 00-.708-.708L8 6.293 6.854 5.146z" />
      </IconBootstrap>
    );
  }

  return null;
};

const IconBookmarks = ({ fill }: { fill?: Boolean }) => {
  if (fill) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M2 4a2 2 0 012-2h6a2 2 0 012 2v11.5a.5.5 0 01-.777.416L7 13.101l-4.223 2.815A.5.5 0 012 15.5V4z" />
        <path fillRule="evenodd" d="M4.268 1H12a1 1 0 011 1v11.768l.223.148A.5.5 0 0014 13.5V2a2 2 0 00-2-2H6a2 2 0 00-1.732 1z" />
      </IconBootstrap>
    );
  }

  return (
    <IconBootstrap>
      <path fillRule="evenodd" d="M2 4a2 2 0 012-2h6a2 2 0 012 2v11.5a.5.5 0 01-.777.416L7 13.101l-4.223 2.815A.5.5 0 012 15.5V4zm2-1a1 1 0 00-1 1v10.566l3.723-2.482a.5.5 0 01.554 0L11 14.566V4a1 1 0 00-1-1H4z" />
      <path fillRule="evenodd" d="M4.268 1H12a1 1 0 011 1v11.768l.223.148A.5.5 0 0014 13.5V2a2 2 0 00-2-2H6a2 2 0 00-1.732 1z" />
    </IconBootstrap>
  );
};

const IconClock = ({ fill, history }: { fill?: Boolean, history?: Boolean }) => {
  if (fill) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" />
      </IconBootstrap>
    );
  }

  if (history) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M8.515 1.019A7 7 0 008 1V0a8 8 0 01.589.022l-.074.997zm2.004.45a7.003 7.003 0 00-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 00-.439-.27l.493-.87a8.025 8.025 0 01.979.654l-.615.789a6.996 6.996 0 00-.418-.302zm1.834 1.79a6.99 6.99 0 00-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 00-.214-.468l.893-.45a7.976 7.976 0 01.45 1.088l-.95.313a7.023 7.023 0 00-.179-.483zm.53 2.507a6.991 6.991 0 00-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 01-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 01-.401.432l-.707-.707z" />
        <path fillRule="evenodd" d="M8 1a7 7 0 104.95 11.95l.707.707A8.001 8.001 0 118 0v1z" />
        <path fillRule="evenodd" d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" />
      </IconBootstrap>
    );
  }

  return (
    <IconBootstrap>
      <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z" />
      <path fillRule="evenodd" d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" />
    </IconBootstrap>
  );
};

const IconBackspace = ({ fill }: { fill?: Boolean }) => {
  if (fill) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M15.683 3a2 2 0 00-2-2h-7.08a2 2 0 00-1.519.698L.241 7.35a1 1 0 000 1.302l4.843 5.65A2 2 0 006.603 15h7.08a2 2 0 002-2V3zM5.829 5.854a.5.5 0 11.707-.708l2.147 2.147 2.146-2.147a.5.5 0 11.707.708L9.39 8l2.146 2.146a.5.5 0 01-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 01-.707-.708L7.976 8 5.829 5.854z" />
      </IconBootstrap>
    );
  }

  return (
    <IconBootstrap>
      <path fillRule="evenodd" d="M6.603 2h7.08a1 1 0 011 1v10a1 1 0 01-1 1h-7.08a1 1 0 01-.76-.35L1 8l4.844-5.65A1 1 0 016.603 2zm7.08-1a2 2 0 012 2v10a2 2 0 01-2 2h-7.08a2 2 0 01-1.519-.698L.241 8.65a1 1 0 010-1.302L5.084 1.7A2 2 0 016.603 1h7.08zM5.829 5.146a.5.5 0 000 .708L7.976 8l-2.147 2.146a.5.5 0 00.707.708l2.147-2.147 2.146 2.147a.5.5 0 00.707-.708L9.39 8l2.146-2.146a.5.5 0 00-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 00-.707 0z" />
    </IconBootstrap>
  );
};

const IconEmoji = ({ frown }: { frown?: Boolean }) => {
  if (frown) {
    return (
      <IconBootstrap>
        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path fillRule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z" />
        <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
      </IconBootstrap>
    );
  }

  return null;;
};

export {
  IconX,
  IconCheck,
  IconArrow,
  IconSearch,
  IconHouse,
  IconChat,
  IconBookmark,
  IconBookmarks,
  IconClock,
  IconBackspace,
  IconEmoji,
};
