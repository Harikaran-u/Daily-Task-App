import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Daily Tasks",
  description: "Marks your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
