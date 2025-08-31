import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"


export function Footer() {
  return (
    <footer className="relative bg-background py-16 overflow-hidden">
      {/* Background with overlay */}
      
        <div className="absolute inset-0 bg-black/80"></div>
      

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          <div className="lg:w-80 flex justify-center lg:justify-start items-center">
            <Link href="/" className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                <img
                  src="/borcelle-logo.png"
                  alt="BORCELLE Logo"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <span className="ml-4 text-2xl font-bold text-foreground">BORCELLE</span>
            </Link>
          </div>

          {/* Center Section - Order Form */}
          <div className="flex-1 flex flex-col items-center text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">ORDER NOW</h2>

            {/* Contact Form - Centered */}
            <div className="space-y-4 w-full max-w-md">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
              />
              <Input
                type="tel"
                placeholder="Phone No."
                className="bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 font-semibold">
                SUBMIT ORDER
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="lg:w-80 space-y-6 text-foreground lg:text-left text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                Turgut Ozal Millet Cd.
                <br />
                23456 Sizo Maydani 697
                <br />
                Istanbul, Turkey
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">0232 6582 65 55</p>
              <p className="text-muted-foreground">0505 5488 96 84</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">borcelle@example.com</p>
              <p className="text-muted-foreground">borcelle@goldeninteractive.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
