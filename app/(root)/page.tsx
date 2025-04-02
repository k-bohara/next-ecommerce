import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'

const Homepage = async () => {
  const latestProducts = await getLatestProducts()
  const formattedProducts = latestProducts.map((product) => ({
    ...product,
    price: product.price.toString(), // Convert `Decimal` to string
    rating: product.rating.toString(), // Convert `Decimal` to string
  }))

  return (
    <>
      <ProductList data={formattedProducts} title='Newest Arrivals' />
    </>
  )
}

export default Homepage
