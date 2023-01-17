const products = [
    { 
        id: '1', 
        name: 'PC Gamer armada', 
        price: 800, 
        category: 'pcs-armadas', 
        img:'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/146-PC-Armada-Prod_800.jpg', 
        stock: 25, 
        description:'Descripcion de PC Gamer armada'
    },

    {   id: '2', 
        name: 'bangho GM-15Z11', 
        price: 1200, 
        category: 'notebooks', 
        img:'https://bangho.vtexassets.com/arquivos/ids/160991/notebook-gamer-gm-15z11-gtx1650-full-hd.jpg?v=637844465547500000', 
        stock: 16, 
        description:'Descripcion de Bangho GM-15Z11'},

    {   id: '3', 
        name: 'Placa de video RTX4090', 
        price: 1600, 
        category: 'componetes-pc', 
        img:'https://gorilagames.com/img/Public/1019-producto-placa-video-asus-tuf-gaming-rtx-4090-01-24gb-1-572.jpg', 
        stock: 10, 
        description:'Descripcion de RTX4090'}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}