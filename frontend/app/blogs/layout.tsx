import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "molvOps Blogs",
  description: "molvOps blogs page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}