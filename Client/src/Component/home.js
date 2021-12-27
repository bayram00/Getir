import { useEffect, useState } from 'react';
import "../css/Home.css";


const Home = () => {

    const [img] = useState([
        "https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg",
        "https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg",
        "https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg",
        "https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
    ])

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter > img.length - 2) {
                setCounter(0)
            } else {
                setCounter(counter + 1);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div>
            <div className="slider">

                <div className="sliderContent">
                    <div className="sliderContentCenter">
                        <div className="SliderLeft">
                            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                            <h3>Dakikalar içinde kapınızda</h3>
                        </div>
                        <div className="SliderRight">
                            <div className="formTitle">
                                <h4>Giriş yap veya kayıt ol</h4>
                            </div>

                            <div className="selcetNum">
                                <select name="fragment" id="fragment">
                                    <option value="Tr">TR</option>
                                    <option value="Eng">Eng</option>
                                    <option value="it">İt</option>
                                    <option value="Eur">Eur</option>
                                </select>

                                <div className="inp">
                                    <span>Telefon Numarası</span>
                                    <input type="tel" maxLength="11" alt="" />
                                </div>
                            </div>
                            <input className="submit" type="submit" value="Telefon Numaraı ile Devam et" />
                            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1408812229445575&kid_directed_site=0&app_id=1408812229445575&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D1408812229445575%26auth_type%26cbt%3D1632131937449%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2f9789747e615%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%26client_id%3D1408812229445575%26display%3Dpopup%26domain%3Dgetir.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgetir.com%252F%26locale%3Den_US%26logger_id%3Df1bf9b4c82c45c%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df225393990dd15%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%2526frame%253Dfac35146c8a654%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dfalse%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv2.3%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df225393990dd15%26domain%3Dgetir.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgetir.com%252Ff1857292918adb%26relation%3Dopener%26frame%3Dfac35146c8a654%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=tr_TR&pl_dbl=0" target="_blank" rel="noopener noreferrer" className="UserSocilaMedia">
                                <i class="fab fa-facebook"></i>
                                <p>Facebook ie devam et</p>
                            </a>
                        </div>
                    </div>
                </div>
                <img className="imgshow" src={img[counter]} alt="" />

            </div>
            <div className="Mobil-banner">
                <img src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg" alt="" />
            </div>

            <div className="mobile-Form">
                <div className="SliderRight">
                    <div className="formTitle">
                        <h4>Giriş yap veya kayıt ol</h4>
                    </div>

                    <div className="selcetNum">
                        <select name="fragment" id="fragment">
                            <option value="Tr">TR</option>
                            <option value="Eng">Eng</option>
                            <option value="it">İt</option>
                            <option value="Eur">Eur</option>
                        </select>

                        <div className="inp">
                            <span>Telefon Numarası</span>
                            <input type="tel" maxLength="11" alt="" />
                        </div>
                    </div>
                    <input className="submit" type="submit" value="Telefon Numaraı ile Devam et" />
                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1408812229445575&kid_directed_site=0&app_id=1408812229445575&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D1408812229445575%26auth_type%26cbt%3D1632131937449%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2f9789747e615%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%26client_id%3D1408812229445575%26display%3Dpopup%26domain%3Dgetir.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgetir.com%252F%26locale%3Den_US%26logger_id%3Df1bf9b4c82c45c%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df225393990dd15%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%2526frame%253Dfac35146c8a654%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dfalse%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv2.3%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df225393990dd15%26domain%3Dgetir.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgetir.com%252Ff1857292918adb%26relation%3Dopener%26frame%3Dfac35146c8a654%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=tr_TR&pl_dbl=0" target="_blank" rel="noopener noreferrer" className="UserSocilaMedia">
                        <i class="fab fa-facebook"></i>
                        <p>Facebook ie devam et</p>
                    </a>
                </div>
            </div>



        </div>
    )
}

export default Home;