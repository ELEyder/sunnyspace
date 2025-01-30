import Nav from "../components/Nav/Nav";
import { UserLogin } from '../interfaces/IUserLogin';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userLogin: UserLogin = {
    firstName: "John",
    lastName: "Doe",
    status: "Active",
    urlAvatar: "/img/favicon.jpg",
  }

  return (
    <html lang="en">
      <body>
        <Nav userLogin={userLogin} />
        {children}
      </body>
    </html>
  );
}
