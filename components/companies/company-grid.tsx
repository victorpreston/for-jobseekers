"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPinIcon, UsersIcon, BriefcaseIcon } from "lucide-react"
import Link from "next/link"

const companies = [
  {
    id: 1,
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "1000+",
    openPositions: 25,
    description: "Leading technology company focused on innovation and growth.",
  },
  {
    id: 2,
    name: "HealthPlus",
    logo: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&auto=format&fit=crop&q=60",
    industry: "Healthcare",
    location: "Boston, MA",
    size: "501-1000",
    openPositions: 15,
    description: "Healthcare technology solutions for modern medical practices.",
  },
  {
    id: 3,
    name: "FinanceHub",
    logo: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60",
    industry: "Finance",
    location: "New York, NY",
    size: "201-500",
    openPositions: 10,
    description: "Innovative financial services for the digital age.",
  },
  // Add more companies as needed
]

export function CompanyGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {companies.map((company) => (
        <Card key={company.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <Badge variant="secondary">{company.industry}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{company.description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4 mr-2" />
                {company.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <UsersIcon className="h-4 w-4 mr-2" />
                {company.size} employees
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                {company.openPositions} open positions
              </div>
            </div>
            <div className="flex justify-end">
              <Button asChild>
                <Link href={`/companies/${company.id}`}>View Company</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}