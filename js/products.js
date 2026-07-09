const topProduct = (profiles) => {

    const productOrdering = {};
    let topProduct;
    let maxCount = 0;


    for (profile of profiles) {

        for (order of profile.orders) {

            for (line of order.orderLine) {

                if (productOrdering[line.productName])
                    productOrdering[line.productName] += line.quantity
                else productOrdering[line.productName] = line.quantity

                if (productOrdering[line.productName] > maxCount) {
                    topProduct = line.productName;
                    maxCount = productOrdering[line.productName];
                }

            }

        }

    }

    return topProduct;

};

const ordersToProfiles = (orders) => {

    return orders.reduce((profiles, order) => {

        const profileIndex = profiles.findIndex(({ id }) => id === order.profileId);

        if (profileIndex > -1) profiles[profileIndex].orders.push(order);
        else profiles.push({
            id: order.profileId,
            name: order.name,
            email: order.email,
            orders: [ order ],
        })

        return profiles;
    }, []);

}

function make() {

    console.log(JSON.stringify(ordersToProfiles(orders), null, 2));
   // console.log(topProduct(profiles));

}

const profiles = [
    {
        id: 1,
        name: "Elena Martínez",
        email: "elena.mtz@example.com",
        orders: [
            {
                id: "OR-001",
                orderLine: [
                    { productName: "Café Espresso", quantity: 2 },
                    { productName: "Muffin de Arándanos", quantity: 1 }
                ]
            },
            {
                id: "OR-002",
                orderLine: [
                    { productName: "Café Espresso", quantity: 3 },
                    { productName: "Galleta de Avena", quantity: 5 }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Javier Soto",
        email: "j.soto@devmail.io",
        orders: [
            {
                id: "OR-003",
                orderLine: [
                    { productName: "Teclado Mecánico", quantity: 1 },
                    { productName: "Cable USB-C", quantity: 2 }
                ]
            },
            {
                id: "OR-004",
                orderLine: [
                    { productName: "Mouse Pad", quantity: 1 },
                    { productName: "Cable USB-C", quantity: 1 }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Ana Lucía",
        email: "analu@test.com",
        orders: [] // Caso de prueba: Perfil sin compras
    },
    {
        id: 101,
        name: "Roberto Carlos",
        email: "rcarlos@tech.com",
        orders: [
            { id: "O-1", orderLine: [{ productName: "Monitor 4K", quantity: 1 }, { productName: "Cable HDMI", quantity: 2 }] },
            { id: "O-2", orderLine: [{ productName: "Cable HDMI", quantity: 1 }, { productName: "Soporte VESA", quantity: 1 }] },
            { id: "O-3", orderLine: [{ productName: "Café Espresso", quantity: 5 }] }
        ]
    },
    {
        id: 102,
        name: "Laura Vizcaíno",
        email: "laura.v@creative.net",
        orders: [
            { id: "O-4", orderLine: [{ productName: "Café Espresso", quantity: 2 }, { productName: "Lienzo 50x70", quantity: 2 }] },
            { id: "O-5", orderLine: [{ productName: "Témpera Azul", quantity: 3 }] },
            { id: "O-6", orderLine: [{ productName: "Pincel Óleo", quantity: 6 }] } // Total 16, supera a la témpera
        ]
    },
    {
        id: 103,
        name: "Esteban Quito",
        email: "esteban.q@logistica.es",
        orders: [
            { id: "O-7", orderLine: [{ productName: "Caja de Cartón", quantity: 10 }] },
            { id: "O-8", orderLine: [{ productName: "Café Espresso", quantity: 50 }, { productName: "Caja de Cartón", quantity: 50 }] }
        ]
    },
    {
        id: 104,
        name: "Marta Gómez",
        email: "marta.g@vivienda.org",
        orders: [
            {
                id: "O-9",
                orderLine: [
                    { productName: "Bombilla LED", quantity: 3 },
                    { productName: "Bombilla LED", quantity: 2 } // Mismo producto en la misma orden
                ]
            }
        ]
    },
    {
        id: 105,
        name: "Usuario Nuevo",
        email: "nuevo@beta.io",
        orders: [] // Sin actividad
    }
];

const orders = [
    { id: "OR-01", profileId: 1, name: "Elena", email: "elena@test.com", orderLine: [{ productName: "Café", quantity: 2 }, { productName: "Azúcar", quantity: 1 }] },
    { id: "OR-02", profileId: 2, name: "Javier", email: "javier@test.com", orderLine: [{ productName: "Mouse", quantity: 1 }] },
    { id: "OR-03", profileId: 1, name: "Elena", email: "elena@test.com", orderLine: [{ productName: "Muffin", quantity: 3 }] },
    { id: "OR-04", profileId: 3, name: "Ana", email: "ana@test.com", orderLine: [{ productName: "Teclado", quantity: 1 }] },
    { id: "OR-05", profileId: 2, name: "Javier", email: "javier@test.com", orderLine: [{ productName: "Monitor", quantity: 1 }, { productName: "Mouse Pad", quantity: 1 }] },
    { id: "OR-06", profileId: 1, name: "Elena", email: "elena@test.com", orderLine: [{ productName: "Café", quantity: 1 }] },
    { id: "OR-07", profileId: 4, name: "Roberto", email: "roberto@test.com", orderLine: [{ productName: "Cable HDMI", quantity: 2 }] },
    { id: "OR-08", profileId: 3, name: "Ana", email: "ana@test.com", orderLine: [{ productName: "Mouse Pad", quantity: 1 }] },
    { id: "OR-09", profileId: 5, name: "Laura", email: "laura@test.com", orderLine: [{ productName: "Pincel", quantity: 5 }] },
    { id: "OR-10", profileId: 1, name: "Elena", email: "elena@test.com", orderLine: [{ productName: "Azúcar", quantity: 10 }] },
    { id: "OR-11", profileId: 2, name: "Javier", email: "javier@test.com", orderLine: [{ productName: "Mouse", quantity: 2 }] },
    { id: "OR-12", profileId: 6, name: "Carlos", email: "carlos@test.com", orderLine: [{ productName: "Laptop", quantity: 1 }] },
    { id: "OR-13", profileId: 4, name: "Roberto", email: "roberto@test.com", orderLine: [{ productName: "Cargador", quantity: 1 }] },
    { id: "OR-14", profileId: 5, name: "Laura", email: "laura@test.com", orderLine: [{ productName: "Lienzo", quantity: 2 }, { productName: "Pincel", quantity: 3 }] },
    { id: "OR-15", profileId: 1, name: "Elena", email: "elena@test.com", orderLine: [{ productName: "Café", quantity: 5 }] },
    { id: "OR-16", profileId: 3, name: "Ana", email: "ana@test.com", orderLine: [{ productName: "Teclado", quantity: 1 }] },
    { id: "OR-17", profileId: 6, name: "Carlos", email: "carlos@test.com", orderLine: [{ productName: "Funda Laptop", quantity: 1 }] },
    { id: "OR-18", profileId: 2, name: "Javier", email: "javier@test.com", orderLine: [{ productName: "Webcam", quantity: 1 }] },
    { id: "OR-19", profileId: 4, name: "Roberto", email: "roberto@test.com", orderLine: [{ productName: "Cable HDMI", quantity: 1 }] },
    { id: "OR-20", profileId: 1, name: "Elena", email: "elena@test.com", orderLine: [{ productName: "Muffin", quantity: 2 }] }
];

make();
