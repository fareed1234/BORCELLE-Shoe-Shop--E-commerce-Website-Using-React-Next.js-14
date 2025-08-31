import { Header } from "@/components/header"
import { HeroSection } from "@/components/landing-page/hero-section"
import { BestSellerSection } from "@/components/landing-page/best-seller-section"
import { FeaturedProductsSection } from "@/components/landing-page/featured-products-section"
import { SneakersCollectionSection } from "@/components/landing-page/sneakers-collection"
import { NewProducts } from "@/components/landing-page/new-products"
import { QouteSection } from "@/components/landing-page/quote-section"
import { BlogSection } from "@/components/landing-page/blog-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BestSellerSection />
        <FeaturedProductsSection />
        <SneakersCollectionSection />
        <NewProducts/>
        <QouteSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
