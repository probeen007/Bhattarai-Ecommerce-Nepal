import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";
import { getCurrentUser } from "@/actions/getCurrentUser";


const poppins = Roboto_Condensed({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Bhattarai Ecommerce",
  description: "All kitchenware at one shop",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser()
  //console.log ("user :",currentUser)
  return (
    <html lang="en">
      <body className={`${poppins.className}text-slate-700`}>

        <Toaster toastOptions={{
          style: {
            background: 'rgb(51 65 85)',
            color: '#fff',
          }
        }}
        />

        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html >
  );
}
