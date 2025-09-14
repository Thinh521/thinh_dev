import TimelinePage2 from "../components/Experience/Experience";
import Header from "../components/Header/Header";

export default function ProjectPage() {
  return (
    <article>
      <Header
        name="Dự án"
        subtitle="Những dự án lập trình cá nhân / pet projects của tớ"
      />
      <TimelinePage2 />
    </article>
  );
}
