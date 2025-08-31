const featuredProducts = [
  {
    id: 1,
    brand: "NIKE",
    price: "$400",
    image: "/white-nike-sneakers.png",
  },
  {
    id: 2,
    brand: "NIKE",
    price: "$500",
    image: "/black-nike-running-shoes.png",
  },
  {
    id: 3,
    brand: "NIKE",
    price: "$600",
    image: "/gray-nike-athletic-shoes.png",
  },
  {
    id: 4,
    brand: "NIKE",
    price: "$1000",
    image: "/gray-nike-athletic-shoes.png",
  },
]

export function FeaturedProductsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-black mb-12">/ FEATURED PRODUCTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative bg-gray-300 aspect-square mb-4 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.brand} product`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-black font-medium mb-1">{product.brand}</h3>
                <p className="text-red-500 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
