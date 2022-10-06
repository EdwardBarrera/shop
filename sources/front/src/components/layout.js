import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return <div className='flex flex-col h-full'>
        <Header />
        <main className='py-3 flex-[1_0_auto]'>
            <div className='max-w-[1100px] mx-auto'>
            {props.children}
            </div>
        </main>
        <Footer />
    </div>
}

export default Layout