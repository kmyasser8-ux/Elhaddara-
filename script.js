/**
 * =====================================================
 *   منصة الحضارة — hadhara.js
 *   Full visual transformation engine
 * =====================================================
 */

/* ─────────────────────────────────────────
   1.  DATA — sections + articles
   ───────────────────────────────────────── */

const SECTIONS = {

  islamPanel: {
    id       : "islamPanel",
    title    : "العلوم الإسلامية",
    subtitle : "العقيدة · الفقه · التصوف · الحضارة",
    icon     : "fas fa-mosque",
    symbol   : "☪",

    theme: {
      bg          : "linear-gradient(135deg,#05190f 0%,#0a2b18 40%,#071912 100%)",
      cardBg      : "rgba(16,60,35,0.55)",
      cardBorder  : "rgba(52,211,153,0.18)",
      accent      : "#4ade80",
      accentSoft  : "rgba(74,222,128,0.12)",
      glow        : "rgba(74,222,128,0.22)",
      dot         : "rgba(74,222,128,0.15)",
      tagBg       : "rgba(52,211,153,0.15)",
      tagColor    : "#6ee7b7",
      headerGrad  : "linear-gradient(90deg,#4ade80,#34d399)",
      overlayGrad : "radial-gradient(circle at 70% 30%,rgba(74,222,128,0.07),transparent 55%)",
    },

    articles: [
      {
        tag      : "عقيدة",
        title    : "الصراع الطائفي بين السلفية والإثني عشرية",
        excerpt  : "تحليل تاريخي وسياسي وفكري لأبرز التحولات العقائدية والصراعات المذهبية في العالم الإسلامي عبر القرون.",
        readTime : "١٢ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "روحانيات",
        title    : "الدعاء وتأثيره على البناء النفسي للإنسان",
        excerpt  : "كيف يُغيِّر الإيمان والدعاء سلوك الإنسان واستقراره النفسي والروحي وعلاقته بالوجود.",
        readTime : "٨ دقائق",
        depth    : "متوسط",
      },
      {
        tag      : "فقه",
        title    : "الفقه الإسلامي بين الأصالة والتجديد",
        excerpt  : "قراءة معمَّقة في تطور المدارس الفقهية الأربع والتحديات المعاصرة أمام الاجتهاد.",
        readTime : "١٥ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "حضارة",
        title    : "أسباب نهوض الحضارة الإسلامية وسقوطها",
        excerpt  : "رحلة عبر العوامل الداخلية والخارجية التي رسمت مسار الحضارة الإسلامية الكبرى.",
        readTime : "١٨ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "تصوف",
        title    : "ابن عربي ووحدة الوجود — فلسفة أم ضلال؟",
        excerpt  : "قراءة نقدية في فكر الشيخ الأكبر بين من يراه وليّاً ومن يراه خارجاً عن الملة.",
        readTime : "١٠ دقائق",
        depth    : "متوسط",
      },
      {
        tag      : "فكر",
        title    : "الإسلام والحداثة — تعارض أم توافق؟",
        excerpt  : "هل يمكن للمسلم المعاصر أن يعيش الحداثة دون أن يتخلى عن هويته الإسلامية؟",
        readTime : "١١ دقيقة",
        depth    : "متوسط",
      },
    ],
  },

  /* ───── POLITICS ───── */
  politicsPanel: {
    id       : "politicsPanel",
    title    : "السياسة والجيوسياسية",
    subtitle : "القوى العالمية · الصراعات · بناء الدول",
    icon     : "fas fa-globe",
    symbol   : "⚑",

    theme: {
      bg          : "linear-gradient(135deg,#06091a 0%,#0c1536 40%,#050d28 100%)",
      cardBg      : "rgba(15,25,70,0.55)",
      cardBorder  : "rgba(96,165,250,0.18)",
      accent      : "#60a5fa",
      accentSoft  : "rgba(96,165,250,0.12)",
      glow        : "rgba(96,165,250,0.22)",
      dot         : "rgba(96,165,250,0.15)",
      tagBg       : "rgba(96,165,250,0.15)",
      tagColor    : "#93c5fd",
      headerGrad  : "linear-gradient(90deg,#60a5fa,#3b82f6)",
      overlayGrad : "radial-gradient(circle at 30% 60%,rgba(96,165,250,0.07),transparent 55%)",
    },

    articles: [
      {
        tag      : "هيمنة",
        title    : "كيف تبني الدول العظمى نفوذها العالمي؟",
        excerpt  : "تحليل لآليات الاقتصاد والعسكر والتكنولوجيا والثقافة في صناعة الهيمنة الدولية.",
        readTime : "١٤ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "تاريخ",
        title    : "قصص صعود الدول من الفوضى إلى القوة",
        excerpt  : "دراسة لتجارب اليابان والصين وألمانيا في إعادة بناء القوة الوطنية من الرماد.",
        readTime : "١٦ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "جيوسياسة",
        title    : "صراع المحاور: الشرق والغرب في عالم متعدد القطبية",
        excerpt  : "كيف تعيد روسيا والصين وأمريكا رسم خريطة النفوذ العالمي في القرن الحادي والعشرين.",
        readTime : "١٣ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "منطقة",
        title    : "العالم العربي بين الثورة والثورة المضادة",
        excerpt  : "قراءة في أحداث ٢٠١١ وما تلاها من تفكيك وإعادة هيكلة للخريطة السياسية العربية.",
        readTime : "١٧ دقيقة",
        depth    : "متقدّم",
      },
    ],
  },

  /* ───── PSYCHOLOGY ───── */
  psyPanel: {
    id       : "psyPanel",
    title    : "علم النفس",
    subtitle : "العقل الباطن · الشخصية · الوعي والسلوك",
    icon     : "fas fa-brain",
    symbol   : "∞",

    theme: {
      bg          : "linear-gradient(135deg,#0e0618 0%,#1a0a30 40%,#0a0420 100%)",
      cardBg      : "rgba(45,15,80,0.55)",
      cardBorder  : "rgba(167,139,250,0.18)",
      accent      : "#a78bfa",
      accentSoft  : "rgba(167,139,250,0.12)",
      glow        : "rgba(167,139,250,0.22)",
      dot         : "rgba(167,139,250,0.15)",
      tagBg       : "rgba(167,139,250,0.15)",
      tagColor    : "#c4b5fd",
      headerGrad  : "linear-gradient(90deg,#a78bfa,#8b5cf6)",
      overlayGrad : "radial-gradient(circle at 60% 40%,rgba(167,139,250,0.08),transparent 55%)",
    },

    articles: [
      {
        tag      : "لاوعي",
        title    : "قوة العقل الباطن في تشكيل الشخصية",
        excerpt  : "كيف تؤثر الأفكار المتكررة والمعتقدات الخفية على قراراتنا وسلوكنا اليومي دون أن ندري.",
        readTime : "٩ دقائق",
        depth    : "متوسط",
      },
      {
        tag      : "اجتماع",
        title    : "الوعي الجمعي وكيف يتحكم بالمجتمعات",
        excerpt  : "تحليل نفسي واجتماعي لكيفية تشكّل الأفكار الجماعية وصناعة الرأي العام في العصر الرقمي.",
        readTime : "١٢ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "شخصية",
        title    : "نظريات الشخصية الكبرى — يونغ وفرويد وماسلو",
        excerpt  : "مقارنة نقدية بين أبرز نظريات الشخصية وما تقدمه من إجابات عن أسئلة الهوية البشرية.",
        readTime : "١٤ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "صدمة",
        title    : "الصدمة النفسية وكيف تُعيد تشكيل الدماغ",
        excerpt  : "أحدث الأبحاث العلمية في علم الأعصاب حول تأثير الصدمة على البنية الدماغية والسلوك.",
        readTime : "١١ دقيقة",
        depth    : "متوسط",
      },
    ],
  },

  /* ───── PHILOSOPHY ───── */
  philPanel: {
    id       : "philPanel",
    title    : "الفلسفة والفكر",
    subtitle : "المذاهب الكبرى · الوجود · المعنى",
    icon     : "fas fa-scroll",
    symbol   : "φ",

    theme: {
      bg          : "linear-gradient(135deg,#180e04 0%,#2d1a06 40%,#1a0f02 100%)",
      cardBg      : "rgba(60,35,10,0.55)",
      cardBorder  : "rgba(251,191,36,0.18)",
      accent      : "#fbbf24",
      accentSoft  : "rgba(251,191,36,0.12)",
      glow        : "rgba(251,191,36,0.22)",
      dot         : "rgba(251,191,36,0.15)",
      tagBg       : "rgba(251,191,36,0.15)",
      tagColor    : "#fcd34d",
      headerGrad  : "linear-gradient(90deg,#fbbf24,#f59e0b)",
      overlayGrad : "radial-gradient(circle at 80% 20%,rgba(251,191,36,0.07),transparent 55%)",
    },

    articles: [
      {
        tag      : "مذاهب",
        title    : "أهم المذاهب الفكرية التي غيّرت العالم",
        excerpt  : "رحلة عبر الوجودية والماركسية والعدمية والعقلانية الحديثة وكيف رسمت ملامح العالم المعاصر.",
        readTime : "١٥ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "تاريخ",
        title    : "كيف تطورت الفلسفة من اليونان إلى الحداثة؟",
        excerpt  : "تاريخ التحولات الفكرية الكبرى وصراع الإنسان مع أسئلة الوجود عبر ألفين وخمسمائة عام.",
        readTime : "١٨ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "وجود",
        title    : "نيتشه وموت الإله — تفكيك أم تجديد للقيم؟",
        excerpt  : "قراءة في أعمق أفكار نيتشه حول الأخلاق والإنسان الأعلى وما بعد الحداثة.",
        readTime : "١٢ دقيقة",
        depth    : "متقدّم",
      },
      {
        tag      : "حكمة",
        title    : "الفلسفة الإسلامية — ابن رشد وابن سينا والكندي",
        excerpt  : "كيف حوّل الفلاسفة المسلمون التراث اليوناني وأضافوا إليه أبعاداً إيمانية وحضارية فريدة.",
        readTime : "١٣ دقيقة",
        depth    : "متقدّم",
      },
    ],
  },

};

/* ─────────────────────────────────────────
   2.  RESEARCH & ARTICLES data
   ───────────────────────────────────────── */

const RESEARCH_ARTICLES = [
  {
    cat      : "بحث أكاديمي",
    title    : "الهوية الحضارية في مواجهة العولمة",
    excerpt  : "دراسة معمَّقة في كيفية مقاومة الهويات الثقافية لضغوط العولمة المتسارعة.",
    author   : "د. فؤاد الحسيني",
    date     : "مايو ٢٠٢٦",
    readTime : "٢٠ دقيقة",
  },
  {
    cat      : "مقال نقدي",
    title    : "أزمة المثقف العربي في عصر الخوارزميات",
    excerpt  : "هل لا يزال للمثقف التقليدي دور في عالم تهيمن عليه خوارزميات التوصية؟",
    author   : "ياسمين النور",
    date     : "أبريل ٢٠٢٦",
    readTime : "١١ دقيقة",
  },
  {
    cat      : "دراسة مقارنة",
    title    : "التنوير الغربي وأسئلة الروح — ما الذي فاته؟",
    excerpt  : "نقد حضاري للتنوير الأوروبي من منظور إسلامي وآسيوي مقارن.",
    author   : "د. طارق البشري",
    date     : "مارس ٢٠٢٦",
    readTime : "١٦ دقيقة",
  },
  {
    cat      : "ورقة بحثية",
    title    : "علم النفس والفقه الإسلامي — نقاط التقاء أم تعارض؟",
    excerpt  : "محاولة تجسير الهوة بين العلوم النفسية الحديثة والموروث الفقهي الإسلامي.",
    author   : "د. سمر القاضي",
    date     : "فبراير ٢٠٢٦",
    readTime : "١٩ دقيقة",
  },
  {
    cat      : "مقال فكري",
    title    : "قراءة في مفهوم الحرية بين هيغل وإقبال",
    excerpt  : "مقارنة جريئة بين فيلسوفَين شكّل كلٌّ منهما وجدان جيله من زاويتين مختلفتين.",
    author   : "أحمد الريسوني",
    date     : "يناير ٢٠٢٦",
    readTime : "١٣ دقيقة",
  },
  {
    cat      : "تقرير تحليلي",
    title    : "الإسلام السياسي بعد عقد من الربيع العربي",
    excerpt  : "رصد موضوعي لمسارات الحركات الإسلامية السياسية وتحولاتها بعد ٢٠١١.",
    author   : "عمر الإدريسي",
    date     : "ديسمبر ٢٠٢٥",
    readTime : "٢٢ دقيقة",
  },
];

/* ─────────────────────────────────────────
   3.  ANALYSIS data
   ───────────────────────────────────────── */

const ANALYSIS_ITEMS = [
  {
    cat      : "تحليل جيوسياسي",
    title    : "الشرق الأوسط ٢٠٣٠ — سيناريوهات المستقبل",
    excerpt  : "رسم استشرافي لأربعة سيناريوهات محتملة لخريطة الشرق الأوسط خلال السنوات القادمة.",
    author   : "فريق التحرير",
    date     : "مايو ٢٠٢٦",
    readTime : "٢٥ دقيقة",
  },
  {
    cat      : "تحليل حضاري",
    title    : "لماذا يتراجع الغرب؟ قراءة في عوامل الأفول",
    excerpt  : "تشخيص موضوعي للأزمات الديموغرافية والقيمية والاقتصادية التي تعصف بالغرب المعاصر.",
    author   : "د. محمد بن إبراهيم",
    date     : "أبريل ٢٠٢٦",
    readTime : "١٨ دقيقة",
  },
  {
    cat      : "دراسة نفسية",
    title    : "تأثير وسائل التواصل على الصحة النفسية للشباب",
    excerpt  : "تحليل لأحدث الدراسات العلمية حول علاقة منصات التواصل بالاكتئاب والقلق.",
    author   : "د. هند الحربي",
    date     : "مارس ٢٠٢٦",
    readTime : "١٤ دقيقة",
  },
  {
    cat      : "تحليل فكري",
    title    : "ما بعد الحداثة — فوضى أم حرية؟",
    excerpt  : "نقد وتقييم لأبرز منطلقات ما بعد الحداثة وإشكالياتها الفلسفية والأخلاقية.",
    author   : "عبدالله الغذامي",
    date     : "فبراير ٢٠٢٦",
    readTime : "١٦ دقيقة",
  },
];

/* ─────────────────────────────────────────
   4.  STATE
   ───────────────────────────────────────── */

const state = {
  activeSection  : null,   // current section id
  activeTab      : null,   // "articles" | "analysis"
  isDark         : false,
};

/* ─────────────────────────────────────────
   5.  INJECT CSS once
   ───────────────────────────────────────── */

(function injectStyles () {

  const css = `

  /* ── Page-level section view ── */
  body.section-active .hero          { opacity:0; pointer-events:none; max-height:0; overflow:hidden; transition:.6s ease; }
  body.section-active > main         { padding-top: 0 !important; }

  /* ── Section view container ── */
  #sectionView {
    position:fixed; inset:0; z-index:30;
    overflow-y:auto;
    opacity:0; visibility:hidden;
    transition: opacity .55s ease, background .55s ease;
  }
  #sectionView.visible {
    opacity:1; visibility:visible;
  }

  /* ── Dot grid overlay ── */
  #sectionView::before {
    content:"";
    position:fixed; inset:0; pointer-events:none; z-index:0;
    background-image: radial-gradient(var(--sv-dot,rgba(255,255,255,.08)) 1px, transparent 1px);
    background-size:38px 38px;
  }

  /* ── Back button ── */
  #backBtn {
    display:inline-flex; align-items:center; gap:10px;
    padding:10px 22px;
    border-radius:50px;
    font-size:.95rem;
    font-family:'Cairo',sans-serif;
    cursor:pointer;
    border:1px solid var(--sv-accent, #fff);
    color:var(--sv-accent,#fff);
    background:var(--sv-accentSoft,rgba(255,255,255,.08));
    transition:.3s;
  }
  #backBtn:hover { background:var(--sv-accent,#fff); color:#000; transform:scale(1.04); }

  /* ── Section header line ── */
  .sv-header-line {
    height:3px; width:80px; border-radius:99px;
    background: var(--sv-headerGrad,#fff);
    margin-top:16px;
  }

  /* ── Article cards ── */
  .sv-card {
    position:relative;
    background: var(--sv-cardBg, rgba(255,255,255,.06));
    border: 1px solid var(--sv-cardBorder, rgba(255,255,255,.12));
    border-radius:24px; padding:32px;
    cursor:pointer;
    transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
    overflow:hidden;
  }
  .sv-card::before {
    content:"";
    position:absolute; inset:0;
    background: var(--sv-glow,rgba(255,255,255,.05));
    opacity:0; transition:.35s;
    border-radius:24px;
  }
  .sv-card:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,.35); border-color: var(--sv-accent,#fff); }
  .sv-card:hover::before { opacity:1; }

  .sv-tag {
    display:inline-block;
    padding:4px 14px; border-radius:99px; font-size:.8rem;
    background: var(--sv-tagBg, rgba(255,255,255,.1));
    color: var(--sv-tagColor, #ccc);
    margin-bottom:14px;
  }

  .sv-card h3 {
    font-size:1.25rem; font-weight:700; color:#fff;
    line-height:1.9; margin-bottom:12px;
  }
  .sv-card p  { color:rgba(255,255,255,.65); line-height:2; font-size:.95rem; }

  .sv-meta   { display:flex; gap:18px; margin-top:20px; flex-wrap:wrap; }
  .sv-meta span { font-size:.82rem; color:var(--sv-accent,#ccc); opacity:.8; }
  .sv-meta span i { margin-left:5px; }

  .sv-depth {
    position:absolute; top:24px; left:24px;
    padding:3px 12px; border-radius:99px; font-size:.75rem;
    background:rgba(0,0,0,.35);
    color:var(--sv-accent,#fff);
    border:1px solid var(--sv-accent,#fff);
    opacity:.75;
  }

  /* ── Nav sub-tabs ── */
  #tabView { position:fixed; inset:0; z-index:30; overflow-y:auto; opacity:0; visibility:hidden; transition:.5s; }
  #tabView.visible { opacity:1; visibility:visible; }
  #tabView::before {
    content:""; position:fixed; inset:0; pointer-events:none; z-index:0;
    background-image:radial-gradient(rgba(199,168,107,.1) 1px, transparent 1px);
    background-size:38px 38px;
  }

  .tab-card {
    background:rgba(255,255,255,.04); border:1px solid rgba(199,168,107,.15);
    border-radius:22px; padding:28px; cursor:pointer; transition:.35s;
  }
  .tab-card:hover { transform:translateY(-6px); border-color:rgba(199,168,107,.4); background:rgba(199,168,107,.07); }
  .tab-card .tc-cat { font-size:.78rem; color:#c7a86b; margin-bottom:10px; }
  .tab-card h3 { font-size:1.1rem; font-weight:700; color:#fff; line-height:1.9; margin-bottom:8px; }
  .tab-card p  { font-size:.88rem; color:rgba(255,255,255,.6); line-height:1.9; }
  .tab-card .tc-footer { display:flex; gap:16px; margin-top:16px; font-size:.8rem; color:rgba(199,168,107,.7); flex-wrap:wrap; }

  /* ── Scroll reveal ── */
  .sv-reveal {
    opacity:0; transform:translateY(30px);
    transition: opacity .6s ease, transform .6s ease;
  }
  .sv-reveal.revealed { opacity:1; transform:translateY(0); }

  /* ── Reading modal ── */
  #readModal {
    position:fixed; inset:0; z-index:60;
    background:rgba(0,0,0,.88); backdrop-filter:blur(14px);
    display:flex; align-items:center; justify-content:center;
    opacity:0; visibility:hidden; transition:.4s;
    padding:24px;
  }
  #readModal.open { opacity:1; visibility:visible; }
  .rm-box {
    max-width:680px; width:100%;
    background:#0c0f1e; border:1px solid rgba(255,255,255,.1);
    border-radius:28px; padding:40px; position:relative;
    max-height:85vh; overflow-y:auto;
  }
  .rm-close {
    position:absolute; top:20px; left:20px;
    width:36px; height:36px; border-radius:50%;
    background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15);
    color:#fff; cursor:pointer; font-size:1rem;
    display:flex; align-items:center; justify-content:center;
    transition:.3s;
  }
  .rm-close:hover { background:rgba(255,255,255,.18); }

  /* ── Stagger animation delay ── */
  .delay-1 { transition-delay:.08s; }
  .delay-2 { transition-delay:.16s; }
  .delay-3 { transition-delay:.24s; }
  .delay-4 { transition-delay:.32s; }
  .delay-5 { transition-delay:.40s; }
  .delay-6 { transition-delay:.48s; }

  /* ── Progress bar ── */
  #readProgress {
    position:fixed; top:0; left:0; right:0; height:2px; z-index:100;
    background:transparent; pointer-events:none;
  }
  #readProgress span {
    display:block; height:100%; width:0%;
    background:linear-gradient(90deg,#c7a86b,#f0d998);
    transition:width .15s linear;
  }

  `;

  const tag = document.createElement("style");
  tag.id = "hadhara-styles";
  tag.textContent = css;
  document.head.appendChild(tag);

})();

/* ─────────────────────────────────────────
   6.  BUILD DOM SHELLS
   ───────────────────────────────────────── */

/* ── SECTION VIEW ── */
const sectionView = document.createElement("div");
sectionView.id = "sectionView";
document.body.appendChild(sectionView);

/* ── TAB VIEW (articles / analysis) ── */
const tabView = document.createElement("div");
tabView.id = "tabView";
tabView.style.background = "#020617";
document.body.appendChild(tabView);

/* ── READ MODAL ── */
const readModal = document.createElement("div");
readModal.id = "readModal";
readModal.innerHTML = `
  <div class="rm-box">
    <button class="rm-close" id="rmClose"><i class="fas fa-times"></i></button>
    <div id="rmBody"></div>
  </div>`;
document.body.appendChild(readModal);

/* ── PROGRESS BAR ── */
const prog = document.createElement("div");
prog.id = "readProgress";
prog.innerHTML = "<span id='progBar'></span>";
document.body.appendChild(prog);

/* ─────────────────────────────────────────
   7.  CSS VARIABLE APPLIER
   ───────────────────────────────────────── */

function applyTheme (theme) {
  const el = document.getElementById("sectionView");
  Object.entries(theme).forEach(([k, v]) => {
    el.style.setProperty("--sv-" + k, v);
  });
  el.style.background = theme.bg;
  el.style.setProperty("--sv-dot", theme.dot);
}

/* ─────────────────────────────────────────
   8.  RENDER SECTION VIEW
   ───────────────────────────────────────── */

function renderSectionView (sectionId) {

  const sec = SECTIONS[sectionId];
  if (!sec) return;

  state.activeSection = sectionId;

  applyTheme(sec.theme);

  const articlesHTML = sec.articles.map((a, i) => `
    <div class="sv-card sv-reveal delay-${i + 1}" data-modal-title="${a.title}" data-modal-excerpt="${a.excerpt}" data-modal-tag="${a.tag}" data-modal-read="${a.readTime}">
      <span class="sv-depth">${a.depth}</span>
      <div class="sv-tag">${a.tag}</div>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
      <div class="sv-meta">
        <span><i class="fas fa-clock"></i> ${a.readTime}</span>
        <span><i class="fa
