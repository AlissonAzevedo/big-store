interface IRating {
  count: number;
  rate: number;
}

interface IProduct {
  category: string;
  description?: string;
  id?: number;
  image?: string;
  price: number;
  rating?: IRating;
  title: string;
}

export type { IProduct, IRating };
