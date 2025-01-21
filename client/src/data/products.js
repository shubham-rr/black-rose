export const products = [
    {
        id: "cam1",
        brand: "Canon",
        name: "Canon PowerShot G7X Mark III Black Digital Compact Camera",
        price: 2299.00,
        image: "/images/products/canon-g7x.jpg",
        categories: {
            newArrival: true,
            hotDeal: false,
            popularItem: false
        }
    },
    {
        id: "cam2",
        brand: "Nikon",
        name: "Nikon Z fc Chalk Blue w/ Nikkor Z 16-50mm & Z 50-250mm VR Lens",
        price: 2269.00,
        image: "/images/products/nikon-z.jpg",
        categories: {
            newArrival: true,
            hotDeal: true,
            popularItem: false
        }
    },
    {
        id: "cam3",
        brand: "Fujifilm",
        name: "Fujifilm X-T4 Mirrorless Camera Body",
        price: 1699.00,
        image: "/images/products/fuji-xt4.jpg",
        categories: {
            newArrival: false,
            hotDeal: true,
            popularItem: true
        }
    },
    {
        id: "cam4",
        brand: "SONY",
        name: "Sony Alpha a7 III Mirrorless Camera Body",
        price: 2999.00,
        image: "/images/products/sony-a7.jpg",
        categories: {
            newArrival: false,
            hotDeal: true,
            popularItem: true
        }
    },
    {
        id: "cam5",
        brand: "Panasonic",
        name: "Panasonic Lumix DC-S5 Mirrorless Camera Body",
        price: 1299.00,
        image: "/images/products/panasonic-s5.jpg",
        categories: {
            newArrival: false,
            hotDeal: true,
            popularItem: true
        }
    },
    {
        id: "cam6",
        brand: "Olympus",
        name: "Olympus OM-D E-M10 Mark IV Mirrorless Camera Body",
        price: 1999.00,
        image: "/images/products/olympus-em10.jpg",
        categories: {
            newArrival: false,
            hotDeal: true,
            popularItem: true
        }
    }
];

export const sections = {
    newArrivals: {
        title: "New Arrivals",
        viewAllLink: "/products/new-arrivals",
        filter: (product) => product.categories.newArrival
    },
    hotDeals: {
        title: "Hot Deals",
        viewAllLink: "/products/hot-deals",
        filter: (product) => product.categories.hotDeal
    },
    popularItems: {
        title: "Popular Items",
        viewAllLink: "/products/popular",
        filter: (product) => product.categories.popularItem
    }
}; 