import JobDetailCard from "@/components/Card/JobDetailCard";
import { getJobs } from "@/lib/google-sheets";

type JobDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: JobDetailPageProps) => {
  const { slug } = await params;

  const data = await getJobs();

  const jobInfo = data.find((i) => i.slug === slug);

  if (!jobInfo) {
    return (
      <div className="grid h-dvh place-items-center">
        Not Found Any Job Try Again
      </div>
    );
  }

  return (
    <section className="pt-20">
      <JobDetailCard info={jobInfo} />
    </section>
  );
};

export default page;
