import Header from "./Header"
import Footer from "./Footer"
import CategoryNav from "./CategoryNav"

export default function Layout({ children }: React.PropsWithChildren) {

    return (
        <div className="relative flex flex-col gap-2">
            <Header />
            <CategoryNav/>
            {children}
            <Footer />
        </div>
    )
}