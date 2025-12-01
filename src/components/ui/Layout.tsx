import Header from "./Header"
import Footer from "./Footer"
import CategoryNav from "./CategoryNav"

export default function Layout({ children }: React.PropsWithChildren) {

    return (
        <div>
            <Header />
            <CategoryNav/>
            {children}
            <Footer />
        </div>
    )
}