"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MagnifiableImage } from "@/components/magnifiable-image"
import { Star, Eye, Heart, Share2 } from "lucide-react"

const categories = ["Fashion", "Footwear", "Handbags", "Health & Beauty", "Shoes", "Toys & Gifts", "Under Garments"]

const featuredProducts = [
  { id: 1, brand: "ADDIDAS", price: "$200.00" },
  { id: 2, brand: "ADDIDAS", price: "$200.00" },
  { id: 3, brand: "ADDIDAS", price: "$200.00" },
  { id: 4, brand: "ADDIDAS", price: "$200.00" },
  { id: 5, brand: "ADDIDAS", price: "$200.00" },
]

const products = [
  {
    id: 1,
    brand: "NIKE",
    price: "$800",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem tempus dignissim nec sed tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    image: "/white-nike-sneakers.png",
  },
  {
    id: 2,
    brand: "NIKE",
    price: "$800",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem tempus dignissim nec sed tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    image: "/black-nike-running-shoes.png",
  },
  {
    id: 3,
    brand: "NIKE",
    price: "$800",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem tempus dignissim nec sed tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    image: "/gray-nike-athletic-shoes.png",
  },
  {
    id: 4,
    brand: "NIKE",
    price: "$800",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem tempus dignissim nec sed tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    image: "/blue-nike-basketball-shoes.png",
  },
  {
    id: 5,
    brand: "NIKE",
    price: "$800",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem tempus dignissim nec sed tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    image: "/white-nike-sneakers.png",
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-black mb-4 tracking-wide">CATEGORIES</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <a href="#" className="text-sm text-black hover:text-background transition-colors">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-6">FILTER BY PRICE</h3>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="px-6 py-2 text-sm bg-transparent text-black">
                  FILTER
                </Button>
                <div className="text-sm text-black">
                  Price: <span className="font-medium">$100 — $500</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-6">FEATURED PRODUCTS</h3>
              <div className="space-y-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <MagnifiableImage
                      src="/addidas-sneakers.png"
                      alt={`${product.brand} product`}
                      className="w-16 h-16 rounded"
                      magnificationLevel={1.5}
                    />
                    <div>
                      <div className="font-medium text-black">{product.brand}</div>
                      <div className="text-sm text-red-500">{product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="space-y-6">
              {products.map((product) => (
                <div key={product.id} className="flex gap-6">
                  <MagnifiableImage
                    src={product.image}
                    alt={`${product.brand} product`}
                    className="w-48 h-48 rounded flex-shrink-0"
                    magnificationLevel={2.5}
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-black font-semibold text-lg">{product.brand}</span>
                    </div>

                    <div className="text-red-500 font-bold text-xl mb-3">{product.price}</div>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>

                    <p className="text-black text-sm mb-6 leading-relaxed">{product.description}</p>

                    <div className="flex items-center gap-2">
                      <Button className="bg-black text-white hover:bg-gray-800 px-6">ADD TO CART</Button>
                      <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent text-black">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent text-red-500">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent text-black">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
