import "./globals.css";
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="sw"><body>{children}</body></html>;
}
