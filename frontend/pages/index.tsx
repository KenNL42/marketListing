import ProductTable from "../components/productTable"
import Header from "../components/header"
import FilterBar from "../components/filterBar"

export default function Home() {
  return (
    <main>
      <Header />
      <br></br>
      <FilterBar />
      <button>SELL</button>
      {/* <ProductTable columns={COLUMNS} data={PRODUCTS}/> */}
    </main>
  )
}

/*
const COLUMNS = [
  // {
  //   id: 'id',
  //   name: 'ID',
  //   selector: row => row.id
  // },
  {
    id: 'course',
    name: 'Course',
    selector: row => row.course
  },
  {
    id: 'title',
    name: 'Title',
    selector: row => row.title
  },
  {
    id: 'price',
    name: 'Price',
    selector: row => row.price,
    sortable: true
  },
  // {
  //   id: 'isbn',
  //   name: 'ISBN',
  //   selector: row => row.isbn
  // },
]
*/