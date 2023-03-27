import Navigation from "../components/Navigation";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="relative z-10">{children}</div>
      <div className="fixed top-0 bg-no-repeat h-full w-full z-0 bg-cover bg-[url('/distressed-texture.jpg')]"></div>
    </div>
  );
}
