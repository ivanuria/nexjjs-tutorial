import '@/app/ui/global.css';
import { nanumGothic } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.className} antialiased`}>{children}</body>
    </html>
  );
}
