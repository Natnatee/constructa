# Constructa - เว็บไซต์ขายวัสดุก่อสร้าง

## Project Overview
Landing page สำหรับร้านขายวัสดุก่อสร้าง พร้อมระบบ Admin Panel จัดการเนื้อหา  
**Reference Design**: [kiatthavee.com](https://www.kiatthavee.com/)  
**Theme**: ฟ้าขาว (Blue & White) - Modern, Professional  
**Budget**: ฿15,000  
**MVP Timeline**: 2 วัน  

---

## 🎯 Core Features

### หน้าลูกค้า (User-Facing)
| หน้า | รายละเอียด |
|------|-----------|
| **หน้าแรก** | Hero banner slider, สินค้าแนะนำ, แบรนด์พันธมิตร |
| **เกี่ยวกับเรา** | ประวัติบริษัท, Vision/Mission, ทีมงาน |
| **สินค้า** | แสดงสินค้าตามหมวดหมู่, ค้นหา, กรอง |
| **แบรนด์สินค้า** | โลโก้แบรนด์ทั้งหมด, สินค้าแยกตามแบรนด์ |
| **ติดต่อเรา** | ฟอร์มติดต่อ, แผนที่, ข้อมูลติดต่อ |

### หน้า Admin (Admin Panel)
| ฟีเจอร์ | CRUD |
|--------|------|
| **Banner** | เพิ่ม/ลบ/แก้ไข รูป Banner สไลด์ |
| **หมวดหมู่สินค้า** | เพิ่ม/ลบ/แก้ไข Categories |
| **สินค้า** | เพิ่ม/ลบ/แก้ไข Products |
| **แบรนด์** | เพิ่ม/ลบ/แก้ไข Brands |

---

## 🛠️ Technical Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Animation | Framer Motion |
| Data Fetching | React Query + Axios |
| Utils | clsx, tailwind-merge |
| Server | Server Actions (production) |
| Image Storage | Cloudinary (production) |
| Database | TBD (Supabase/PlanetScale) |
| Deployment | Vercel / Web Hosting |

---

## 📁 Data Models

### Banner
```typescript
interface Banner {
  id: string;
  title: string;
  imageUrl: string;
  link?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### Category
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
  order: number;
  isActive: boolean;
}
```

### Product
```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price?: number;
  imageUrls: string[];
  categoryId: string;
  brandId?: string;
  specifications?: Record<string, string>;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### Brand
```typescript
interface Brand {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  description?: string;
  website?: string;
  isActive: boolean;
  order: number;
}
```

---

## 🎨 Design System

### Colors
```css
/* Blue & White Theme */
--primary-500: #0066CC;  /* Main Blue */
--accent-blue: #003D80;  /* Dark Blue */
--background: #FFFFFF;   /* White */
--surface: #F0F7FF;      /* Light Blue/Gray */
```

### UI Library & Style
- **Iconography**: Lucide React (เรียบง่าย modern)
- **Animation**: Framer Motion (Smooth transitions, hover effects)
- **Typography**: เน้นอ่านง่าย (IBM Plex Sans Thai / Sarabun)
- **Design Style**: Glassmorphism (subtle), Soft Shadows, Professional Blue
