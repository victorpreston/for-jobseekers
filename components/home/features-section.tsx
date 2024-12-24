import {
  BriefcaseIcon,
  BellIcon,
  UserIcon,
  SearchIcon,
  LightbulbIcon,
  TrendingUpIcon,
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      name: "Smart Job Matching",
      description: "Our AI-powered system matches you with jobs that fit your skills and preferences.",
      icon: SearchIcon,
    },
    {
      name: "Real-time Job Alerts",
      description: "Get instant notifications when new jobs matching your criteria are posted.",
      icon: BellIcon,
    },
    {
      name: "Career Growth Tools",
      description: "Access resources and tools to help you advance in your career.",
      icon: TrendingUpIcon,
    },
    {
      name: "Profile Analytics",
      description: "Track your profile views and application performance.",
      icon: UserIcon,
    },
    {
      name: "Expert Career Advice",
      description: "Get guidance from industry experts and career counselors.",
      icon: LightbulbIcon,
    },
    {
      name: "One-Click Apply",
      description: "Apply to multiple jobs quickly with your saved profile.",
      icon: BriefcaseIcon,
    },
  ]

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose ForJobSeekers</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to find and land your dream job
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.name}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}