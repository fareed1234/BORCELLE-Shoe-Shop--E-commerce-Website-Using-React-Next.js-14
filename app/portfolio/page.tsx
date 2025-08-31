"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ShoeData {
  id: number
  brand: string
  name: string
  price: string
  category: string
  image: string
  description: string
}

const shoes: ShoeData[] = [
  {
    id: 1,
    brand: "NIKE",
    name: "Air Max 270",
    price: "$150",
    category: "Sports",
    image: "nike1.jpg",
    description: "Comfortable running shoes with air cushioning technology",
  },
  {
    id: 2,
    brand: "ADIDAS",
    name: "Ultraboost 22",
    price: "$180",
    category: "Sports",
    image: "Addidas1.jpg",
    description: "Premium running shoes with boost technology",
  },
  {
    id: 3,
    brand: "NIKE",
    name: "Air Force 1",
    price: "$120",
    category: "Fashion",
    image: "/nike2.jpg",
    description: "Classic basketball shoes with timeless design",
  },
  {
    id: 4,
    brand: "ADIDAS",
    name: "Stan Smith",
    price: "$100",
    category: "Fashion",
    image: "/Addidas2.jpg",
    description: "Iconic tennis shoes with minimalist design",
  },
  {
    id: 5,
    brand: "NIKE",
    name: "Dunk Low",
    price: "$110",
    category: "Vintage",
    image: "/nike3.jpg",
    description: "Retro basketball shoes with vintage appeal",
  },
  {
    id: 6,
    brand: "ADIDAS",
    name: "Gazelle",
    price: "$90",
    category: "Vintage",
    image: "addidas3.jpg",
    description: "Classic suede shoes with retro styling",
  },
  {
    id: 7,
    brand: "NIKE",
    name: "React Element",
    price: "$130",
    category: "Sports",
    image: "/nike4.jpg",
    description: "Modern running shoes with React foam technology",
  },
  {
    id: 8,
    brand: "ADIDAS",
    name: "NMD R1",
    price: "$140",
    category: "Fashion",
    image: "/addidas4.jpg",
    description: "Street-style shoes with boost midsole",
  },
  {
    id: 9,
    brand: "NIKE",
    name: "Blazer Mid",
    price: "$100",
    category: "Vintage",
    image: "/nike5.jpg",
    description: "Classic high-top shoes with vintage basketball heritage",
  },
  {
    id: 10,
    brand: "ADIDAS",
    name: "Superstar",
    price: "$80",
    category: "Fashion",
    image: "/addidas5.jpg",
    description: "Iconic shell-toe shoes with three stripes",
  },
  {
    id: 11,
    brand: "NIKE",
    name: "Cortez",
    price: "$70",
    category: "Vintage",
    image: "/nike6.jpg",
    description: "Classic running shoes with retro design",
  },
  {
    id: 12,
    brand: "ADIDAS",
    name: "Continental 80",
    price: "$90",
    category: "Vintage",
    image: "/addidas6.jpg",
    description: "Retro tennis shoes with vintage court style",
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = React.useState("All")

  const categories = ["All", "Fashion", "Sports", "Vintage"]

  const filteredShoes = activeFilter === "All" ? shoes : shoes.filter((shoe) => shoe.category === activeFilter)

  return (
    <div className="min-h-screen bg-foreground">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Portfolio Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PORTFOLIO</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-red-500 text-foreground"
                    : "bg-gray-200 text-black hover:bg-red-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShoes.map((shoe) => (
            <div key={shoe.id} className="group relative bg-gray-100 aspect-square overflow-hidden cursor-pointer">
              {/* Shoe Image */}
              <img
                src={shoe.image || "/placeholder.svg"}
                alt={`${shoe.brand} ${shoe.name}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="bg-gray-500 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <h3 className="text-xl font-bold mb-2">{shoe.brand}</h3>
                  <h4 className="text-lg mb-2">{shoe.name}</h4>
                  <p className="text-primary font-bold text-lg mb-3">{shoe.price}</p>
                  <p className="text-sm leading-relaxed">{shoe.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
