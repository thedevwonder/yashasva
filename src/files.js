export default {
  docs: {
    title: "index",
    path: "/",
    dirname: "src/docs/index.md",
    children: [
      {
        title: "home",
        path: "/home",
        dirname: "src/docs/home/home.md",
        children: [],
      },
      {
        title: "v1",
        path: "/v1",
        dirname: "src/docs/v1/index.md",
        children: [
          {
            title: "software",
            path: "/software",
            dirname: "src/docs/v1/software/index.md",
          },
        ],
      },
    ],
  },
};
