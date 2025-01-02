import "./globals.css";

export const metadata = {
  title: "Nimbus Store",
  description: "Nimbus Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Pastikan tema default adalah light
              document.documentElement.classList.remove('dark');
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="font-instrument">{children}</body>
    </html>
  );
}
