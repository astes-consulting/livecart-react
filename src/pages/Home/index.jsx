import React, {useRef} from "react";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu";
import Footer from "../../components/common/Footer";
import CartCountButton from "../../components/common/CartCountButton";
import {menuItemsData} from "../../components/common/Menu/data";

const Home = () => {
    const menuRef = useRef();

    const handleScrollMenu = () =>
        menuRef.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <div>
            {/* Banner */}
            <Banner handleScrollMenu={handleScrollMenu} />
            {/* Menu */}
            <Menu list={menuItemsData} ref={menuRef} />
            {/* Footer */}
            <Footer />
            {/* Cart */}
            <CartCountButton />
        </div>
    );
}

export default Home;