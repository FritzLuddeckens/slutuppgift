import Alert from "./alert";
import Footer from "./footer";
import AstroLayout from "../layouts/Layout.astro"

export default function Layout({ preview, currentSlug, children }) {
  return (
    <>
      <Alert preview={preview} currentSlug={currentSlug} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
