import styles from "./page.module.css";
import { Metadata } from "next";
import { getArticles } from "@/lib/newt";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.jsブログ",
  description: "Next.jsブログです。",
};

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className={styles.main}>
      <ul>
        {articles.map(({ _id, title, slug }) => (
          <li key={_id}>
            <Link href={`articles/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
