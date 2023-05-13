const { atom } = require("recoil");

export const teamNameState = atom({
  key: "teamNameState",
  default: "",
});
