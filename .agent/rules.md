# Project Rules - Constructa (โชติพิพัฒน์ค้าไม้ จำกัด)

## ภาษา
- ตอบภาษาไทยเท่านั้น
- Code comments เป็นภาษาอังกฤษ

## Package Manager
- ใช้ `pnpm` เท่านั้น

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Data Fetching**: React Query + Axios (client), Server Actions (real implementation)
- **State**: React Query cache, React Context ถ้าจำเป็น

## Project Structure
```
app/
├── (user)/           # หน้าลูกค้าเข้าดู
│   ├── page.tsx      # หน้าแรก
│   ├── about/        # เกี่ยวกับเรา
│   ├── products/     # สินค้าทั้งหมด
│   ├── brands/       # แบรนด์สินค้า
│   └── contact/      # ติดต่อเรา
│
├── (admin)/          # หน้า Admin
│   └── admin/
│       ├── page.tsx       # Dashboard
│       ├── banners/       # จัดการ Banner
│       ├── products/      # จัดการสินค้า
│       ├── categories/    # จัดการหมวดหมู่
│       └── brands/        # จัดการแบรนด์
│
├── api/              # API Routes (สำหรับ mock/test)
│   ├── banners/
│   ├── products/
│   ├── categories/
│   └── brands/
│
└── layout.tsx
```

## Data Layer
- **MVP Phase**: ใช้ JSON mock data จาก `src/lib/mock-data.ts`
- **Production**: เปลี่ยนเป็น Server Actions + Database
- API Routes มีไว้สำหรับ testing เท่านั้น

## Styling Guidelines
- ธีมหลัก: **ฟ้าขาว** (Blue & White)
- Primary: `#0066CC` / `#1E90FF`
- Accent: `#003D80`
- Background: `#FFFFFF`, `#F0F7FF`
- ใช้ design แบบ modern, clean, professional
- Responsive: Mobile First

## Component Naming
- ใช้ PascalCase สำหรับ Components
- ใช้ kebab-case สำหรับ folders
- Shared components อยู่ที่ `src/components/`
- UI primitives อยู่ที่ `src/components/ui/`

## Image Handling
- MVP: ใช้รูปจาก `/public/images/`
- Production: Cloudinary

## Conventions
- ห้ามใช้ `any` ใน TypeScript
- ใช้ functional components + hooks
- Extract reusable logic เป็น custom hooks

## Commands
```bash
pnpm dev      # Development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Terminal Usage
- ห้ามใช้ความสามารถในการรันคำสั่ง (run_command) โดยตรง
- ให้เสนอรันคำสั่งเป็นข้อความ (Code Block) เพื่อให้ User คัดลอกไปรันใน Terminal เองเท่านั้น
