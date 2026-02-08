export interface Banner {
    id: string;
    title: string;
    imageUrl: string;
    link?: string;
    order: number;
    isActive: boolean;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    imageUrl: string;
    order: number;
}

export interface Brand {
    id: string;
    name: string;
    slug: string;
    logoUrl: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price?: number;
    imageUrls: string[];
    categoryId: string;
    brandId: string;
    isFeatured: boolean;
    specifications: Record<string, string>;
}

export const mockBanners: Banner[] = [
    {
        id: '1',
        title: 'วัสดุก่อสร้างคุณภาพครบวงจร (โชติพิพัฒน์ค้าไม้)',
        imageUrl: '/icon/ภาพปก.jpg',
        link: '/products',
        order: 1,
        isActive: true,
    },
    {
        id: '2',
        title: 'บริการจัดส่งรวดเร็วถึงหน้างาน',
        imageUrl: '/transportation/ไม้/46802644_1368991656570887_7631391727978283008_n.jpg',
        link: '/contact',
        order: 2,
        isActive: true,
    },
];

export const mockCategories: Category[] = [
    { id: 'cat1', name: 'ไม้และแผ่นพื้น', slug: 'wood', imageUrl: '/products/ไม้/ไม้ยูคา.jpg', order: 1 },
    { id: 'cat2', name: 'แผ่นยิปซั่มและฝ้า', slug: 'gypsum', imageUrl: '/products/แผ่นยิปซั่ม/scg/product_112881_images_294058_ZDA0101001601D0025-01.jpeg', order: 2 },
    { id: 'cat3', name: 'ยางมะตอย', slug: 'asphalt', imageUrl: '/products/ยางมะตอย/tipco/122092_0.jpg', order: 3 },
    { id: 'cat4', name: 'โครงคร่าวและลวดแขวน', slug: 'structure', imageUrl: '/products/โครงคร่าวผนัง/scg/product_16194_images_337052_ZDA60000PP57630001-01.jpeg', order: 4 },
    { id: 'cat5', name: 'ปูนฉาบยิปซั่ม', slug: 'gypsum-plaster', imageUrl: '/products/ปูนฉาบยิปซั่ม/scg/product_114736_images_5f6ece9a-d09c-44d8-a5ea-93afe69e843c_easy-fix_pd407654.jpeg', order: 5 },
    { id: 'cat6', name: 'ปูนแท่ง/อิฐบล็อก', slug: 'concrete-block', imageUrl: '/products/ปุนแท่ง/56304276_1454420521361333_5889888673926742016_n.jpg', order: 6 },
];

export const mockBrands: Brand[] = [
    { id: 'b1', name: 'SCG', slug: 'scg', logoUrl: '/icon/logo.jpg' },
    { id: 'b2', name: 'TOA', slug: 'toa', logoUrl: 'https://res.cloudinary.com/toa-group/image/upload/v1589172421/common/toa-logo.png' },
    { id: 'b3', name: 'TPI', slug: 'tpi', logoUrl: 'https://www.tpipolene.co.th/images/logo.png' },
    { id: 'b4', name: 'Shera', slug: 'shera', logoUrl: 'https://www.shera.com/images/default-source/logos/shera-logo.png' },
];

export const mockProducts: Product[] = [
    {
        id: 'p1',
        name: 'ไม้ยูคาลิปตัส คัดเกรด',
        slug: 'eucalyptus-wood',
        description: 'ไม้ยูคาลิปตัสคุณภาพสูง เหมาะสำหรับงานโครงสร้างนั่งร้าน และงานก่อสร้างทั่วไป',
        price: 45,
        imageUrls: ['/products/ไม้/ไม้ยูคา.jpg'],
        categoryId: 'cat1',
        brandId: 'b1',
        isFeatured: true,
        specifications: { 'ขนาด': '2-3 นิ้ว', 'ความยาว': '3 เมตร' },
    },
    {
        id: 'p2',
        name: 'แผ่นยิปซั่ม SCG มาตรฐาน',
        slug: 'scg-gypsum-board',
        description: 'แผ่นยิปซั่มคุณภาพสูงจาก SCG ผิวเรียบเนียน ติดตั้งง่าย ทนทาน',
        price: 185,
        imageUrls: ['/products/แผ่นยิปซั่ม/scg/product_128616_images_294070_ZDA0102001601D0506-01.jpeg'],
        categoryId: 'cat2',
        brandId: 'b1',
        isFeatured: true,
        specifications: { 'ความหนา': '9 มม.', 'ขนาด': '120x240 ซม.' },
    },
    {
        id: 'p3',
        name: 'ยางมะตอยสำเร็จรูป Tipco',
        slug: 'tipco-asphalt',
        description: 'ยางมะตอยสำเร็จรูปพร้อมใช้งาน สำหรับซ่อมแซมหลุมบ่อบนถนนหรือลานจอดรถ',
        price: 125,
        imageUrls: ['/products/ยางมะตอย/tipco/122095_0.jpg'],
        categoryId: 'cat3',
        brandId: 'b3',
        isFeatured: false,
        specifications: { 'น้ำหนัก': '20 กก.', 'การใช้งาน': 'เปิดถุงเทแล้วเท' },
    },
];
