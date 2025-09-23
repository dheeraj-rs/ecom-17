import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from '@/contexts/cart-context';
import { AuthProvider } from '@/contexts/auth-context';
import { WishlistProvider } from '@/contexts/wishlist-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Royalwood | Premium Furniture & Home Decor',
  description: 'Discover exquisite handcrafted furniture and luxury home decor at Royalwood. Transform your space with our premium collection of modern and classic designs.',
  keywords: 'furniture, luxury furniture, home decor, handcrafted, premium furniture, modern furniture',
  authors: [{ name: 'Royalwood' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
                  <Header />
                  <main className="min-h-screen">
                    {children}
                  </main>
                  <Footer />
                </div>
                <Toaster 
                  position="top-right"
                  toastOptions={{
                    className: 'bg-gray-800 text-white border border-gold-500',
                    duration: 4000,
                  }}
                />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}