import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <div>
      <h1>logo</h1>
      <div>menu</div>
      {children}
      <footer>@2023 - 05-20</footer>
    </div>
  );
}
