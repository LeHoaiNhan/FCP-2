export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_url: string | null;
  status: "draft" | "published" | "archived";
  published_at: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export const LOCAL_POSTS: Post[] = [
  {
    id: "33333333-3333-3333-3333-333333333301",
    title: "CEO Lê Thị Thúy Hoa và khát vọng cùng nông dân hiện thực hóa nông nghiệp organic",
    slug: "ceo-le-thi-thuy-hoa-va-khat-vong-cung-nong-dan-hien-thuc-hoa-nong-nghiep-organic",
    excerpt:
      "Hành trình của Flora Global đồng hành cùng nông dân Việt Nam xây dựng chuỗi giá trị nông nghiệp hữu cơ.",
    content: `Công ty TNHH Flora Global tư vấn chứng nhận hữu cơ, giải pháp vùng trồng và sản phẩm nông nghiệp hữu cơ.

Chúng tôi kết nối nông dân với tiêu chuẩn USDA, EU Organic, GlobalG.A.P. và HACCP — giúp sản phẩm Việt Nam tiếp cận thị trường quốc tế.`,
    cover_url: null,
    status: "published",
    published_at: "2025-09-04T00:00:00.000Z",
  },
  {
    id: "33333333-3333-3333-3333-333333333302",
    title: "Nông sản hữu cơ chiếm ưu thế vượt trội",
    slug: "nong-san-huu-co-chiem-uu-the-vuot-troi",
    excerpt:
      "Người tiêu dùng ưu tiên thành phần tự nhiên — nhu cầu nông sản hữu cơ tăng trưởng bền vững.",
    content: `Thị trường nông sản hữu cơ đang tăng trưởng bất chấp thách thức kinh tế. Người tiêu dùng sẵn sàng chi trả cao hơn cho sản phẩm bền vững và an toàn.

Tại Việt Nam, phong trào sản xuất hữu cơ được nhân rộng tại nhiều địa phương, mở ra cơ hội xuất khẩu và tiêu dùng nội địa.`,
    cover_url: null,
    status: "published",
    published_at: "2025-08-20T00:00:00.000Z",
  },
  {
    id: "33333333-3333-3333-3333-333333333303",
    title: "Việt Nam đẩy mạnh phát triển nông nghiệp hữu cơ",
    slug: "viet-nam-day-manh-phat-trien-nong-nghiep-huu-co",
    excerpt:
      "Chính sách và thực tiễn thúc đẩy chuyển đổi sang mô hình nông nghiệp hữu cơ tại Việt Nam.",
    content: `Việt Nam đang đẩy mạnh nông nghiệp hữu cơ thông qua chứng nhận, hỗ trợ vùng trồng và liên kết chuỗi giá trị.

Flora Global đồng hành với doanh nghiệp và nông hộ trong tư vấn chứng nhận, đầu vào hữu cơ và logistics xuất khẩu.`,
    cover_url: null,
    status: "published",
    published_at: "2025-08-10T00:00:00.000Z",
  },
  {
    id: "33333333-3333-3333-3333-333333333304",
    title: "Diện tích nông nghiệp hữu cơ toàn cầu đạt gần 99 triệu ha",
    slug: "dien-tich-nong-nghiep-huu-co-toan-cau-dat-gan-99-trieu-ha",
    excerpt:
      "Báo cáo FiBL phản ánh xu hướng phát triển tích cực của thị trường hữu cơ toàn cầu.",
    content: `Theo báo cáo Nông nghiệp hữu cơ toàn cầu của FiBL, diện tích canh tác hữu cơ tiếp tục mở rộng, với nhiều quốc gia ghi nhận tăng trưởng về số lượng nhà sản xuất.

Việt Nam nằm trong nhóm quốc gia có mức tăng trưởng đáng kể — cơ hội cho doanh nghiệp chuẩn bị chứng nhận và chuỗi cung ứng xuất khẩu.`,
    cover_url: null,
    status: "published",
    published_at: "2025-09-08T00:00:00.000Z",
  },
  {
    id: "33333333-3333-3333-3333-333333333305",
    title: "5 xu hướng nông nghiệp mới 2025",
    slug: "5-xu-huong-nong-nghiep-moi-2025",
    excerpt:
      "Precision farming, chứng nhận quốc tế, đầu vào hữu cơ và logistics lạnh định hình nông nghiệp 2025.",
    content: `Năm 2025, nông nghiệp hữu cơ gắn với canh tác chính xác, tuân thủ chứng nhận toàn cầu, đầu vào chất lượng cao và chuỗi xuất khẩu bảo toàn nhiệt độ.

Flora Global tập trung vào bốn trụ cột: Elite Inputs, Precision Growing, Total Compliance và Seamless Export.`,
    cover_url: null,
    status: "published",
    published_at: "2025-07-15T00:00:00.000Z",
  },
  {
    id: "33333333-3333-3333-3333-333333333306",
    title: titleFromSlug(
      "bat-kip-xu-huong-huu-co-huong-di-ben-vung-cho-nen-nong-nghiep-viet-nam",
    ),
    slug: "bat-kip-xu-huong-huu-co-huong-di-ben-vung-cho-nen-nong-nghiep-viet-nam",
    excerpt: "Hướng đi bền vững cho nền nông nghiệp Việt Nam trong kỷ nguyên hữu cơ.",
    content:
      "Chuyển đổi hữu cơ không chỉ là xu hướng tiêu dùng mà còn là chiến lược dài hạn cho nông nghiệp Việt Nam — từ vùng trồng đến thị trường xuất khẩu.",
    cover_url: null,
    status: "published",
    published_at: "2025-06-01T00:00:00.000Z",
  },
];

export const LOCAL_SERVICES: Service[] = [
  {
    id: "svc-1",
    title: "Premium Agricultural Inputs",
    slug: "premium-agricultural-inputs-the-japanese-foundation",
    summary: "Đầu vào hữu cơ Nhật Bản — nền tảng dinh dưỡng đất.",
    body: "Nhập khẩu phân gà hữu cơ đã lên men và xử lý nhiệt từ Nhật Bản, đảm bảo dinh dưỡng cao và an toàn cho vùng trồng hữu cơ.",
  },
  {
    id: "svc-2",
    title: "Precision Growing",
    slug: "farming-precision-cultivation-the-honey-no-9-legacy",
    summary: "Canh tác chính xác trên các vùng trồng trọng điểm.",
    body: "Áp dụng quy trình sinh học chuẩn xác tại Đồng Nai, Long An, Kiên Giang để đảm bảo độ đồng đều và chất lượng trái cây cao.",
  },
  {
    id: "svc-3",
    title: "Organic Certification & Compliance",
    slug: "organic-certification-global-compliance-solutions",
    summary: "Tư vấn chứng nhận USDA, EU Organic, GlobalG.A.P., HACCP.",
    body: "Đội ngũ chuyên gia đồng hành qua toàn bộ quy trình audit và hồ sơ chứng nhận để mở cửa thị trường quốc tế.",
  },
  {
    id: "svc-4",
    title: "Export Logistics Chain",
    slug: "the-export-logistic-chain-precision-velocity-thermal-integrity",
    summary: "Logistics xuất khẩu từ sau thu hoạch đến thị trường đích.",
    body: "Quản lý chuỗi lạnh, vận tải quốc tế và chứng từ xuất khẩu — giữ độ tươi và tuân thủ tại điểm đến.",
  },
];
