function navbar() {
    return `  <div id="topnav">
    <div id="topnavbox1">
        <div class="dropdown">
            <div class="dropbtn">
                <div><i class="fa fa-map-marker" style="font-size:18px"></i></div>
                <div>IN</div>
                <div><i class="fa fa-angle-down" style="font-size:14px; color:gray"></i></div>
            </div>
            <div class="dropdown-content">
                <div id="navline">
                    <div><a href="#">United State (US)</a></div>
                    <div><a href="#">Canada (CA)</a></div>
                    <div style="margin-bottom:10px;"><a href="#">China (CN)</a></div>
                    <div class="pipe"></div>
                    <div><a href="#">Australia(AU)</a></div>
                    <div><a href="#">Brazil (BR)</a></div>
                    <div><a href="#">France (FR)</a></div>
                    <div><a href="#">Germany (DE)</a></div>
                    <div><a href="#">Japan (JP)</a></div>
                    <div><a href="#">India (IN)</a></div>
                    <div><a href="#">Indonesia (ID)</a></div>
                    <div><a href="#">Italy (IT)</a></div>
                    <div><a href="#">Malaysia (MY)</a></div>
                    <div><a href="#">Netherlands (NL)</a></div>
                    <div><a href="#">Poland(PL)</a></div>
                    <div><a href="#">Russia (RU)</a></div>
                    <div><a href="#">Serbia (RS)</a></div>
                    <div><a href="#">Spain (ES)</a></div>
                    <div><a href="#">South Korea (KR)</a></div>
                    <div><a href="#">Switzerland(SZ)</a></div>
                    <div><a href="#">Taiwan Region (TW)</a></div>
                    <div><a href="#">Turkey (TR)</a></div>
                    <div><a href="#">United Kingdom (UK)</a></div>
                </div>
            </div>

        </div>

        <div class="dropdown">
            <div class="dropbtn">
                <div>EN</div>
                <div><i class="fa fa-angle-down" style="font-size:14px; color:gray"></i></div>
            </div>
            <div class="dropdown-content2">
                <div id="navline">
                    <div class="sizeb"><b>FULL TRANSLATION</b></div>
                    <div><a href="#">English</a></div>
                    <div><a href="#">Chinese (中文)</a></div>
                    <div class="sizeb"><b>PARTIAL TRANSLATAION</b></div>
                    <div><a href="#">French (Français)</a></div>
                    <div><a href="#">German (Deutsch)</a></div>
                    <div><a href="#">Japanese (日本語)</a></div>
                    <div><a href="#">Korean (한국어)</a></div>
                    <div><a href="#">Spanish (Español)</a></div>
                    <div><a href="#">Russian (русский)</a></div>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <div class="dropbtn">
                <div>₹INR</div>
                <div><i class="fa fa-angle-down" style="font-size:14px; color:gray"></i></div>
            </div>
            <div class="dropdown-content3">
                <div id="navline1">
                    <div class="leftcur">
                        <div class="sizeb1"><b>POPULAR CURRENCIES</b></div>
                        <br>
                        <div><a href="#">US Dollar ($USD)</a></div>
                        <div><a href="#">Chinese Yuan Renminbi (¥CNY)</a></div>
                        <div><a href="#">Euro (€EUR)</a></div>
                        <div><a href="#">Canadian Dollar ($CAD)</a></div>
                        <div><a href="#">Pound Sterling (£GBP)</a></div>
                        <div><a href="#">Japanese Yen (¥JPY)</a></div>
                        <div><a href="#">South Korean Won (₩KRW)</a></div>
                        <div><a href="#">Russian Ruble (RUB)</a></div>
                        <div><a href="#">Emirati Dirham (AED)</a></div>
                    </div>
                    <div class="midcur">
                        <div class="sizeb1"><b>MORE OPTIONS</b></div>
                        <br>
                        <div><a href="#">Australian Dollar ($AUD)</a></div>
                        <div><a href="#">Brazilian Real ($BRL)</a></div>
                        <div><a href="#">Danish Krone (DKK)</a></div>
                        <div><a href="#">Hong Kong Dollar ($HKD)</a></div>
                        <div><a href="#">Indian Rupee (₹INR)</a></div>
                        <div><a href="#">Israeli Shekel (₪ILS)</a></div>
                        <div><a href="#">Kuwaiti Dinar (KWD)</a></div>
                        <div><a href="#">Mexican Peso ($MXN)</a></div>
                        <div><a href="#">Polish Zloty (PLN)</a></div>
                    </div>
                    <div class="rightcur">
                        <br><br><br>
                        <div><a href="#">Saudi Arabian Riyal (SAR)</a></div>
                        <div><a href="#">Singapore Dollar (SGD)</a></div>
                        <div><a href="#">South African Rand (ZAR)</a></div>
                        <div><a href="#">Swedish Krona (SEK)</a></div>
                        <div><a href="#">Swiss Franc (CHF)</a></div>
                        <div><a href="#">Taiwanese New Dollar ($TWD)</a></div>
                        <div><a href="#">Turkish Lira (TRY)</a></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div id="topnav_mid"><a href="#">FREE express international delivery + EASY returns</a></div>
    <div id="topnav_last">
        <div class="dropdown">
            <div class="dropbtn">
            <div class="hidename">
            <label for="SignReg" class="cursor-pointer"><span onclick="goToSignInPage()">Sign In</span> / <span onclick="goToRegisterPage()">Register</span></label>
            </div>
                <div><i class="fa fa-angle-down" style="font-size:14px; color:gray"></i></div>
            </div>
            <div class="dropdown-content4">
                <div id="navline">
                    <div><a href="#"> Account</a></div>
                    <div><a href="#">Orders</a></div>
                    <div><a href="#">My Loyalty</a></div>
                    <div><a href="#">My Reviews</a></div>
                    <div><a href="#">My Hearts</a></div>
                    <div><a href="#">My Wish List</a></div>
                    <div><a href="#">My Designers</a></div>
                    <div class="outbtn"></div>
                </div>
            </div>
        </div>
        <div><i class="fa fa-heart" style="font-size:20px;color: rgb(252,176,139);"></i></div>
        <div id="cart" onclick="gotoCartPage()"><img
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/_global/images/topnav/bag_1-0.png">
        </div>
        <div id="cartcount"></div>
    </div>
</div>
<div id="logo">
    <center> <img id="logoimg"
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png">
    </center>
</div>

<div class="nav-bar-section">
    <ul class="ul-navbar">
        <li class="Wnew samePrrodList"><span>WHAT'S NEW</span></li>
        <li class="Ofav samePrrodList"><span>OUR FAVORITES</span></li>
        <li class="Desig samePrrodList"><span>DESIGNERS</span></li>
        <li class="Clot samePrrodList"><span>CLOTHING</span></li>
        <li class="Acti samePrrodList"><span>ACTIVE</span></li>
        <li class="Shoes samePrrodList"><span>SHOES</span></li>
        <li class="Bags samePrrodList"><span>BAGS</span></li>
        <li class="Acce samePrrodList"><span>ACCESSORIES</span></li>
        <li class="Men samePrrodList"><span>MEN</span></li>
        <li class="Sale samePrrodList"><span>SALE</span></li>
        <button id="search-icon"><i class="fa fa-search"></i></button>
    </ul>
</div>`
}

export default navbar;