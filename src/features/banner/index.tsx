import Image from "next/image";

export const Banner = (): JSX.Element => {
    return (
        <>
            <div className="banner">
                <div className="main-banner owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                        <div className="owl-stage"
                             style={{
                                 transform: "translate(0px, 0px, 0px)" ,
                                 transition: 'all 0s ease 0s',
                                 width: '2698px',
                             }}
                        >
                            <div className="owl-item active" style={{ width: '1349px' }}>
                                <div className="item">
                                    <a href="https://html.lionode.com/darklook/#">
                                        <Image src="/assets/images/main_banner1.jpg" alt="main_banner1.jpg" width={1903} height={650} />
                                    </a>
                                </div>
                            </div>
                            <div className="owl-item"
                                 style={{ width: '1349px' }}
                            >
                                <div className="item">
                                    <a href="https://html.lionode.com/darklook/#">
                                        <Image src="/assets/images/main_banner1.jpg" alt="main_banner2.jpg" width={1903} height={650} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-nav disabled">
                        <div className="owl-prev">prev</div>
                        <div className="owl-next">next</div>
                    </div>
                    <div className="owl-dots">
                        <div className="owl-dot active"><span></span></div>
                        <div className="owl-dot"><span></span></div>
                    </div>
                </div>
            </div>
        </>

    )
}