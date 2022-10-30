export const pluck = (elements: [{}], filed: string) => {
  return elements.map((element) => element[filed]);
};

pluck([{ name: "taofik" }], "name");
// returns  ['taofik]
// console.log("hello");
