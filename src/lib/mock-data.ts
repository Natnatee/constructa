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
        title: 'วัสดุก่อสร้างคุณภาพครบวงจร',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1920&auto=format&fit=crop',
        link: '/products',
        order: 1,
        isActive: true,
    },
    {
        id: '2',
        title: 'โปรโมชั่นพิเศษสำหรับช่างและโครงการ',
        imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop',
        link: '/contact',
        order: 2,
        isActive: true,
    },
];

export const mockCategories: Category[] = [
    { id: 'cat1', name: 'ปูนและคอนกรีต', slug: 'cement', imageUrl: 'https://images.unsplash.com/photo-1518117648679-4621ab07edec?w=400&h=400&fit=crop', order: 1 },
    { id: 'cat2', name: 'เหล็กและโลหะ', slug: 'steel', imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5f649774?w=400&h=400&fit=crop', order: 2 },
    { id: 'cat3', name: 'ไม้และแผ่นพื้น', slug: 'wood', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e15ca?w=400&h=400&fit=crop', order: 3 },
    { id: 'cat4', name: 'สีและเคมีภัณฑ์', slug: 'paint', imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop', order: 4 },
    { id: 'cat5', name: 'กระเบื้องและสุขภัณฑ์', slug: 'tile', imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop', order: 5 },
];

export const mockBrands: Brand[] = [
    { id: 'b1', name: 'SCG', slug: 'scg', logoUrl: 'https://cdn.worldvectorlogo.com/logos/scg-1.svg' },
    { id: 'b2', name: 'TOA', slug: 'toa', logoUrl: 'https://res.cloudinary.com/toa-group/image/upload/v1589172421/common/toa-logo.png' },
    { id: 'b3', name: 'TPI', slug: 'tpi', logoUrl: 'https://www.tpipolene.co.th/images/logo.png' },
    { id: 'b4', name: 'Shera', slug: 'shera', logoUrl: 'https://www.shera.com/images/default-source/logos/shera-logo.png' },
];

export const mockProducts: Product[] = [
    {
        id: 'p1',
        name: 'ปูนซีเมนต์ปอร์ตแลนด์ ประเภท 1',
        slug: 'scg-portland-type-1',
        description: 'เหมาะสำหรับงานโครงสร้างขนาดใหญ่ งานอาคารสูง สะพาน และงานที่ต้องการกำลังอัดสูง',
        price: 155,
        imageUrls: ['https://images.unsplash.com/photo-1518117648679-4621ab07edec?w=800&fit=crop'],
        categoryId: 'cat1',
        brandId: 'b1',
        isFeatured: true,
        specifications: { 'น้ำหนัก': '50 กก.', 'มาตรฐาน': 'มอก. 15 เล่ม 1-2555' },
    },
    {
        id: 'p2',
        name: 'สีกัลวาไนซ์ 2IN1 รวมรองพื้นและทับหน้า',
        slug: 'toa-galvanize-2in1',
        description: 'ทาได้ทุกพื้นผิวโลหะ แห้งไว ยึดเกาะแน่น ไม่ลอกล่อน',
        price: 340,
        imageUrls: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&fit=crop'],
        categoryId: 'cat4',
        brandId: 'b2',
        isFeatured: true,
        specifications: { 'ขนาด': '1 แกลลอน', 'ความเงา': 'ด้าน' },
    },
    {
        id: 'p3',
        name: 'เหล็กเส้นกลม ขนาด 9 มม.',
        slug: 'round-bar-9mm',
        description: 'เหล็กเส้นกลมสำหรับงานก่อสร้างมาตรฐาน มอก.',
        imageUrls: ['https://images.unsplash.com/photo-1504917595217-d4dc5f649774?w=800&fit=crop'],
        categoryId: 'cat2',
        brandId: 'b1',
        isFeatured: false,
        specifications: { 'ความยาว': '10 เมตร', 'มาตรฐาน': 'SR24' },
    },
];
