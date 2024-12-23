import { Suspense } from "react"
import { SearchForm } from "@/components/jobs/search-form"
import { JobCard } from "@/components/jobs/job-card"
import { fetchJobs } from "@/lib/api/jobs"
import Loading from "./loading"

interface JobsPageProps {
  searchParams: { query?: string; location?: string }
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const { query, location } = searchParams
  const jobs = await fetchJobs(query, location)

  return (
    <div className="container py-8 space-y-8">
      <div className="max-w-2xl mx-auto">
        <SearchForm />
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job: any) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Suspense>
    </div>
  )
}