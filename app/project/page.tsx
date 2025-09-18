import Header from "../components/Header/Header";
import TimelinePage2 from "../components/Experience/Experience";

export default function ProjectPage() {
  return (
    <article>
      <Header
        name="Dự án"
        subtitle="Những dự án lập trình cá nhân / pet projects của tớ"
      />
      <div className="mb-5">
        <input
          type="text"
          placeholder="Tìm kiếm dự án..."
          className="w-full pl-6 pr-6 py-3 bg-white dark:bg-gray-800 
                   border border-gray-300 dark:border-gray-600 
                   rounded-xl text-gray-900 dark:text-gray-100
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:border-transparent
                   transition-all duration-300 shadow-sm hover:shadow-md"
        />
      </div>
      <TimelinePage2 />
    </article>
  );
}
