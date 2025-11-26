// ---- GENERADOR DE PRODUCTOS ---- //

function precio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// IMG random de internet
function randomImg() {
    return `https://picsum.photos/300?random=${Math.floor(Math.random()*10000)}`;
}

const productos = [];

// ---- LISTA DE CATEGORÍAS Y RANGOS ---- //
const categorias = [
    { nombre: "Remera deportiva hombre", min: 30000, max: 70000 },
    { nombre: "Remera deportiva mujer", min: 30000, max: 70000 },
    { nombre: "Remera vestir hombre", min: 30000, max: 70000 },
    { nombre: "Musculosa deportiva hombre", min: 30000, max: 70000 },
    { nombre: "Musculosa deportiva mujer", min: 30000, max: 70000 },
    { nombre: "Musculosa vestir hombre", min: 30000, max: 70000 },

    { nombre: "Short deportivo hombre", min: 10000, max: 30_000 },
    { nombre: "Short deportivo mujer", min: 10000, max: 30_000 },
    { nombre: "Short de baño hombre", min: 10000, max: 30_000 },

    { nombre: "Traje de baño mujer", min: 10000, max: 30_000 },
    { nombre: "Short vestir hombre", min: 40000, max: 80000 },

    { nombre: "Pantalón deportivo hombre", min: 10000, max: 30000 },
    { nombre: "Pantalón deportivo mujer", min: 10000, max: 30000 },
    { nombre: "Pantalón vestir hombre", min: 40000, max: 80000 },

    { nombre: "Medias deportivas unisex", min: 10000, max: 30000 },
    { nombre: "Medias invisibles unisex", min: 10000, max: 30000 },
    { nombre: "Medias 3/4 unisex", min: 10000, max: 30000 },

    { nombre: "Gorra deportiva hombre", min: 10000, max: 30000 },
    { nombre: "Gorra deportiva mujer", min: 10000, max: 30000 },
    { nombre: "Gorra casual", min: 10000, max: 30000 },

    { nombre: "Gorro de natación hombre", min: 10000, max: 30000 },
    { nombre: "Gorro de natación mujer", min: 10000, max: 30000 },
    { nombre: "Antiparras natación", min: 10000, max: 30000 },

    { nombre: "Pelota fútbol", min: 30000, max: 50000 },
    { nombre: "Pelota básquet", min: 30000, max: 50000 },

    { nombre: "Paleta de pádel", min: 120000, max: 180000 },
    { nombre: "Pelotas de pádel (tubo)", min: 30000, max: 50000 },

    { nombre: "Camiseta Boca", min: 30000, max: 70000 },
    { nombre: "Camiseta River", min: 30000, max: 70000 },
    { nombre: "Short Boca", min: 10000, max: 30000 },
    { nombre: "Short River", min: 10000, max: 30000 },

    { nombre: "Buzo deportivo hombre", min: 30000, max: 70000 },
    { nombre: "Buzo deportivo mujer", min: 30000, max: 70000 },
    { nombre: "Buzo vestir hombre", min: 40000, max: 80000 },

    { nombre: "Campera rompeviento hombre", min: 30000, max: 70000 },
    { nombre: "Campera rompeviento mujer", min: 30000, max: 70000 },

    { nombre: "Campera vestir hombre", min: 40000, max: 80000 },

    { nombre: "Calza deportiva mujer", min: 30000, max: 70000 },
    { nombre: "Calza deportiva hombre", min: 30000, max: 70000 },

    { nombre: "Remera térmica mujer", min: 30000, max: 70000 },
    { nombre: "Remera térmica hombre", min: 30000, max: 70000 },

    { nombre: "Zapatillas deportivas mujer", min: 100000, max: 170000 },
    { nombre: "Zapatillas deportivas hombre", min: 100000, max: 170000 },

    { nombre: "Zapatillas vestir hombre", min: 90000, max: 160000 },

    { nombre: "Zapatillas básquet hombre", min: 130000, max: 200000 },
    { nombre: "Zapatillas pádel hombre", min: 70000, max: 140000 },

    { nombre: "Ojotas hombre", min: 10000, max: 30000 },
    { nombre: "Ojotas mujer", min: 10000, max: 30000 },

    { nombre: "Botines fútbol hombre", min: 70000, max: 150000 }
];

// ---- Generar 10 productos por categoría ---- //
categorias.forEach(cat => {
    for (let i = 1; i <= 10; i++) {
        productos.push({
            nombre: `${cat.nombre} ${i}`,
            precio: precio(cat.min, cat.max),
            img: randomImg()
        });
    }
});

// ---- Renderizado ---- //
const cont = document.getElementById("productos-container");

productos.forEach(prod => {
    cont.innerHTML += `
        <div class="product-card">
            <img src="${prod.img}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
        </div>
    `;
});
