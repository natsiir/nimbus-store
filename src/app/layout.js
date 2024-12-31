import "./globals.css";

export const metadata = {
  title: "Nimbus Store",
  description: "Nimbus Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-instrument">{children}</body>
    </html>
  );
}
