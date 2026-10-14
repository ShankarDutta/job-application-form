import { JobApiResponseDataType } from "@/lib/type";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronLeft,
  Clock,
  ClockIcon,
  GraduationCap,
  MapPin,
  MapPinIcon,
  MoveRightIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "../shadcnui/badge";
import { Button, buttonVariants } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcnui/tabs";

type JobDetailCardPropsType = {
  info: JobApiResponseDataType;
};

const JobDetailCard = ({ info }: JobDetailCardPropsType) => {
  const summaryItems = [
    {
      icon: BriefcaseBusiness,
      label: "Experience",
      value: info.experience,
    },
    {
      icon: Clock,
      label: "Job Type",
      value: info.jobType,
    },
    {
      icon: MapPin,
      label: "Location",
      value: info.location,
    },
    {
      icon: Users,
      label: "Vacancies",
      value: `${info.vacancies} ${info.vacancies === 1 ? "Position" : "Positions"}`,
    },
    {
      icon: GraduationCap,
      label: "Qualification",
      value: info.qualification,
    },
    {
      icon: CalendarDays,
      label: "Work Mode",
      value: info.workMode,
    },
  ];

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{info.jobTitle}</h1>
      <p className="text-muted-foreground">{info.jobDescriptions}</p>
      <div className="">
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
      </div>

      <Card>
        <Tabs>
          <CardHeader>
            <TabsList
              variant="line"
              className="md:space-x-5">
              <TabsTrigger value="job description">
                Full job description
              </TabsTrigger>
              <TabsTrigger value="details">Job Summary</TabsTrigger>
            </TabsList>
          </CardHeader>

          <CardContent>
            <TabsContent
              value="job description"
              className="custom-scrollbar max-h-125 space-y-6 overflow-y-auto pl-2">
              {/* Responsibilities */}
              {info.responsibilities[0] && (
                <section className="space-y-3 pt-2">
                  <CardTitle>Responsibilities</CardTitle>
                  <CardDescription>
                    <ul className="list-disc space-y-2 pl-5">
                      {info.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardDescription>
                </section>
              )}

              {/* Requirements */}
              {info.requirementsQualification[0] && (
                <section className="space-y-3">
                  <CardTitle>Requirements & Qualifications</CardTitle>
                  <CardDescription>
                    <ul className="list-disc space-y-2 pl-5">
                      {info.requirementsQualification.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardDescription>
                </section>
              )}
            </TabsContent>

            <TabsContent
              value="details"
              className="space-y-6 px-2">
              {/* Job Overview */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Job Overview</h3>
                <p className="text-muted-foreground text-sm leading-6">
                  {info.jobDescriptions}
                </p>
              </div>
              {/* Job Information */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {summaryItems.map((item) => (
                  <div
                    key={item.label}
                    className="bg-card flex items-start gap-3 rounded-xl border p-4">
                    <div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
                      <item.icon className="size-5" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-muted-foreground text-sm">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <section className="mt-4 flex items-center justify-end gap-6">
              <Link
                href={"/career"}
                className={buttonVariants({ variant: "link" })}>
                <ChevronLeft />
                Back
              </Link>

              <Button>
                Apply <MoveRightIcon />
              </Button>
            </section>
          </CardContent>
        </Tabs>
      </Card>
    </section>
  );
};

export default JobDetailCard;
