// app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import RootLayoutClient from './RootLayoutClient';

export const metadata: Metadata = {
  title: 'Jersey Collection',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
