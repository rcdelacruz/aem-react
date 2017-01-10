import * as React from "react";
import AemComponent from "aem-react-js/component/AemComponent";
require('./footer.less');

export default class Footer extends AemComponent<any, any> {


  public render(): React.ReactElement<any> {
    return (

      <div className="footer">
        <ul>
          <li><a class="title" href="http://www.globe.com.ph/about-globe">Globe Telecom</a></li>
          <li><a href="http://www.globe.com.ph/corporate-governance">Corporate Governance</a></li>
          <li><a href="http://www.globe.com.ph/investor-relations">Investor Relations</a></li>
          <li><a href="http://www.globe.com.ph/annual-report">Sustainability</a></li>
          <li><a href="http://www.globe.com.ph/careers">Careers</a></li>
          <li><a href="http://newsroom.globe.com.ph">News</a></li>
          <li><a href="http://www.globe.com.ph/go">Go!</a></li>
        </ul>
        <ul>
          <li><a class="title" href="http://www.globe.com.ph/about-globe">Products and Services</a></li>
          <li> <a href="http://www.globe.com.ph/postpaid">Postpaid Plans</a></li>
          <li><a href="http://www.globe.com.ph/prepaid">Prepaid Promos</a></li>
          <li> <a href="http://www.globe.com.ph/surf">Mobile Internet</a></li>
          <li><a href="http://broadband.globe.com.ph/">Broadband</a></li>
          <li> <a href="http://tattoo.globe.com.ph/" target="_blank">Mobile WiFi and Gadgets</a></li>
          <li> <a href="http://www.globe.com.ph/gcash">GCash</a></li>
          <li> <a name="visittheshopbutton" id="shopbutton-footer" href="http://shop.globe.com.ph/">Online Shop</a></li>
        </ul>
        <ul>
          <li><a class="title" href="http://business.globe.com.ph"> Business</a></li>
          <li><a href="http://business.globe.com.ph/">Enterprise and Wholesale</a></li>
          <li><a href="http://mybusiness.globe.com.ph/">Small and Medium Business</a></li>
        </ul>
        <ul>
          <li><a class="title" href="http://www.globe.com.ph/worry-free-guarantee"> Globe Guarantee</a></li>
          <li><a href="http://www.globe.com.ph/terms-and-conditions">Terms and Conditions</a></li>
          <li><a href="http://www.globe.com.ph/privacy-policy">Privacy Policy</a></li>
          <li> <a href="http://www.globe.com.ph/aup">Fair Use Policy</a></li>
        </ul>
        <ul>
          <li><a class="title" href="http://www.globe.com.ph/contactus">Contact Us</a></li>
          <li><a href="http://www.globe.com.ph/help">Help and Support</a></li>
          <li><a href="http://community.globe.com.ph/">Ask the Community</a></li>
          <li><a href="http://www.globe.com.ph/store-locator ">Store Locator</a></li>
        </ul>
      </div>

    );
  }
}
