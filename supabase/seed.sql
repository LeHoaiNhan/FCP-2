-- Seed from WordPress dump (flora-global.vn) — May 2026 snapshot
-- Prices from wpdg_wc_product_meta_lookup; titles/slugs from Yoast indexables

insert into public.categories (id, name, slug, description, sort_order) values
  ('11111111-1111-1111-1111-111111111101', 'Sản phẩm hữu cơ', 'san-pham-huu-co', 'Nông sản và sản phẩm hữu cơ', 1),
  ('11111111-1111-1111-1111-111111111102', 'Nguyên liệu nhập khẩu hữu cơ', 'nguyen-lieu-nhap-khau-huu-co', 'Nguyên liệu hữu cơ nhập khẩu', 2)
on conflict (slug) do nothing;

insert into public.products (id, name, slug, short_description, price, currency, stock_status, status, seo_title) values
  (
    '22222222-2222-2222-2222-222222222201',
    'Phân gà hữu cơ Nhật Bản',
    'phan-ga-huu-co-nhat-ban',
    'Phân gà hữu cơ nhập khẩu từ Nhật Bản, đã lên men và xử lý nhiệt.',
    250000,
    'VND',
    'instock',
    'published',
    'Phân gà hữu cơ Nhật Bản | Flora Global'
  ),
  (
    '22222222-2222-2222-2222-222222222202',
    'Phân bón hữu cơ từ tro phân gà nung',
    'phan-bon-huu-co-tu-tro-phan-ga-nung',
    'Phân bón hỗn hợp PK hữu cơ từ tro phân gà nung.',
    125000,
    'VND',
    'instock',
    'published',
    'Phân bón hữu cơ từ tro phân gà nung | Flora Global'
  ),
  (
    '22222222-2222-2222-2222-222222222203',
    'Bột Protein từ cá',
    'bot-protein-tu-ca',
    'Bột protein từ cá — nguyên liệu hữu cơ chất lượng cao.',
    125000,
    'VND',
    'instock',
    'published',
    'Bột Protein từ cá | Flora Global'
  ),
  (
    '22222222-2222-2222-2222-222222222204',
    'Bột hạt sen 100% nguyên chất',
    'bot-hat-sen-100-nguyen-chat',
    'Bột hạt sen nguyên chất — liên hệ để báo giá.',
    null,
    'VND',
    'instock',
    'published',
    'Bột hạt sen 100% nguyên chất | Flora Global'
  )
on conflict (slug) do update set
  name = excluded.name,
  price = excluded.price,
  status = excluded.status;

insert into public.product_categories (product_id, category_id) values
  ('22222222-2222-2222-2222-222222222201', '11111111-1111-1111-1111-111111111102'),
  ('22222222-2222-2222-2222-222222222202', '11111111-1111-1111-1111-111111111102'),
  ('22222222-2222-2222-2222-222222222203', '11111111-1111-1111-1111-111111111101'),
  ('22222222-2222-2222-2222-222222222204', '11111111-1111-1111-1111-111111111101')
on conflict do nothing;

insert into public.pages (title, slug, content, status, seo_title) values
  ('Trang chủ', 'home', 'Flora Global — Precision Agriculture. Global Compliance. Integrated Excellence.', 'published', 'Flora Global Corporate'),
  ('Về chúng tôi', 'about-us', 'Công ty TNHH Flora Global — tư vấn chứng nhận hữu cơ và giải pháp vùng trồng hữu cơ.', 'published', 'About Us | Flora Global'),
  ('Liên hệ', 'contact', 'Liên hệ Flora Global', 'published', 'Contact | Flora Global'),
  ('Sản phẩm', 'products', 'Danh mục sản phẩm', 'published', 'Products | Flora Global')
on conflict (slug) do nothing;
