type Categories = Category[];

interface Category {
  id: number;
  title: string;
}

type Products = Product[];
interface Product {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  inStock: number;
}

interface ProductDetails extends Product{
  fullPrice: number;
  description: string;
}

