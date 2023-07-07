import Layout from "../../components/layout"
import { ItemData } from "../../items/items.interface"

export default function Sell({
  item
} : {item: ItemData}) {
  return (
    <Layout >
      <div>
        {item.course}
      </div>
      <div>
        {item.title}
      </div>
      <div>
        {item.price}
      </div>
    </Layout>
  )
};

import {getAllPostIds, getItemData} from "../../lib/item"
// Generates `/product/1` and `/product/2`
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}: {params: ItemData}){
  const item = await getItemData(params.id);
  return {
    props: {item}
  }
}