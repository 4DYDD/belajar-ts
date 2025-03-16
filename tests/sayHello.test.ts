import { sayHello } from "../src/utils/sayHello";

describe("tes Hello", () => {
  it("harusnya berisi panggilan terhadap somwan", () => {
    expect(sayHello("somwan")).toBe("Hello somwan");
  });
});
