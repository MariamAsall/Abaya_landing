const WA_NUMBER = '20123456789'; // استبدلي هذا بالرقم الحقيقي للواتساب بدون + أو 00

const products = [
  {
    name: 'عباية الجوهرة',
    fabric: 'كريب مزدوج – ناعم ومريح',
    price: 1299,
    badge: 'الأكثر طلبًا',
    img: 'images/1.avif',
  },
  {
    name: 'عباية اللؤلؤ',
    fabric: 'شيفون مع بطانة ساتان',
    price: 1550,
    badge: 'جديد',
    img: 'images/2.avif',
  },
  {
    name: 'عباية الأثير',
    fabric: 'جيرسيه عالي الجودة',
    price: 980,
    badge: null,
    img: 'images/3.avif',
  },
  {
    name: 'عباية الفردوس',
    fabric: 'قماش نسيج مع تطريز يدوي',
    price: 1850,
    badge: 'محدود',
    img: 'images/4.avif',
  },
  {
    name: 'عباية السحر',
    fabric: 'إيطالي كريب برقبة مزخرفة',
    price: 1420,
    badge: null,
    img: 'images/5.avif',
  },
  {
    name: 'عباية الرياح',
    fabric: 'لينن فاخر خفيف الوزن',
    price: 1120,
    badge: 'جديد',
    img: 'images/6.avif',
  },
  {
    name: 'عباية الياسمين',
    fabric: 'ساتان حريري مع تفاصيل دانتيل',
    price: 1680,
    badge: 'حصري',
    img: 'images/7.avif',
  },
  {
    name: 'عباية الغروب',
    fabric: 'موسلين مزدوج ناعم الملمس',
    price: 1350,
    badge: null,
    img: 'images/8.avif',
  },
];

const waIcon = `<svg class="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
    -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463
    -2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134
    -.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52
    -.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371
    -.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462
    1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489
    1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248
    -.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.548 5.876L0 24l6.29
    -1.518A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0
    21.818a9.818 9.818 0 01-5.145-1.453l-.369-.219-3.733.9.934-3.651-.24-.376
    A9.818 9.818 0 1112 21.818z"/>
</svg>`;

const grid = document.getElementById('products-grid');

products.forEach(p => {
  const msg = encodeURIComponent(`السلام عليكم، أرغب في الاستفسار عن موديل "${p.name}" بسعر ${p.price.toLocaleString('ar-EG')} ج.م`);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`;

  grid.insertAdjacentHTML('beforeend', `
    <article class="card">
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<div class="card-badge">${p.badge}</div>` : ''}
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-fabric">${p.fabric}</div>
        <div class="card-price">${p.price.toLocaleString('ar-EG')} <span>ج.م</span></div>
      </div>
      <a class="wa-btn" href="${waUrl}" target="_blank" rel="noopener">
        ${waIcon}
        اطلبي الآن عبر الواتساب
      </a>
    </article>
  `);
});
