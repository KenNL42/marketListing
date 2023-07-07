import Layout from "../../components/layout"
import { ItemData } from "../../items/items.interface"

export default function Sell({
  item
} : {item: ItemData}) {
  return (
    <Layout >
      <div>
        PICTURES **
      </div>
      <button>
        🚩REPORT
      </button>
      <div>
        COURSE **
      </div>
      <div>
        TITLE **
      </div>
      <div>
        PRICE **
      </div>
      <div>
        ADDITIONAL INFO **
      </div>
      <button>BUY</button>
      <div>
        SELLER`S INFO **
      </div>
    </Layout>
  )
};