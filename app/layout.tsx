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
  title: "Bhattarai Bhada Pasal | Gas dilevery - Buddhabhumi-1 pattherkot, kapilvastu",
  description: "Explore Bhattarai Bhada Pasal for the best deals on high-quality kitchenware, utensils, and cookware in Nepal. From non-stick pans to stainless steel pots, find everything you need to enhance your kitchen.",
  keywords: "Gas delivery, butwal gas, bhattarai, kitchenware, utensils, cookware, kitchen essentials, puja samagri, gas delivery, affordable kitchen tools, Bhattarai Bhada Pasal, kitchen shop Nepal",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  themeColor: "#ffffff",
  applicationName: "Bhattarai Bhada Pasal",
  openGraph: {
    title: "Bhattarai Bhada Pasal - Your One-Stop Shop for All Kitchenware Needs",
    description: "Shop high-quality kitchenware, utensils, and cookware at Bhattarai Bhada Pasal. Affordable prices and top-notch quality for your kitchen.",
    url: "https://www.bhattaraibhadapasal.com",
    type: "website",
    images: [
      {
        url: "https://www.bhattaraibhadapasal.com/prev.png",
        width: 1200,
        height: 630,
        alt: "Bhattarai Bhada Pasal Kitchenware",
      },
    ],
  },
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
