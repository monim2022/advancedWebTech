import Nav from "./components/NavBar";
import Footer from "./components/footer" 
export default function Layout({ children }) {
        return (
          <>
            <Nav />
            <main>{children}</main>
            <Footer />
          </>
        )
      }
  
  