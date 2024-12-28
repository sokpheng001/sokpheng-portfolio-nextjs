import { Roboto, Bokor} from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/NavbarComponent";

const ro = Roboto({
  subsets: ["cyrillic"],
  weight:"400"
});

const khFont = Bokor({
  subsets:["latin"],
  weight:"400"
});


export const metadata = {
  title: "Sokpheng - Portfolio",
  description: "Create to handle iT service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ro.className} antialiased`}
      >
        <NavBarComponent/>
        {children}
      </body>
    </html>
  );
}
