export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQ データ（Single Source of Truth）
 *  FAQ.astro の表示と Layout.astro の JSON-LD 構造化データの両方で使用される。
 *  ここを更新すれば両方に反映される。
 */
export const faqs: FaqItem[] = [
  {
    question: "出張費や見積もり費用はかかりますか？",
    answer:
      "いいえ、出張費・見積もり・査定費は完全無料です。買取が成立しなかった場合も費用は一切かかりません。お気軽にご依頼ください。",
  },
  {
    question: "どんなものが買取対象ですか？",
    answer:
      "冷蔵庫・洗濯機・エアコン・テレビなどの中古家電、家具、ブランド品、貴金属、腕時計、楽器、ゲーム機など幅広く対応しています。リサイクル可能なお品物はほぼ査定対象です。まずはお気軽にお問い合わせください。",
  },
  {
    question: "最短どのくらいで来てもらえますか？",
    answer:
      "最短30分で即日お伺いいたします。お急ぎの場合もお電話一本で迅速に対応いたします。",
  },
  {
    question: "支払い方法は？",
    answer:
      "その場で現金にてお支払いいたします。査定後すぐにお渡しできますので、お待ちいただく必要はありません。",
  },
  {
    question: "1点だけでも来てもらえますか？",
    answer:
      "はい、冷蔵庫1台からでも喜んでお伺いいたします。もちろん複数点まとめてのご依頼も歓迎です。",
  },
  {
    question: "買取とまとめて回収の違いは何ですか？",
    answer:
      "買取は価値のあるお品物に対して現金をお支払いするサービスです。まとめて回収は、買取品と不用品を一括でお引き取りするサービスで、引越し時などに便利です。",
  },
  {
    question: "予約なしでも対応できますか？",
    answer:
      "当日のご連絡でも対応可能です。ただし、事前にお電話またはLINEでご連絡いただけるとスムーズにお伺いできます。",
  },
  {
    question: "対応エリア外ですが相談できますか？",
    answer:
      "愛知県内であればエリア外でも対応可能な場合があります。まずはお気軽にお電話またはLINEでご相談ください。",
  },
  {
    question: "買取相場はどのくらいですか？",
    answer:
      "お品物の状態・年式・メーカーにより異なります。冷蔵庫は最大39,000円、洗濯機は最大24,500円の高価買取実績があります。正確な相場は無料見積もりにてお伝えしますので、お気軽にお問い合わせください。",
  },
];

/** JSON-LD FAQPage 構造化データ用に変換 */
export function faqsToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
