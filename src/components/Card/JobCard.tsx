import { JobApiResponseDataType } from "@/lib/type";
import { ClockIcon, MapPinIcon, MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../shadcnui/badge";
import { buttonVariants } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";

type JobCardType = {
  info: JobApiResponseDataType;
};

const JobCard = ({ info }: JobCardType) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{info.jobTitle}</CardTitle>
        <CardDescription className="text-base text-[13px] md:text-[15px]">
          {info.jobDescriptions}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 md:space-y-4">
        <section className="flex items-center gap-4">
          <Badge className="bg-blue-50 py-2 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <MapPinIcon />
            {info.location}
          </Badge>

          <Badge className="bg-blue-50 py-2 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <ClockIcon />
            {info.jobType}
          </Badge>
        </section>

        <div className="text-right">
          <Link
            href={`/career/job-detail/${info.slug}`}
            className={buttonVariants({
              variant: "default",
              className: "bg-blue-600! text-white hover:bg-blue-700!",
            })}>
            View Job <MoveRightIcon />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
