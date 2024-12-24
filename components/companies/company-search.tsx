"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export function CompanySearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("query") || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Convert ReadonlyURLSearchParams to string first
    const params = new URLSearchParams(searchParams.toString())
    
    if (query) {
      params.set("query", query)
    } else {
      params.delete("query")
    }
    
    router.push(`/companies?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Search companies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">
        <SearchIcon className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  )
}