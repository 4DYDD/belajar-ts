export interface DataBodongnya {
  id: number;
  name: string;
  price: number;
}

const dataBodong: Array<DataBodongnya> = [
  {
    id: 1,
    name: "ayam",
    price: 10000,
  },
  {
    id: 2,
    name: "kerbau",
    price: 100000,
  },
  {
    id: 3,
    name: "bebek",
    price: 20000,
  },
  {
    id: 4,
    name: "ikan",
    price: 10000,
  },
  {
    id: 5,
    name: "cumi",
    price: 50000,
  },
];

export function fetchDataBodong(): Array<DataBodongnya> {
  return dataBodong;
}
