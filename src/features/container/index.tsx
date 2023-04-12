import {SubBanner} from "./subBanner";
import {ProductTab} from "./productTab";
import Image from "next/image";


export const Container = () => {
    return (
        <div className="container">
            {/* =====  SUB BANNER  STRAT ===== */}
            <SubBanner />
            <div className="row ">
                <div className="col-sm-12 mt_30">
                    {/* =====  PRODUCT TAB  ===== */}
                    <ProductTab />
                    {/* =====  PRODUCT TAB  END ===== */}
                </div>
            </div>
            <div className="row">
                <div className="cms_banner">
                    <div className="col-xs-12 mt_60">
                        <div id="subbanner4" className="sub-hover">
                            <div className="sub-img">
                                <a href="https://html.lionode.com/darklook/#">
                                    <Image
                                        src="/assets/images/sub5.jpg"
                                        alt="sub5.jpg"
                                        width={1180} height={300}
                                        className="img-responsive"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mtb_10">
                    {/* =====  PRODUCT TAB  ===== */}
                    <div className="mt_60">
                        <div className="heading-part mb_10 ">
                            <h2 className="main_title">Deals of the Week</h2>
                        </div>
                        <div className="latest_pro box">
                            <div className="latest owl-carousel owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1785px'}}>
                                        <div className="owl-item active" style={{ width: '297.5px' }}>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb">
                                                        <div className="image product-imageblock">
                                                            <a href="https://html.lionode.com/darklook/product_detail_page.html">
                                                                <Image src="/assets/images/product2.jpg" alt="product2.jpg"
                                                                       width={624} height={800}/>
                                                                <Image src="/assets/images/product2-1.jpg" alt="product2-1.jpg"
                                                                       width={624} height={800}/>
                                                            </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="https://html.lionode.com/darklook/#"><span>wishlist</span></a>
                                                                </div>
                                                                <div className="quickview"><a href="https://html.lionode.com/darklook/#"><span>Quick View</span></a>
                                                                </div>
                                                                <div className="compare"><a href="https://html.lionode.com/darklook/#"><span>Compare</span></a>
                                                                </div>
                                                                <div className="add-to-cart"><a href="https://html.lionode.com/darklook/#"><span>Add to cart</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"><span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span></div>
                                                            <h6 data-name="product_name" className="product-name"><a href="https://html.lionode.com/darklook/#" title="Casual Shirt With Ruffle Hem">New LCDScreen and
                                                                HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <div className="owl-prev disabled">prev</div>
                                    <div className="owl-next">next</div>
                                </div>
                                <div className="owl-dots">
                                    <div className="owl-dot active"><span /></div>
                                    <div className="owl-dot"><span /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mtb_10">
                    {/* =====  Blog ===== */}
                    <div id="Blog" className="mt_50">
                        <div className="heading-part mb_10 ">
                            <h2 className="main_title">Latest News</h2>
                        </div>
                        <div className="blog-contain box">
                            <div className="blog owl-carousel owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2380px'}}>
                                        <div className="owl-item active" style={{width: '595px'}}>
                                            <div className="item">
                                                <div className="box-holder">
                                                    <div className="thumb post-img"><a href="https://html.lionode.com/darklook/#">
                                                        <Image src="/assets/images/blog_img_01.jpg" alt="blog_img_01.jpg"
                                                               width={960} height={510}/>
                                                    </a>
                                                        <div className="date-time text-center">
                                                            <div className="day"> 11</div>
                                                            <div className="month">Aug</div>
                                                        </div>
                                                        <div className="post-image-hover" />
                                                        <div className="post-info">
                                                            <h6 className="mb_10 text-uppercase"><a href="https://html.lionode.com/darklook/single_blog.html">Fashions
                                                                fade, style is eternal</a></h6>
                                                            <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                                                                feugiat ligula ullamcorper scelerisque. Morbi eu luctus
                                                                nisl.</p>
                                                            <div className="view-blog">
                                                                <div className="write-comment pull-left"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    0 Comments</a></div>
                                                                <div className="read-more pull-right"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    <i className="fa fa-link" /> read more</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: '595px'}}>
                                            <div className="item">
                                                <div className="box-holder">
                                                    <div className="thumb post-img">
                                                        <a href="https://html.lionode.com/darklook/#">
                                                            <Image src="/assets/images/blog_img_02.jpg" alt="blog_img_02.jpg"
                                                                   width={960} height={510}/>
                                                        </a>
                                                        <div className="date-time text-center">
                                                            <div className="day"> 11</div>
                                                            <div className="month">Aug</div>
                                                        </div>
                                                        <div className="post-image-hover" />
                                                        <div className="post-info">
                                                            <h6 className="mb_10 text-uppercase"><a href="https://html.lionode.com/darklook/single_blog.html">Fashions
                                                                fade, style is eternal</a></h6>
                                                            <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                                                                feugiat ligula ullamcorper scelerisque. Morbi eu luctus
                                                                nisl.</p>
                                                            <div className="view-blog">
                                                                <div className="write-comment pull-left"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    0 Comments</a></div>
                                                                <div className="read-more pull-right"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    <i className="fa fa-link" /> read more</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: '595px'}}>
                                            <div className="item">
                                                <div className="box-holder">
                                                    <div className="thumb post-img"><a href="https://html.lionode.com/darklook/#"> <img src="./blog_img_03.jpg" alt="themini" /> </a>
                                                        <div className="date-time text-center">
                                                            <div className="day"> 11</div>
                                                            <div className="month">Aug</div>
                                                        </div>
                                                        <div className="post-image-hover" />
                                                        <div className="post-info">
                                                            <h6 className="mb_10 text-uppercase"><a href="https://html.lionode.com/darklook/single_blog.html">Fashions
                                                                fade, style is eternal</a></h6>
                                                            <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                                                                feugiat ligula ullamcorper scelerisque. Morbi eu luctus
                                                                nisl.</p>
                                                            <div className="view-blog">
                                                                <div className="write-comment pull-left"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    0 Comments</a></div>
                                                                <div className="read-more pull-right"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    <i className="fa fa-link" /> read more</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: '595px'}}>
                                            <div className="item">
                                                <div className="box-holder">
                                                    <div className="thumb post-img"><a href="https://html.lionode.com/darklook/#"> <img src="./blog_img_04.jpg" alt="themini" /> </a>
                                                        <div className="date-time text-center">
                                                            <div className="day"> 11</div>
                                                            <div className="month">Aug</div>
                                                        </div>
                                                        <div className="post-image-hover" />
                                                        <div className="post-info">
                                                            <h6 className="mb_10 text-uppercase"><a href="https://html.lionode.com/darklook/single_blog.html">Fashions
                                                                fade, style is eternal</a></h6>
                                                            <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                                                                feugiat ligula ullamcorper scelerisque. Morbi eu luctus
                                                                nisl.</p>
                                                            <div className="view-blog">
                                                                <div className="write-comment pull-left"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    0 Comments</a></div>
                                                                <div className="read-more pull-right"><a href="https://html.lionode.com/darklook/single_blog.html">
                                                                    <i className="fa fa-link" /> read more</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <div className="owl-prev disabled">prev</div>
                                    <div className="owl-next">next</div>
                                </div>
                                <div className="owl-dots">
                                    <div className="owl-dot active"><span /></div>
                                    <div className="owl-dot"><span /></div>
                                </div>
                            </div>
                        </div>
                        {/* =====  Blog end ===== */}
                    </div>
                </div>
            </div>
            {/* =====  SUB BANNER END  ===== */}
            <div id="brand_carouse" className="ptb_60 text-center">
                <div className="type-01">
                    <div className="heading-part mb_10 ">
                        <h2 className="main_title">Brand Logo</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="brand owl-carousel ptb_20 owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{transform: 'translate3d(-1365px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '4095px'}}>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand4.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand5.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand6.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand7.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand8.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand9.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand1.png" alt="Disney" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item active" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand2.png" alt="Dell" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item active" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand3.png" alt="Harley" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item active" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand4.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item active" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand5.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item active" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand6.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item active" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand7.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand8.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand9.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand1.png" alt="Disney" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand2.png" alt="Dell" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand3.png" alt="Harley" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand4.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand5.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: '195px'}}>
                                            <div className="item text-center"><a href="https://html.lionode.com/darklook/#"><img src="./brand6.png" alt="Canon" className="img-responsive" /></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <div className="owl-prev">prev</div>
                                    <div className="owl-next">next</div>
                                </div>
                                <div className="owl-dots">
                                    <div className="owl-dot active"><span /></div>
                                    <div className="owl-dot"><span /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}