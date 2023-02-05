import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

 export default function FilterableProductTable({ products }) {

//ProductTable necesita filtrar la lista de productos con base en ese estado (texto de búsqueda y valor del checkbox).
//SearchBar necesita mostrar ese estado (texto de búsqueda y valor del checkbox).
//Encuentra su ancestro común: El primer componente ancestro que ambos componentes comparten es FilterableProductTable.
//Decide donde reside el estado: Mantendremos el texto de filtrado y el estado de valor seleccionado en FilterableProductTable.



  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}