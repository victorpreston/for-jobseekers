export function StatsSection() {
  const stats = [
    { label: "Active Jobs", value: "10,000+" },
    { label: "Companies", value: "2,500+" },
    { label: "Job Seekers", value: "500,000+" },
    { label: "Successful Hires", value: "50,000+" },
  ]

  return (
    <div className="bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}