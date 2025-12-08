import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }: React.PropsWithChildren) {

    return (
        <div className="relative flex flex-col gap-2">
            <Header />
            {children}
            <Footer />
        </div>
    )
}