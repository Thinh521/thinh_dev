import { IMAGES } from "@/public/assets/images/images";

export interface TimelineItemData {
  id: number;
  title: string;
  images: string[];
  date: string;
  description: string;
}

export const photoData: TimelineItemData[] = [
  {
    id: 1,
    title: "Ảnh bảnh",
    images: [IMAGES.photo_1_1, IMAGES.photo_1_2],
    date: "Tiền Giang, ngày 04-03-2025",
    description: "Lúc này là lúc tớ đi ăn cưới em gái :>",
  },
  {
    id: 2,
    title: "Cờ phơ cùng bạn bè",
    images: [IMAGES.photo_2_1, IMAGES.photo_2_2],
    date: "Tiền Giang, ngày 04-03-2025",
    description: "Một buổi cờ phơ không biết trước.",
  },
  {
    id: 3,
    title: "Tạo ảnh theo phong cách snoopy",
    images: [IMAGES.photo_3_1, IMAGES.photo_3_2],
    date: "Tiền Giang, ngày 04-03-2025",
    description: "Tạo ảnh theo phong cách snoopy.",
  },
  {
    id: 4,
    title: "Ăn uống",
    images: [IMAGES.photo_4_1, IMAGES.photo_4_2],
    date: "Tiền Giang, ngày 04-03-2025",
    description: "Ăn uống",
  },
  {
    id: 5,
    title: "Đi làm PG + PB",
    images: [IMAGES.photo_5_1, IMAGES.photo_5_2],
    date: "Tiền Giang, ngày 04-03-2025",
    description: "Lúc này đi làm được tặng tịt.",
  },
];

export default photoData;
