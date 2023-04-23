export const Footer = () => {
  return (
    <div className="footer pt_60">
      <div className="container">
        <div className="newsletters mt_30 mb_50">
          <div className="row">
            <div className="col-sm-6">
              <div className="news-head pull-left">
                <h2>Follow Our Updates !</h2>
                <div className="new-desc">
                  Be the First to know about our Fresh Arrivals and much more!
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="news-form pull-right">
                <form onSubmit={(e) => console.log(e)} method="post">
                  <div className="form-group required">
                    <input
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className="form-control input-lg"
                      required
                      type="email"
                    />
                    <button type="submit" className="btn btn-default btn-lg">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Information</h6>
            <ul>
              <li>
                <a href="https://html.lionode.com/darklook/#">About Us</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">Privacy Policy</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Services</h6>
            <ul>
              <li>
                <a href="https://html.lionode.com/darklook/#">Returns</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">Site Map</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">Wish List</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">My Account</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">Order History</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Extras</h6>
            <ul>
              <li>
                <a href="https://html.lionode.com/darklook/#">Brands</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">
                  Gift Certificates
                </a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">Affiliates</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">Specials</a>
              </li>
              <li>
                <a href="https://html.lionode.com/darklook/#">Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Contacts</h6>
            <ul>
              <li>Warehouse &amp; Offices,</li>
              <li>12345 Street name, California USA</li>
              <li>(+024) 666 888</li>
              <li>yourid@domain.com</li>
              <li>
                <a href="https://html.lionode.com/darklook/#">
                  www.yoursite.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt_60 ptb_20">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="https://html.lionode.com/darklook/#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://html.lionode.com/darklook/#">
                      <i className="fa fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="https://html.lionode.com/darklook/#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://html.lionode.com/darklook/#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://html.lionode.com/darklook/#">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="copyright-part text-center">
                @ 2019 All Rights Reserved Darklook
              </div>
            </div>
            <div className="col-sm-4">
              <div className="payment-icon text-right">
                <ul>
                  <li>
                    <i className="fa fa-cc-paypal " />
                  </li>
                  <li>
                    <i className="fa fa-cc-visa" />
                  </li>
                  <li>
                    <i className="fa fa-cc-discover" />
                  </li>
                  <li>
                    <i className="fa fa-cc-mastercard" />
                  </li>
                  <li>
                    <i className="fa fa-cc-amex" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
