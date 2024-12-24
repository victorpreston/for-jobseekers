import { CompanySearch } from "@/components/companies/company-search"
import { CompanyGrid } from "@/components/companies/company-grid"
import { CompanyFilters } from "@/components/companies/company-filters"

export default function CompaniesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Companies</h1>
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <CompanyFilters />
        </div>
        <div className="lg:col-span-3 space-y-6">
          <CompanySearch />
          <CompanyGrid />
        </div>
      </div>
    </div>
  )
}