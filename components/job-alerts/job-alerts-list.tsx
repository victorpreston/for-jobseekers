"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BellIcon, TrashIcon } from "lucide-react"

export function JobAlertsList({ jobAlerts }: { jobAlerts: any[] }) {
  const router = useRouter()
  const { toast } = useToast()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function deleteAlert(id: string) {
    setDeletingId(id)
    try {
      const response = await fetch(`/api/job-alerts?id=${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete job alert")
      }

      toast({
        title: "Job alert deleted",
        description: "The job alert has been removed.",
      })
      
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete job alert. Please try again.",
        variant: "destructive",
      })
    } finally {
      setDeletingId(null)
    }
  }

  if (!jobAlerts.length) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground">
            <BellIcon className="mx-auto h-12 w-12 mb-4" />
            <p>No job alerts set up yet.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {jobAlerts.map((alert) => (
        <Card key={alert.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <h3 className="font-semibold">{alert.keywords}</h3>
              <p className="text-sm text-muted-foreground">{alert.location}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteAlert(alert.id)}
              disabled={deletingId === alert.id}
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-sm space-y-2">
              <p>Job Type: {alert.jobType}</p>
              <p>Frequency: {alert.frequency}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}