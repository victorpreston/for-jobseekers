"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter, useSearchParams } from "next/navigation"

export function CompanyFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const industries = [
    { id: "tech", label: "Technology" },
    { id: "health", label: "Healthcare" },
    { id: "finance", label: "Finance" },
    { id: "education", label: "Education" },
    { id: "retail", label: "Retail" },
  ]

  const sizes = [
    { id: "startup", label: "Startup (1-50)" },
    { id: "small", label: "Small (51-200)" },
    { id: "medium", label: "Medium (201-1000)" },
    { id: "large", label: "Large (1000+)" },
  ]

  const handleFilterChange = (type: string, value: string) => {
    // Convert ReadonlyURLSearchParams to string first
    const params = new URLSearchParams(searchParams.toString())
    const currentValues = params.getAll(type)
      
    if (currentValues.includes(value)) {
      params.delete(type)
      currentValues.filter(v => v !== value).forEach(v => params.append(type, v))
    } else {
      params.append(type, value)
    }
      
    router.push(`/companies?${params.toString()}`)
  }

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-semibold">Filters</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Industry</h3>
          {industries.map((industry) => (
            <div key={industry.id} className="flex items-center space-x-2">
              <Checkbox
                id={industry.id}
                checked={searchParams.getAll("industry").includes(industry.id)}
                onCheckedChange={() => handleFilterChange("industry", industry.id)}
              />
              <Label htmlFor={industry.id}>{industry.label}</Label>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Company Size</h3>
          {sizes.map((size) => (
            <div key={size.id} className="flex items-center space-x-2">
              <Checkbox
                id={size.id}
                checked={searchParams.getAll("size").includes(size.id)}
                onCheckedChange={() => handleFilterChange("size", size.id)}
              />
              <Label htmlFor={size.id}>{size.label}</Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}