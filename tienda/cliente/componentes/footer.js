import { API } from '../api/api.js';

export const footerComponent = `
    <div class="grupo-1">
        <div class="box-1">
            <figure>
                <a href="#">
                    <img src="${API}/assets/corona.svg" alt="">
                </a>
            </figure>
        </div>
        <div class="box-2">
            <h2>Tienda de mis suenos</h2>
        </div>
        <div class="box-3">
            <div class="red-social">
                <a href="https://api.whatsapp.com/send?phone=543517656710" class="contactos" target="_blank">
                    <img src="${API}/assets/whatsapp.svg" alt="">
                </a>
                <a href="https://www.instagram.com/tiendademisuenos/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" class="contactos" target="_blank">
                    <img src="${API}/assets/instagram.svg" alt="">
                </a>
                <a href="https://maps.app.goo.gl/18KTBFTQm9Woab5i7" class="contactos" target="_blank">
                    <img src="${API}/assets/location.svg" alt="">
                </a>   
            </div>             
        </div>
    </div>
    <div class="grupo-2">
        <small>&copy; 2023 <b>Tienda de mis sueños</b> - Todos los derechos reservados.</small>
    </div>
`