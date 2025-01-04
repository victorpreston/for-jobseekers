"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ProfileForm({ user }: { user: any }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch("/api/profile", {
        method: "PUT",
        body: JSON.stringify({
          name: formData.get("name"),
          bio: formData.get("bio"),
          location: formData.get("location"),
          skills: formData.get("skills"),
          experience: formData.get("experience")
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      })
      
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              defaultValue={user.name || ""}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">
              Bio
            </label>
            <Textarea
              id="bio"
              name="bio"
              defaultValue={user.profile?.bio || ""}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <Input
              id="location"
              name="location"
              defaultValue={user.profile?.location || ""}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="skills" className="text-sm font-medium">
              Skills
            </label>
            <Input
              id="skills"
              name="skills"
              defaultValue={user.profile?.skills || ""}
              placeholder="e.g., JavaScript, React, Node.js"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="experience" className="text-sm font-medium">
              Experience
            </label>
            <Textarea
              id="experience"
              name="experience"
              defaultValue={user.profile?.experience || ""}
              rows={4}
              placeholder="Describe your work experience..."
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}