import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="item-center flex min-h-screen w-full justify-center">
      {children}
    </main>
  );
};

export default Layout;
