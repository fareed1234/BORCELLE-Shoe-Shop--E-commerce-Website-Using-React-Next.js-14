"use client"

import React from "react"
import Image from "next/image"

const categories = [
  "FOOTWEAR",
  "SHOES",
  "FASHION",
  "JEWELLERY",
  "HEALTH & BEAUTY",
  "HANDBAGS",
  "TOYS & GIFTS",
]

const products = [
  {
    id: 1,
    name: "NIKE",
    price: "$200",
    image: "/white-nike-sneakers.png",
  },
  {
    id: 2,
    name: "NIKE",
    price: "$400",
    image: "/black-nike-running-shoes.png",
  },
  {
    id: 3,
    name: "NIKE",
    price: "$600",
    image: "/gray-nike-athletic-shoes.png",
  },
]

export function BestSellerSection() {
  return (
    <section className="py-16 px-4 bg-[#F6F6F6] shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="border-l-4 border-gray-800 pl-4 mb-8">
              <h2 className="text-sm font-medium text-gray-600 mb-2">BEST SELLER</h2>
              <h3 className="text-2xl font-extrabold text-gray-400">PRODUCTS</h3>
            </div>

            <div className="space-y-0">
              {categories.map((category) => (
                <div
                  key={category}
                  className="bg-gray-800 text-white px-4 py-3 text-sm font-medium cursor-pointer hover:bg-gray-700 transition-colors"
                  style={{ marginBottom: "1px" }}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-gray-200 aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Add to Cart Button - appears on hover */}
                    <div className="absolute inset-0  group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <button className="bg-white text-black px-6 py-2 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                        ADD TO CART
                      </button>
                    </div>
                  </div>

                  {/* Updated text positioning and styling */}
                  <div className="mt-3">
                    <h4 className="font-bold text-base text-black">{product.name}</h4>
                    <p className="text-red-500 font-medium text-sm mt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
