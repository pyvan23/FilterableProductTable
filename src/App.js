
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './api/products'

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

