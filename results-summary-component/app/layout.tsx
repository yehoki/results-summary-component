import './globals.css';

export const metadata = {
  title: 'Results Summary Component',
  description: 'Frontend Mentor challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
