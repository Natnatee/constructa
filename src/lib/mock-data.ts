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
    { id: 'cat-wood', name: 'ไม้และไม้แปรรูป', slug: 'wood', imageUrl: '/products/ไม้/ไม้ยูคา.jpg', order: 1 },
    { id: 'cat-gypsum', name: 'แผ่นยิปซั่มและฝ้า', slug: 'gypsum', imageUrl: '/products/แผ่นยิปซั่ม/scg/product_112881_images_294058_ZDA0101001601D0025-01.jpeg', order: 2 },
    { id: 'cat-structure', name: 'โครงคร่าวและลวดแขวน', slug: 'structure', imageUrl: '/products/โครงคร่าวผนัง/scg/product_16194_images_337052_ZDA60000PP57630001-01.jpeg', order: 3 },
    { id: 'cat-cement-plaster', name: 'ปูนฉาบและเคมีภัณฑ์', slug: 'cement-plaster', imageUrl: '/products/ปูนฉาบยิปซั่ม/scg/product_114736_images_5f6ece9a-d09c-44d8-a5ea-93afe69e843c_easy-fix_pd407654.jpeg', order: 4 },
    { id: 'cat-asphalt', name: 'ยางมะตอย', slug: 'asphalt', imageUrl: '/products/ยางมะตอย/tipco/122092_0.jpg', order: 5 },
    { id: 'cat-hardware', name: 'ฮาร์ดแวร์และลูกบิด', slug: 'hardware', imageUrl: '/products/ลูกบิด/ison/8812-SS-BK-10.jpg', order: 6 },
    { id: 'cat-tank', name: 'ถังบำบัดและถังน้ำ', slug: 'tanks', imageUrl: '/products/ถังบำบัด/dos/340268.jpg', order: 7 },
    { id: 'cat-service-door', name: 'ช่องเซอร์วิส', slug: 'service-door', imageUrl: '/products/ช่องเซอร์วิส/scg/product_212288_images_102743_ZDA0190911694D0032.jpeg', order: 8 },
    { id: 'cat-lath', name: 'ไม้ระแนง', slug: 'lath', imageUrl: '/products/ไม้ระแนง/shera/ไม้ระแนงลายเสี้ยนสีเทาอ่อน_3-01.webp', order: 9 },
    { id: 'cat-brick', name: 'อิฐและปูนแท่ง', slug: 'bricks', imageUrl: '/products/ปุนแท่ง/56304276_1454420521361333_5889888673926742016_n.jpg', order: 10 },
];

export const mockBrands: Brand[] = [
    { id: 'b-scg', name: 'SCG', slug: 'scg', logoUrl: '/icon/logo.jpg' },
    { id: 'b-shera', name: 'Shera', slug: 'shera', logoUrl: 'https://www.shera.com/images/default-source/logos/shera-logo.png' },
    { id: 'b-toa', name: 'TOA', slug: 'toa', logoUrl: 'https://res.cloudinary.com/toa-group/image/upload/v1589172421/common/toa-logo.png' },
    { id: 'b-tpi', name: 'TPI', slug: 'tpi', logoUrl: 'https://www.tpipolene.co.th/images/logo.png' },
    { id: 'b-dos', name: 'DOS', slug: 'dos', logoUrl: 'https://www.dos.co.th/images/logo.png' },
    { id: 'b-ison', name: 'Ison', slug: 'ison', logoUrl: 'https://ison.co.th/wp-content/uploads/2021/08/logo-ison.png' },
    { id: 'b-bosny', name: 'Bosny', slug: 'bosny', logoUrl: 'https://www.bosny.com/images/logo.png' },
    { id: 'b-tipco', name: 'Tipco', slug: 'tipco', logoUrl: 'https://www.tipcoasphalt.com/wp-content/themes/tipcoasphalt/images/logo.png' },
];

export const mockProducts: Product[] = [
    // --- ไม้ ---
    {
        id: 'p-wood-1',
        name: 'ไม้ยูคาลิปตัส คัดเกรด ขนาด 3 นิ้ว',
        slug: 'eucalyptus-3-inch',
        description: 'ไม้คุณภาพสูง ทนทาน เหมาะสำหรับงานนั่งร้านและโครงสร้างชั่วคราว',
        price: 45,
        imageUrls: ['/products/ไม้/ไม้ยูคา.jpg'],
        categoryId: 'cat-wood',
        brandId: 'b-scg',
        isFeatured: true,
        specifications: { 'ขนาด': '3 นิ้ว', 'ความยาว': '3 เมตร' },
    },
    {
        id: 'p-wood-2',
        name: 'ไม้หน้าตัดสี่เหลี่ยมยาว 1.5 เมตร',
        slug: 'square-timber-1-5m',
        description: 'ไม้แปรรูปสี่เหลี่ยม เนื้อเรียบ แข็งแรง',
        price: 85,
        imageUrls: ['/products/ไม้/ไม้หน้าตัดสี่เหลี่ยมยาว.jpg'],
        categoryId: 'cat-wood',
        brandId: 'b-scg',
        isFeatured: false,
        specifications: { 'ขนาด': '2x2 นิ้ว', 'ความยาว': '1.5 เมตร' },
    },

    // --- แผ่นยิปซั่ม SCG ---
    {
        id: 'p-gypsum-1',
        name: 'แผ่นยิปซั่ม SCG มาตรฐาน หนา 9 มม.',
        slug: 'scg-gypsum-9mm',
        description: 'ผิวเรียบเนียน ติดตั้งง่าย ทนต่อการติดไฟ เหมาะสำหรับผนังและฝ้าภายใน',
        price: 165,
        imageUrls: ['/products/แผ่นยิปซั่ม/scg/product_112881_images_294058_ZDA0101001601D0025-01.jpeg'],
        categoryId: 'cat-gypsum',
        brandId: 'b-scg',
        isFeatured: true,
        specifications: { 'ความหนา': '9 มม.', 'ขนาด': '120x240 ซม.' },
    },
    {
        id: 'p-gypsum-2',
        name: 'แผ่นยิปซั่ม SCG ทนชื้น',
        slug: 'scg-gypsum-moisture-resistant',
        description: 'พัฒนาขึ้นเพื่อพื้นที่ที่มีความชื้นสูง เช่น ห้องน้ำ ห้องครัว',
        price: 210,
        imageUrls: ['/products/แผ่นยิปซั่ม/scg/product_128616_images_294070_ZDA0102001601D0506-01.jpeg'],
        categoryId: 'cat-gypsum',
        brandId: 'b-scg',
        isFeatured: false,
        specifications: { 'ความหนา': '9 มม.', 'คุณสมบัติ': 'ทนความชื้น' },
    },

    // --- โครงคร่าวผนัง ---
    {
        id: 'p-frame-1',
        name: 'โครงคร่าวซีลายน์ SCG C-Line',
        slug: 'scg-c-line',
        description: 'เหล็กชุบสังกะสีคุณภาพสูง ปลอดสนิม ใช้สำหรับงานฝ้าเพดาน',
        price: 28,
        imageUrls: ['/products/โครงคร่าวผนัง/scg/product_113815_images_dc678afc-ac00-4acc-b1df-d01b005c8549_plus c-line_pd435954.jpeg'],
        categoryId: 'cat-structure',
        brandId: 'b-scg',
        isFeatured: true,
        specifications: { 'วัสดุ': 'เหล็กชุบสังกะสี', 'ยาว': '4 เมตร' },
    },
    {
        id: 'p-frame-2',
        name: 'โครงคร่าวผนัง SCG Pro Wall Angle',
        slug: 'scg-pro-wall-angle',
        description: 'ฉากเหล็กสำหรับติดตั้งริมผนัง เพื่อความแข็งแรงของระบบฝ้า',
        price: 15,
        imageUrls: ['/products/โครงคร่าวผนัง/scg/product_113833_images_42959ef0-de52-47e7-9f79-9ba42324bee3_pro wall angle_pd436853.jpeg'],
        categoryId: 'cat-structure',
        brandId: 'b-scg',
        isFeatured: false,
        specifications: { 'วัสดุ': 'เหล็ก', 'ยาว': '2.4 เมตร' },
    },

    // --- กาวตะปู Bosny ---
    {
        id: 'p-glue-1',
        name: 'กาวตะปู Bosny No More Nail (M910)',
        slug: 'bosny-m910-adhesive',
        description: 'กาวตะปูแรงยึดเกาะสูง สูตรแห้งไว ใช้ยึดติดวัสดุแทนการตอกตะปู',
        price: 125,
        imageUrls: ['/products/กาวตะปู/bosny/m910-1.png'],
        categoryId: 'cat-cement-plaster',
        brandId: 'b-bosny',
        isFeatured: true,
        specifications: { 'รุ่น': 'M910', 'ขนาด': '300 มล.', 'สี': 'น้ำตาลอ่อน' },
    },
    {
        id: 'p-glue-2',
        name: 'กาวตะปู Bosny (M930)',
        slug: 'bosny-m930-adhesive',
        description: 'กาวตะปูสารพัดประโยชน์ ยึดเกาะแน่น ทนทานต่อสภาวะอากาศ',
        price: 135,
        imageUrls: ['/products/กาวตะปู/bosny/m930-1.png'],
        categoryId: 'cat-cement-plaster',
        brandId: 'b-bosny',
        isFeatured: false,
        specifications: { 'รุ่น': 'M930', 'ขนาด': '300 มล.' },
    },

    // --- ถังบำบัด ---
    {
        id: 'p-tank-1',
        name: 'ถังบำบัดน้ำเสีย DOS 1000 ลิตร',
        slug: 'dos-1000l-tank',
        description: 'ถังบำบัดมาตรฐานสูง แข็งแรงทนทาน ไร้กลิ่นรบกวน',
        price: 4500,
        imageUrls: ['/products/ถังบำบัด/dos/340268.jpg'],
        categoryId: 'cat-tank',
        brandId: 'b-dos',
        isFeatured: true,
        specifications: { 'ความจุ': '1000 ลิตร', 'วัสดุ': 'Polyethylene' },
    },

    // --- ลูกบิด ---
    {
        id: 'p-knob-1',
        name: 'ลูกบิดประตู Ison สแตนเลสสีดำ',
        slug: 'ison-black-knob',
        description: 'ดีไซน์ทันสมัย แข็งแรง ปลอดภัยด้วยระบบล็อคมาตรฐาน',
        price: 350,
        imageUrls: ['/products/ลูกบิด/ison/8812-SS-BK-10.jpg'],
        categoryId: 'cat-hardware',
        brandId: 'b-ison',
        isFeatured: false,
        specifications: { 'รุ่น': '8812-SS-BK-10', 'สี': 'ดำด้าน' },
    },

    // --- แม่กุญแจ ---
    {
        id: 'p-padlock-1',
        name: 'กุญแจคล้องเหล็ก Ison 30มม.',
        slug: 'ison-padlock-30mm',
        description: 'ตัวกุญแจผลิตจากเหล็กกล้า แข็งแรงทนทานต่อการตัด',
        price: 150,
        imageUrls: ['/products/แม่กุญแจ/ison/กุญแจคล้องเหล็กรุ่น-NO.877CP-30mm..jpg'],
        categoryId: 'cat-hardware',
        brandId: 'b-ison',
        isFeatured: false,
        specifications: { 'ขนาด': '30 มม.', 'รุ่น': 'NO.877CP' },
    },

    // --- ไม้ระแนง ---
    {
        id: 'p-lath-1',
        name: 'ไม้ระแนง เฌอร่า ผิวเรียบ สีเทาอ่อน',
        slug: 'shera-lath-grey',
        description: 'สวยงามเหมือนไม้จริง ทนแดด ทนฝน ปลวกไม่กิน',
        price: 65,
        imageUrls: ['/products/ไม้ระแนง/shera/ไม้ระแนงลายเสี้ยนสีเทาอ่อน_3-01.webp'],
        categoryId: 'cat-lath',
        brandId: 'b-shera',
        isFeatured: true,
        specifications: { 'วัสดุ': 'ไฟเบอร์ซีเมนต์', 'ขนาด': '3 นิ้ว' },
    },

    // --- แผ่นฝ้า ---
    {
        id: 'p-ceiling-1',
        name: 'แผ่นฝ้าเฌอร่าบอร์ด มาตรฐาน',
        slug: 'shera-ceiling-board',
        description: 'แผ่นฝ้าคุณภาพสูง น้ำหนักเบา แข็งแรง ติดตั้งง่าย',
        price: 95,
        imageUrls: ['/products/แผ่นฝ้า/shera/BCS000402400001_แผ่นฝ้าเฌอร่าบอร์ด.webp'],
        categoryId: 'cat-gypsum',
        brandId: 'b-shera',
        isFeatured: false,
        specifications: { 'ขนาด': '60x60 ซม.', 'รุ่น': 'BCS' },
    },

    // --- ช่องเซอร์วิส ---
    {
        id: 'p-service-1',
        name: 'ช่องเซอร์วิสสำเร็จรูป SCG ภายใน',
        slug: 'scg-service-door-indoor',
        description: 'ช่องสำหรับงานบำรุงรักษา สะดวก เรียบเนียนกับฝ้าเพดาน',
        price: 450,
        imageUrls: ['/products/ช่องเซอร์วิส/scg/product_212288_images_102743_ZDA0190911694D0032.jpeg'],
        categoryId: 'cat-service-door',
        brandId: 'b-scg',
        isFeatured: false,
        specifications: { 'ขนาด': '45x45 ซม.', 'การใช้งาน': 'ฝ้าเพดาน 내부' },
    },

    // --- อิฐ/ปูนแท่ง ---
    {
        id: 'p-brick-1',
        name: 'อิฐบล็อกมวลเบา คละขนาด',
        slug: 'concrete-block-mix',
        description: 'อิฐคุณภาพสูง ทนทาน ประหยัดค่าใช้จ่ายในการก่อสร้าง',
        price: 18,
        imageUrls: ['/products/ปุนแท่ง/56304276_1454420521361333_5889888673926742016_n.jpg'],
        categoryId: 'cat-brick',
        brandId: 'b-scg',
        isFeatured: true,
        specifications: { 'ประเภท': 'คอนกรีตบล็อก', 'น้ำหนัก': '7 กก.' },
    },

    // --- ยางมะตอย ---
    {
        id: 'p-asphalt-1',
        name: 'ยางมะตอยน้ำ Tipco คุณภาพสูง',
        slug: 'tipco-liquid-asphalt',
        description: 'สำหรับซ่อมบำรุงผิวทาง งานประสานผิวทางยางมะตอย',
        price: 1250,
        imageUrls: ['/products/ยางมะตอย/tipco/122092_0.jpg'],
        categoryId: 'cat-asphalt',
        brandId: 'b-tipco',
        isFeatured: false,
        specifications: { 'ขนาด': '20 ลิตร', 'แบรนด์': 'Tipco' },
    },
];
