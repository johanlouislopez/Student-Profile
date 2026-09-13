import "./globals.css";

export const metadata = {
  title: "Student Profile",
  description: "Simple student profile page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
