import './globals.css';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sideBar';

export const metadata = {
  title: 'GoTrip Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Navbar />

        <div className="flex flex-1 overflow-hidden bg-gray-100">
          <Sidebar />

          <main className="flex-1 overflow-auto p-6 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
