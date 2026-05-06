import "./globals.css";

export const metadata = {
  title: "Awesome Agent Skills for Solo Founders",
  description:
    "A multilingual knowledge base of 81 curated AI agent skills, startup playbooks, and agent infrastructure repos for solo founders.",
  openGraph: {
    title: "Awesome Agent Skills for Solo Founders",
    description:
      "81 curated skills across business diagnostics, YC playbooks, GTM, team workflows, and agent infrastructure.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
