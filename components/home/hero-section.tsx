"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function HeroSection() {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("query")
    router.push(`/jobs?query=${query}`)
  }

  return (
    <div className="relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Find Your Dream Remote Job
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with top remote employers worldwide. Discover opportunities that match your skills and aspirations.
          </p>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-4">
            <Input
              name="query"
              placeholder="Search jobs by title, skill, or company..."
              className="h-12 text-lg"
            />
            <Button type="submit" size="lg">
              <SearchIcon className="mr-2 h-5 w-5" />
              Search Jobs
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}