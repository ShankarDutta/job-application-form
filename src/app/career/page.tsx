import JobCard from "@/components/Card/JobCard";
import { getJobs } from "@/lib/google-sheets";
export const dynamic = "force-dynamic";
const page = async () => {
  const data = await getJobs();

  return (
    <section>
      <div className="space-y-2 pt-40 pb-14 text-center">
        <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
          Career Openings
        </h1>
        <p className="text-foreground/75 text-sm text-balance md:text-[16px]">
          Discover the exciting career opportunities with us! The Mars team is
          looking for a passionate career enthusiast. Marss Web is a career hub
          where your skills can give you a shining career. Join our company
          today!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data.map((item) => (
          <JobCard
            key={item.serialNumber}
            info={item}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
