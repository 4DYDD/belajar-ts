import { objeknya } from "../src/utils/object";

describe("\ntes builder", () => {
  it("harusnya sih dia error jika kuganti datanya menjadi tidak sama dengan typenya", () => {
    expect(objeknya).toStrictEqual({
      id: 1,
      name: "objeklah",
    });
  });
});
