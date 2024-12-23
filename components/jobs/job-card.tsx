"use client"

import { Job } from "@/lib/types/job"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookmarkIcon, MapPinIcon, BriefcaseIcon } from "lucide-react"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const { data: session } = useSession()
  const { toast } = useToast()

  const handleSaveJob = async () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save jobs",
        variant: "destructive",
      })
      return
    }

    // Implementation for saving job will be added later
    toast({
      title: "Job saved",
      description: "The job has been added to your saved jobs",
    })
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={handleSaveJob}>
            <BookmarkIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4 mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <BriefcaseIcon className="h-4 w-4 mr-2" />
            {job.type}
          </div>
          {job.salary && (
            <p className="text-sm font-medium">{job.salary}</p>
          )}
          <p className="text-sm line-clamp-3">{job.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Posted {new Date(job.posted_at).toLocaleDateString()}
        </p>
        <Button asChild>
          <a href={job.url} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}