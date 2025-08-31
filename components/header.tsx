"use client"

import { useState } from "react"
import { Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                <img src="/borcelle-logo.png" alt="BORCELLE Logo" className="w-8 h-8 object-cover rounded-full" />
              </div>
              <span className="ml-3 text-xl font-bold text-foreground">BORCELLE</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              BLOG
            </a>
            <Link href="/store" className="text-foreground hover:text-primary transition-colors font-medium">
              SHOP
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              PAGES
            </a>
            <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
              PORTFOLIO
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 bg-input border-border text-foreground"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 text-foreground hover:text-primary"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    ✕
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-primary"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="w-5 h-5" />
                </Button>
              )}
            </div>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
