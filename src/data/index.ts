import { defineSiteMetadata, defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = defineSiteMetadata({
  title: "水戸地図(β)",
  description: "水戸地図は地図、データビジュアライゼーションなどの実験室です。",
  image: "/ogimage.png",
  favicon: "/favicon.ico",
});
export const menu = defineMenu([
  { title: "トップページ", href: "/" },
  { title: "技術記事", href: "/categories/tech" },
  { title: "制作物", href: "/categories/works" },
  { title: "ブログ", href: "/categories/blog" },
  {
    title: "リンク",
    items: [
      { title: "GitHub", href: "https://github.com/cieloazul310" },
      { title: "Twitter", href: "https://twitter.com/cieloazul310" },
      { title: "Qiita", href: "https://qiita.com/cieloazul310" },
    ],
  },
]);
export const pageSize = 25;
