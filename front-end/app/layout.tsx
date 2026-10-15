import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';

export const metadata: Metadata = {
  title: {
    template: '%s | Cuddly Waffle',
    default: 'Cuddly Waffle',
  },
  description: 'Make suggestions on the Cuddly Waffle page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}
