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
    question: "出張費や査定費はかかりますか？",
    answer:
      "いいえ、出張費・査定費は完全無料です。買取が成立しなかった場合も費用は一切かかりません。お気軽にご依頼ください。",
  },
  {
    question: "どんなものが買取対象ですか？",
    answer:
      "冷蔵庫・洗濯機・エアコン・テレビなどの家電、家具、ブランド品、貴金属、腕時計、楽器、ゲーム機など幅広く対応しています。まずはお気軽にお問い合わせください。",
  },
  {
    question: "最短どのくらいで来てもらえますか？",
    answer:
      "最短30分でお伺いいたします。お急ぎの場合もお電話一本で迅速に対応いたします。",
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
      "エリア外でも内容によっては対応可能です。まずはお気軽にお電話またはLINEでご相談ください。",
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
