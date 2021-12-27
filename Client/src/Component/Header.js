import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/header.css'

const Header = () => {



    const [Langshow, setLangshow] = useState(false);

    const [user, setUser] = useState(false);

    const [sıgnup, setSıgnup] = useState(false);





    return (
        <>
            <div className="header">
                <div className="header-content">
                    <ul>
                        <li><Link className="Active" to="/" >getir</Link></li>
                        <li><Link to="/getiryemek" >getiryemek</Link></li>
                        <li><Link to="/getiryemek" >getirbüyük</Link></li>
                        <li><Link to="/getiryemek" >getirsu</Link></li>
                    </ul>

                    <ul className="navigasyonLeft">
                        <li><button onClick={() => setLangshow(!Langshow)}><i class="fas fa-globe"></i> Türkçe (TR)</button></li>
                        <li><button onClick={() => setUser(!user)}><i class="fas fa-user"></i>giriş yap</button></li>
                        <li><button onClick={() => setSıgnup(!sıgnup)}><i class="fas fa-user-plus"></i> Kayıt ol</button></li>
                    </ul>
                </div>

            </div>
            <div className="headerMobile">
                <Link to="/">getir</Link>
            </div>
            <div onClick={()=> {setUser(!user)}} className="headerMobileAddres">
                <div>
                    <p><i class="fas fa-map-marker-alt"></i> Teslimat Adresi Belirle</p>
                    <i class="fas fa-angle-right"></i>

                </div>
            </div>

            {/*Modall Langue*/}

            <Modal isOpen={Langshow} fade={false}  >
                <ModalHeader className="modalHeader" ><p>Dili Değiştir</p>  <Button onClick={() => setLangshow(!Langshow)}>X</Button></ModalHeader>
                <ModalBody className="modalBody">
                    <span>
                        <input type="radio" value="Türkçe" />  <span>Türkçe</span> <img data-testid="main-image" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTUiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMFYxNUgyMFYwSDBaIiBmaWxsPSIjRTMxRDFDIi8+CjxtYXNrIGlkPSJtYXNrMSIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBWMTVIMjBWMEgwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2sxKSI+CjwvZz4KPHBhdGggZD0iTTguNSAxMUMxMC40MzMgMTEgMTIgOS40MzMgMTIgNy41QzEyIDUuNTY3IDEwLjQzMyA0IDguNSA0QzYuNTY3IDQgNSA1LjU2NyA1IDcuNUM1IDkuNDMzIDYuNTY3IDExIDguNSAxMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05LjM3NDI0IDEwLjMwMDJDMTAuOTIwNyAxMC4zMDAyIDEyLjE3NDMgOS4wNDY2IDEyLjE3NDMgNy41MDAyQzEyLjE3NDMgNS45NTM4IDEwLjkyMDcgNC43MDAyIDkuMzc0MjQgNC43MDAyQzcuODI3ODMgNC43MDAyIDYuNTc0MjIgNS45NTM4IDYuNTc0MjIgNy41MDAyQzYuNTc0MjIgOS4wNDY2IDcuODI3ODMgMTAuMzAwMiA5LjM3NDI0IDEwLjMwMDJaIiBmaWxsPSIjRTMwQTE3Ii8+CjxwYXRoIGQ9Ik0xMS4yNzE1IDcuNDk5OEwxNC40MzcyIDguNTI4NDRMMTIuNDgwNyA1LjgzNTQ1VjkuMTY0MTZMMTQuNDM3MiA2LjQ3MTE3TDExLjI3MTUgNy40OTk4WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K" alt="Türkçe" shape="NORMAL" class="style__Image-sc-__sc-1h9bp23-0 tiCVW" />
                    </span>

                    <span>
                        <input type="radio" value="İngilizce" /> <span>İnglizce</span> <img data-testid="main-image" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTUiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMEgyMFYxNUgwVjBaIiBmaWxsPSIjRTMxRDFDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxLjI1VjIuNUgyMFYxLjI1SDBaTTAgMy43NVY1SDIwVjMuNzVIMFpNMCA3LjVWNi4yNUgyMFY3LjVIMFpNMCA4Ljc1VjEwSDIwVjguNzVIMFpNMCAxMi41VjExLjI1SDIwVjEyLjVIMFpNMCAxNVYxMy43NUgyMFYxNUgwWiIgZmlsbD0iI0Y3RkNGRiIvPgo8cmVjdCB3aWR0aD0iMTEuMjUiIGhlaWdodD0iOC43NSIgZmlsbD0iIzJFNDJBNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMzAwMjUgMi43MTcxOEwxLjk2MjY1IDIuMjU1NzdMMi40NzY0NyAyLjYyNTY5SDIuMTg1NTVMMi43NzM4OCAzLjE0NjA2TDIuNTc1MTcgMy44NzU2OUgyLjI2MzkzTDEuOTYxNzIgMy4yMDU1N0wxLjcwMzk5IDMuODc1NjlIMC45MzU1NDdMMS41MjM4OCA0LjM5NjA2TDEuMzAwMjUgNS4yMTcxOUwxLjk2MjY1IDQuNzU1NzdMMi40NzY0NyA1LjEyNTY5SDIuMTg1NTVMMi43NzM4OCA1LjY0NjA2TDIuNTc1MTcgNi4zNzU2OUgyLjI2MzkzTDEuOTYxNzIgNS43MDU1N0wxLjcwMzk5IDYuMzc1NjlIMC45MzU1NDdMMS41MjM4OCA2Ljg5NjA2TDEuMzAwMjUgNy43MTcxOUwxLjk2MjY1IDcuMjU1NzdMMi42MDM1NyA3LjcxNzE5TDIuNDA0MyA2Ljg5NjA2TDIuOTE5MDEgNi4zNzU2OUgyLjY4MTZMMy4yMTI2NSA2LjAwNTc3TDMuNzI2NDcgNi4zNzU2OUgzLjQzNTU1TDQuMDIzODggNi44OTYwNkwzLjgwMDI1IDcuNzE3MTlMNC40NjI2NSA3LjI1NTc3TDUuMTAzNTcgNy43MTcxOUw0LjkwNDMgNi44OTYwNkw1LjQxOTAxIDYuMzc1NjlINS4xODE2TDUuNzEyNjUgNi4wMDU3N0w2LjIyNjQ3IDYuMzc1NjlINS45MzU1NUw2LjUyMzg4IDYuODk2MDZMNi4zMDAyNSA3LjcxNzE5TDYuOTYyNjUgNy4yNTU3N0w3LjYwMzU3IDcuNzE3MTlMNy40MDQzIDYuODk2MDZMNy45MTkwMSA2LjM3NTY5SDcuNjgxNkw4LjIxMjY1IDYuMDA1NzdMOC43MjY0NyA2LjM3NTY5SDguNDM1NTVMOS4wMjM4OCA2Ljg5NjA2TDguODAwMjUgNy43MTcxOUw5LjQ2MjY1IDcuMjU1NzdMMTAuMTAzNiA3LjcxNzE5TDkuOTA0MyA2Ljg5NjA2TDEwLjQxOSA2LjM3NTY5SDkuNzYzOTNMOS40NjE3MiA1LjcwNTU3TDkuMjAzOTkgNi4zNzU2OUg4LjgzMTM2TDguNjU0MyA1LjY0NjA2TDkuMTY5MDEgNS4xMjU2OUg4LjkzMTZMOS40NjI2NSA0Ljc1NTc3TDEwLjEwMzYgNS4yMTcxOUw5LjkwNDMgNC4zOTYwNkwxMC40MTkgMy44NzU2OUg5Ljc2MzkzTDkuNDYxNzIgMy4yMDU1N0w5LjIwMzk5IDMuODc1NjlIOC44MzEzNkw4LjY1NDMgMy4xNDYwNkw5LjE2OTAxIDIuNjI1NjlIOC45MzE2TDkuNDYyNjUgMi4yNTU3N0wxMC4xMDM2IDIuNzE3MThMOS45MDQzIDEuODk2MDZMMTAuNDE5IDEuMzc1NjlIOS43NjM5M0w5LjQ2MTcyIDAuNzA1NTY2TDkuMjAzOTkgMS4zNzU2OUg4LjQzNTU1TDkuMDIzODggMS44OTYwNkw4LjgyNTE3IDIuNjI1NjlIOC41MTM5M0w4LjIxMTcyIDEuOTU1NTdMNy45NTM5OSAyLjYyNTY5SDcuNTgxMzZMNy40MDQzIDEuODk2MDZMNy45MTkwMSAxLjM3NTY5SDcuMjYzOTNMNi45NjE3MiAwLjcwNTU2Nkw2LjcwMzk5IDEuMzc1NjlINS45MzU1NUw2LjUyMzg4IDEuODk2MDZMNi4zMjUxNyAyLjYyNTY5SDYuMDEzOTNMNS43MTE3MiAxLjk1NTU3TDUuNDUzOTkgMi42MjU2OUg1LjA4MTM2TDQuOTA0MyAxLjg5NjA2TDUuNDE5MDEgMS4zNzU2OUg0Ljc2MzkzTDQuNDYxNzIgMC43MDU1NjZMNC4yMDM5OSAxLjM3NTY5SDMuNDM1NTVMNC4wMjM4OCAxLjg5NjA2TDMuODI1MTcgMi42MjU2OUgzLjUxMzkzTDMuMjExNzIgMS45NTU1N0wyLjk1Mzk5IDIuNjI1NjlIMi41ODEzNkwyLjQwNDMgMS44OTYwNkwyLjkxOTAxIDEuMzc1NjlIMi4yNjM5M0wxLjk2MTcyIDAuNzA1NTY2TDEuNzAzOTkgMS4zNzU2OUgwLjkzNTU0N0wxLjUyMzg4IDEuODk2MDZMMS4zMDAyNSAyLjcxNzE4Wk04LjgyNTE3IDUuMTI1NjlMOS4wMjM4OCA0LjM5NjA2TDguNDM1NTUgMy44NzU2OUg4LjcyNjQ3TDguMjEyNjUgMy41MDU3N0w3LjY4MTYgMy44NzU2OUg3LjkxOTAxTDcuNDA0MyA0LjM5NjA2TDcuNTgxMzYgNS4xMjU2OUg3Ljk1Mzk5TDguMjExNzIgNC40NTU1N0w4LjUxMzkzIDUuMTI1NjlIOC44MjUxN1pNNy40NzY0NyA1LjEyNTY5TDYuOTYyNjUgNC43NTU3N0w2LjQzMTYgNS4xMjU2OUg2LjY2OTAxTDYuMTU0MyA1LjY0NjA2TDYuMzMxMzYgNi4zNzU2OUg2LjcwMzk5TDYuOTYxNzIgNS43MDU1N0w3LjI2MzkzIDYuMzc1NjlINy41NzUxN0w3Ljc3Mzg4IDUuNjQ2MDZMNy4xODU1NSA1LjEyNTY5SDcuNDc2NDdaTTUuMjczODggNS42NDYwNkw1LjA3NTE3IDYuMzc1NjlINC43NjM5M0w0LjQ2MTcyIDUuNzA1NTdMNC4yMDM5OSA2LjM3NTY5SDMuODMxMzZMMy42NTQzIDUuNjQ2MDZMNC4xNjkwMSA1LjEyNTY5SDMuOTMxNkw0LjQ2MjY1IDQuNzU1NzdMNC45NzY0NyA1LjEyNTY5SDQuNjg1NTVMNS4yNzM4OCA1LjY0NjA2Wk01LjQ1Mzk5IDUuMTI1NjlINS4wODEzNkw0LjkwNDMgNC4zOTYwNkw1LjQxOTAxIDMuODc1NjlINS4xODE2TDUuNzEyNjUgMy41MDU3N0w2LjIyNjQ3IDMuODc1NjlINS45MzU1NUw2LjUyMzg4IDQuMzk2MDZMNi4zMjUxNyA1LjEyNTY5SDYuMDEzOTNMNS43MTE3MiA0LjQ1NTU3TDUuNDUzOTkgNS4xMjU2OVpNMy44MjUxNyA1LjEyNTY5TDQuMDIzODggNC4zOTYwNkwzLjQzNTU1IDMuODc1NjlIMy43MjY0N0wzLjIxMjY1IDMuNTA1NzdMMi42ODE2IDMuODc1NjlIMi45MTkwMUwyLjQwNDMgNC4zOTYwNkwyLjU4MTM2IDUuMTI1NjlIMi45NTM5OUwzLjIxMTcyIDQuNDU1NTdMMy41MTM5MyA1LjEyNTY5SDMuODI1MTdaTTcuNzczODggMy4xNDYwNkw3LjU3NTE3IDMuODc1NjlINy4yNjM5M0w2Ljk2MTcyIDMuMjA1NTdMNi43MDM5OSAzLjg3NTY5SDYuMzMxMzZMNi4xNTQzIDMuMTQ2MDZMNi42NjkwMSAyLjYyNTY5SDYuNDMxNkw2Ljk2MjY1IDIuMjU1NzdMNy40NzY0NyAyLjYyNTY5SDcuMTg1NTVMNy43NzM4OCAzLjE0NjA2Wk00Ljk3NjQ3IDIuNjI1NjlMNC40NjI2NSAyLjI1NTc3TDMuOTMxNiAyLjYyNTY5SDQuMTY5MDFMMy42NTQzIDMuMTQ2MDZMMy44MzEzNiAzLjg3NTY5SDQuMjAzOTlMNC40NjE3MiAzLjIwNTU3TDQuNzYzOTMgMy44NzU2OUg1LjA3NTE3TDUuMjczODggMy4xNDYwNkw0LjY4NTU1IDIuNjI1NjlINC45NzY0N1oiIGZpbGw9IiNGN0ZDRkYiLz4KPC9nPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5Ii8+CjxwYXRoIGQ9Ik0xLjUgMUgxOC41Vi0xSDEuNVYxWk0xOSAxLjVWMTMuNUgyMVYxLjVIMTlaTTE4LjUgMTRIMS41VjE2SDE4LjVWMTRaTTEgMTMuNVYxLjVILTFWMTMuNUgxWk0xLjUgMTRDMS4yMjM4NiAxNCAxIDEzLjc3NjEgMSAxMy41SC0xQy0xIDE0Ljg4MDcgMC4xMTkyODggMTYgMS41IDE2VjE0Wk0xOSAxMy41QzE5IDEzLjc3NjEgMTguNzc2MSAxNCAxOC41IDE0VjE2QzE5Ljg4MDcgMTYgMjEgMTQuODgwNyAyMSAxMy41SDE5Wk0xOC41IDFDMTguNzc2MSAxIDE5IDEuMjIzODYgMTkgMS41SDIxQzIxIDAuMTE5Mjg4IDE5Ljg4MDcgLTEgMTguNSAtMVYxWk0xLjUgLTFDMC4xMTkyODggLTEgLTEgMC4xMTkyODkgLTEgMS41SDFDMSAxLjIyMzg2IDEuMjIzODYgMSAxLjUgMVYtMVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMCIgeTE9IjAiIHgyPSIxMCIgeTI9IjE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt="İngilizce" shape="NORMAL" class="style__Image-sc-__sc-1h9bp23-0 tiCVW" />
                    </span>

                </ModalBody>
                <ModalFooter className="ModalFooter">
                    <Button>güncelle</Button>
                </ModalFooter>
            </Modal>


            {/*Modall User*/}

            <Modal isOpen={user} fade={false}  >
                <ModalHeader className="modalHeader" ><p>Giriş yap veya kayıt ol</p>  <Button onClick={() => setUser(!user)}>X</Button></ModalHeader>
                <ModalBody className="modalBody">
                    <forum className="forumNumber" action="">
                        <select name="number" className="number">
                            <option value="tr">Tr</option>
                            <option value="saab">Usa</option>
                            <option value="opel">Almmanaya</option>
                            <option value="audi">ingiltere</option>
                        </select>
                        <input type="tel" name="phone" placeholder="Telefon numarası" maxLength="11" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                    </forum>
                    <input className="usersubmit" type="submit" value="telefon numarası ile devam et" />

                    <p className="userText">Kişisel verilerinize dair Aydınlatma Metni için <Link to="/help/aydınlatmametni">tıklayınız</Link></p>

                </ModalBody>
                <ModalFooter className="ModalFooter">
                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1408812229445575&kid_directed_site=0&app_id=1408812229445575&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D1408812229445575%26auth_type%26cbt%3D1632131937449%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2f9789747e615%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%26client_id%3D1408812229445575%26display%3Dpopup%26domain%3Dgetir.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgetir.com%252F%26locale%3Den_US%26logger_id%3Df1bf9b4c82c45c%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df225393990dd15%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%2526frame%253Dfac35146c8a654%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dfalse%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv2.3%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df225393990dd15%26domain%3Dgetir.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgetir.com%252Ff1857292918adb%26relation%3Dopener%26frame%3Dfac35146c8a654%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=tr_TR&pl_dbl=0" target="_blank" rel="noopener noreferrer" className="UserSocilaMedia">
                        <i class="fab fa-facebook"></i>
                        <p>Facebook ie devam et</p>
                    </a>
                </ModalFooter>
            </Modal>

            {/*Modall Signup*/}


            <Modal isOpen={sıgnup} fade={false}  >
                <ModalHeader className="modalHeader" ><p>Giriş</p>  <Button onClick={() => setSıgnup(!sıgnup)}>X</Button>
                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1408812229445575&kid_directed_site=0&app_id=1408812229445575&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fapp_id%3D1408812229445575%26auth_type%26cbt%3D1632131937449%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2f9789747e615%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%26client_id%3D1408812229445575%26display%3Dpopup%26domain%3Dgetir.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgetir.com%252F%26locale%3Den_US%26logger_id%3Df1bf9b4c82c45c%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df225393990dd15%2526domain%253Dgetir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgetir.com%25252Ff1857292918adb%2526relation%253Dopener%2526frame%253Dfac35146c8a654%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dfalse%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv2.3%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df225393990dd15%26domain%3Dgetir.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgetir.com%252Ff1857292918adb%26relation%3Dopener%26frame%3Dfac35146c8a654%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=tr_TR&pl_dbl=0" target="_blank" rel="noopener noreferrer" className="UserSocilaMedia">
                        <i class="fab fa-facebook"></i>
                        <p>Facebook ie devam et</p>
                    </a>
                </ModalHeader>

                <ModalBody className="modalBody">
                    <forum className="forumNumber" action="">
                        <select name="number" className="number">
                            <option value="tr">Tr</option>
                            <option value="saab">Usa</option>
                            <option value="opel">Almmanaya</option>
                            <option value="audi">ingiltere</option>
                        </select>
                        <input type="tel" name="phone" placeholder="Telefon numarası" maxLength="11" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                    </forum>
                    <input required type="text" placeholder="Ad Soyad" />
                    <input required type="text" placeholder="E posta" />
                    <input minLength="6" maxLength="16" required type="password" placeholder="Şifre" />
                    <small>* Şifre en az 7 karakter olmalıdır ve özel karakter içermemelidir</small>
                    <div>
                        <input type="checkbox" />
                        <small className="checbox">Getirin bana özel Kanpanyalarını tanıtım ve fırsatlarından haberdar olam istiyorum.</small>
                    </div>
                    <small>Kayıt olmakla
                        <Link to="/help/kullanım">kullanım</Link>
                        'nı onaylamış olursunuz.</small>
                    <small>Kişisel verilerinize dair Aydınlatma Metni için
                        <Link to="/help/kişisleveri">tıklayınız</Link>
                        .</small>


                </ModalBody>
                <ModalFooter className="ModalFooter">
                    <input type="submit" value="Kayıt Ol" />
                    <div>
                        <small>Getir'e üyeyseniz </small>
                        <span onClick={() => { setSıgnup(!sıgnup); setUser(!user) }}>Giriş Yap</span>
                    </div>
                </ModalFooter>
            </Modal>




        </>

    )
}
export default Header


