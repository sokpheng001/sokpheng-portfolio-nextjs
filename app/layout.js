import { Roboto } from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/NavbarComponent";

const ro = Roboto({
  subsets: ["cyrillic"],
  weight: "400",
});

export const metadata = {
  title: "Sokpheng - Portfolio",
  description: "Create to handle iT service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ro.className} antialiased`}>
        <NavBarComponent />
        {children}
        <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
