process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ["avatars.githubusercontent.com"],
    path: "/_next/image",
    loader: "default",
  },
};

window.matchMedia =
  window.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
