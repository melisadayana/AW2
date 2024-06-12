export const cardComponent = (data) => {
        
    return `
        <div class="col">
            <div class="card">

                <div class="card-img-top">
                    <figure>
                        <img class="foto-card" src="${data.img}">
                    </figure>
                </div>

                <h5 class="card-title mx-3 my-3">
                    ${data.titulo}
                </h5>

                <div class="card-body mb-2">
                    <div class="card-text">
                        <h6 class="text-secondary">
                            <cite title="Source Title">${data.desc}</cite>
                        </h6>
                    </div>
                    <p class="text-secondary">${data.talle}</p>
                </div>

                <div class="card-footer text-body-secondary">
                    <div class="row">
                        <div class="col">
                            <p class="card-price">$ ${data.precio.toLocaleString('es-AR')}</p>
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" value="" name="cantProdu" data-id="${data.id}" min="0" max="3" placeholder="0">
                        </div>    
                    </div>
                </div>

                <div class="col">
                    <input class="btn text-white w-100 mt-4 fw-semibold shadow-sm" style="background-color: rgb(247, 98, 66);" type="button" value="Añadir al carrito" data-id="${data.id}" name="btnAgregar">
                </div>

            </div>  
        </div> 
    `
}

export const cardHome = (data) => {
    
    return `
        <div class="col">
            <div class="card">
                    
                <div class="card-img-top">
                    <figure>
                        <img class="foto-card" src="${data.img}">
                    </figure>
                </div>

                <h5 class="card-header mx-3 my-3">
                    ${data.titulo}
                </h5>

                <div class="col-12">
                    <a href=${data.link}>
                        <input class="btn text-white w-100 mt-4 fw-semibold shadow-sm" style="background-color: rgb(247, 98, 66);" value="Ver más">
                    </a>
                </div>                
                
            </div>
        </div>
    `
}

export const cardCarrito = (data) => {
        
    return `
        <div class="col">
            <div class="card">

                <div class="card-img-top">
                    <figure>
                        <img class="foto-card" src="${data.img}">
                    </figure>
                </div>

                <h5 class="card-title mx-3 my-3">
                    ${data.titulo}
                </h5>

                <div class="card-body mb-2">
                    <div class="card-text">
                        <h6 class="text-secondary">
                            <cite title="Source Title">${data.desc}</cite>
                        </h6>
                    </div>
                    <p class="text-secondary">${data.talle}</p>
                </div>

                <div class="card-footer text-body-secondary">
                    <div class="row">
                        <div class="col">
                            <p class="card-price">$ ${data.precio.toLocaleString('es-AR')}</p>
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" value="${data.cant}" name="cantProdu" data-id="${data.id}" min="0" max="3" placeholder="0">
                        </div>    
                    </div>
                </div>
                
                <div class="col">
                    <input class="btn text-white w-100 mt-4 fw-semibold shadow-sm" style="background-color: rgb(247, 98, 66);" type="button" value="Eliminar" data-id="${data.id}" name="btnEliminar">
                </div>
                
            </div>  
        </div> 
    `
}

export const cardResumen = (text) => {
    
    return `  
        <div class="head"><p>Mi Carrito</p></div>
        <div id="itemsContainer">algo</div>
        <div class="foot">
            <h3>Total</h3>
            <h2 id="total">$ 0.00</h2>                 
        </div>
        <a href="https://api.whatsapp.com/send?phone=543517656710${text}" class="btn btn-primary w-100 mt-4" id="btnEnviar">Enviar pedido</a> 
    `                 
}

export const cardItem = (data, total) => {
    
    return `  
        <div class="cart-item">      
            <div class="row-img">
                <img clas="rowimg" src=${data.img}>
            </div>
            <div class="nombre" style="font-size: 16px;">${data.titulo}</div>
            <input style="font-size: 16px;" value="${data.cant}"></input>
            <h2 style="font-size: 16px;">$ ${total.toLocaleString('es-AR')}</h2>
            <a class="fa-solid fa-trash" name="delItem" data-id="${data.id}"></a>
        </div> 
    `                 
}