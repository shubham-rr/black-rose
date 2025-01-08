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