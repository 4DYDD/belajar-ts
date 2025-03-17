import { objeknya } from "../src/utils/object";

describe("\ntes builder", () => {
  it("harusnya sih dia error jika kuganti datanya menjadi tidak sama dengan typenya", () => {
    expect(objeknya).toStrictEqual({
      id: 1,
      name: "objeklah",
    });
  });

  // it("nyobain class", () => {
  //   class Employee {
  //     name: string;

  //     constructor(name: string) {
  //       this.name = name;
  //     }
  //   }

  //   class OtherEmployee {
  //     nama: string;
  //     constructor(name: string) {
  //       this.nama = name;
  //     }
  //   }

  //   function sayHello(employee: Employee): void {
  //     console.log(`Hello ${employee.name}`);
  //   }

  //   sayHello(new OtherEmployee("joko"));
  // });
});
