"use client"

import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookmarkIcon, MapPinIcon, BriefcaseIcon } from "lucide-react"

export function SavedJobsGrid({ savedJobs }: { savedJobs: any[] }) {
  const router = useRouter()
  const { toast } = useToast()

  async function removeSavedJob(jobId: string) {
    try {
      const response = await fetch(`/api/saved-jobs?jobId=${jobId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to remove saved job")
      }

      toast({
        title: "Job removed",
        description: "The job has been removed from your saved jobs.",
      })
      
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove job. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (!savedJobs.length) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground">
            <BookmarkIcon className="mx-auto h-12 w-12 mb-4" />
            <p>No saved jobs yet.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {savedJobs.map((savedJob) => (
        <Card key={savedJob.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{savedJob.job.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {savedJob.job.company}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeSavedJob(savedJob.jobId)}
              >
                <BookmarkIcon className="h-4 w-4 fill-current" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4 mr-2" />
                {savedJob.job.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                {savedJob.job.type}
              </div>
              {savedJob.job.salary && (
                <p className="text-sm font-medium">{savedJob.job.salary}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <a
                href={savedJob.job.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}