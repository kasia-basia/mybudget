
const categ = (categories) =>
  Object.values(categories).map((el) => el.name);

const c = {
  "70v30kNqBHNQBtiDwyos": {
    name: "takeout",
    color: "gold",
  },
  "83VFFqWMJqovaGmjlpez": {
    color: "geekblue",
    name: "clothes",
  },
  R1E7uAr4k1RNr4sZV2W2: {
    name: "restaurants",
    color: "magenta",
  },
  WF71QLEm2dDw88IThWTS: {
    name: "beauty",
    color: "purple",
  },
  kYOyfjuqUCQbQFC8uP7o: {
    color: "lime",
    name: "supplies",
  },
  pvIEYD366SUU3Uw5bK0w: {
    color: "cyan",
    name: "groceries",
  },
  umFOJllbVY7MFao8nmJB: {
    name: "transport",
    color: "volcano",
  },
};

console.log(categ(c));