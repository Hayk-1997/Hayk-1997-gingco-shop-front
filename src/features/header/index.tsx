import Image from 'next/image';

export const Header = () => {
    return (
        <header id="header">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <div className="header-top-left">
                                <div className="contact"><span className="hidden-xs hidden-sm hidden-md">Days a week from 9:00 am to 7:00 pm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <ul className="header-top-right text-right">
                                <li className="account"><a href="https://html.lionode.com/darklook/login.html">My
                                    Account</a>
                                </li>
                                <li className="language dropdown"><span className="dropdown-toggle" id="dropdownMenu1"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        role="button">Language <span
                                    className="caret"></span> </span>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="https://html.lionode.com/darklook/#">English</a></li>
                                        <li><a href="https://html.lionode.com/darklook/#">French</a></li>
                                        <li><a href="https://html.lionode.com/darklook/#">German</a></li>
                                    </ul>
                                </li>
                                <li className="currency dropdown"><span className="dropdown-toggle" id="dropdownMenu12"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        role="button">Currency <span
                                    className="caret"></span> </span>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu12">
                                        <li><a href="https://html.lionode.com/darklook/#">€ Euro</a></li>
                                        <li><a href="https://html.lionode.com/darklook/#">£ Pound Sterling</a></li>
                                        <li><a href="https://html.lionode.com/darklook/#">$ US Dollar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <div className="main-search mt_40">
                                <input
                                    id="search-input"
                                    name="search"
                                    value=""
                                    placeholder="Search"
                                    className="form-control input-lg"
                                    autoComplete="off"
                                    type="text"
                                    onChange={(e) => console.log(e.target.value)}
                                />
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-lg">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="navbar-header col-xs-6 col-sm-4">
                            <a className="navbar-brand" href="https://html.lionode.com/darklook/index.html">
                            {/*<img alt="themini" src="./logo.png"/> */}
                            <Image src="/assets/images/logo.png" alt="image" width={233} height={57}/>
                        </a>
                        </div>
                        <div className="col-xs-6 col-sm-4 shopcart">
                            <div id="cart" className="btn-group btn-block mtb_40">
                                <button type="button" className="btn" data-target="#cart-dropdown"
                                        data-toggle="collapse"
                                        aria-expanded="true"><span id="shippingcart">Shopping cart</span><span
                                    id="cart-total">items (0)</span></button>
                            </div>
                            <div id="cart-dropdown" className="cart-menu collapse">
                                <ul>
                                    <li>
                                        <table className="table table-striped">
                                            <tbody>
                                            <tr>
                                                <td className="text-center"><a
                                                    href="https://html.lionode.com/darklook/#">
                                                    <img
                                                        src="./70x84.jpg"
                                                        alt="iPod Classic" title="iPod Classic"/></a></td>
                                                <td className="text-left product-name"><a
                                                    href="https://html.lionode.com/darklook/#">MacBook Pro</a> <span
                                                    className="text-left price">$20.00</span>
                                                    <input className="cart-qty" name="product_quantity" min="1"
                                                           value="1"
                                                           type="number"
                                                           onChange={(e) => console.log(e.target.value)}
                                                    />
                                                </td>
                                                <td className="text-center"><a className="close-cart"><i
                                                    className="fa fa-times-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><a
                                                    href="https://html.lionode.com/darklook/#">
                                                    <img
                                                        src="./70x84.jpg"
                                                        alt="iPod Classic" title="iPod Classic"/></a></td>
                                                <td className="text-left product-name"><a
                                                    href="https://html.lionode.com/darklook/#">MacBook Pro</a> <span
                                                    className="text-left price">$20.00</span>
                                                    <input className="cart-qty" name="product_quantity" min="1"
                                                           value="1"
                                                           type="number"
                                                           onChange={(e) => console.log(e.target.value)}
                                                    />
                                                </td>
                                                <td className="text-center"><a className="close-cart"><i
                                                    className="fa fa-times-circle"></i></a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <td className="text-right"><strong>Sub-Total</strong></td>
                                                <td className="text-right">$2,100.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                                                <td className="text-right">$2.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right"><strong>VAT (20%)</strong></td>
                                                <td className="text-right">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right"><strong>Total</strong></td>
                                                <td className="text-right">$2,122.00</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>
                                        <form action="https://html.lionode.com/darklook/cart_page.html">
                                            <input className="btn pull-left mt_10" value="View cart" type="submit" onChange={(e) => console.log(e.target.value)}/>
                                        </form>
                                        <form action="https://html.lionode.com/darklook/checkout_page.html">
                                            <input className="btn pull-right mt_10" value="Checkout" type="submit" onChange={(e) => console.log(e.target.value)}/>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar">
                        <p>menu</p>
                        <button className="navbar-toggle" type="button" data-toggle="collapse"
                                data-target=".js-navbar-collapse"><span className="i-bar"><i className="fa fa-bars"></i></span>
                        </button>
                        <div className="collapse navbar-collapse js-navbar-collapse">
                            <ul id="menu" className="nav navbar-nav">
                                <li><a href="https://html.lionode.com/darklook/index.html">Home</a></li>
                                <li className="dropdown mega-dropdown"><a href="https://html.lionode.com/darklook/#"
                                                                          className="dropdown-toggle"
                                                                          data-toggle="dropdown">Collection </a>
                                    <ul className="dropdown-menu mega-dropdown-menu row">
                                        <li className="col-md-3">
                                            <ul>
                                                <li className="dropdown-header">Women's</li>
                                                <li><a href="https://html.lionode.com/darklook/#">Unique Features</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Image Responsive</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Auto Carousel</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Newsletter Form</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Four columns</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Four columns</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Good Typography</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="col-md-3">
                                            <ul>
                                                <li className="dropdown-header">Man's</li>
                                                <li><a href="https://html.lionode.com/darklook/#">Unique Features</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Image Responsive</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Four columns</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Auto Carousel</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Newsletter Form</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Four columns</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Good Typography</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="col-md-3">
                                            <ul>
                                                <li className="dropdown-header">Children's</li>
                                                <li><a href="https://html.lionode.com/darklook/#">Unique Features</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Four columns</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Image Responsive</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Auto Carousel</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Newsletter Form</a>
                                                </li>
                                                <li><a href="https://html.lionode.com/darklook/#">Four columns</a></li>
                                                <li><a href="https://html.lionode.com/darklook/#">Good Typography</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="col-md-3">
                                            <ul>
                                                <li id="myCarousel" className="carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner">
                                                        <div className="item active">
                                                            <a
                                                            href="https://html.lionode.com/darklook/#">
                                                                <Image src="/assets/images/menu-banner1.jpg" alt="menu-banner" width={295} height={320}/>
                                                            </a>
                                                        </div>
                                                        <div className="item">
                                                            <a href="https://html.lionode.com/darklook/#"/>
                                                            <Image src="/assets/images/menu-banner2.jpg" alt="menu-banner2.jpg" width={295} height={320}/>
                                                        </div>
                                                        <div className="item">
                                                            <a href="https://html.lionode.com/darklook/#">
                                                                <Image src="/assets/images/menu-banner3.jpg" alt="menu-banner2.jpg" width={295} height={320}/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="https://html.lionode.com/darklook/category_page.html">Shop</a></li>
                                <li><a href="https://html.lionode.com/darklook/blog_page.html">Blog</a></li>
                                <li className="dropdown"><a href="https://html.lionode.com/darklook/#"
                                                            className="dropdown-toggle"
                                                            data-toggle="dropdown">Pages </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="https://html.lionode.com/darklook/cart_page.html">Cart</a></li>
                                        <li><a href="https://html.lionode.com/darklook/checkout_page.html">Checkout</a>
                                        </li>
                                        <li><a href="https://html.lionode.com/darklook/product_detail_page.html">Product
                                            Detail Page</a></li>
                                        <li><a href="https://html.lionode.com/darklook/single_blog.html">Single Post</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="https://html.lionode.com/darklook/about.html">About us</a></li>
                                <li><a href="https://html.lionode.com/darklook/contact_us.html">Contact us</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}