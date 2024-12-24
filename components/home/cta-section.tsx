import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Start Your Remote Career Journey?
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who have found their dream remote jobs through ForJobSeekers
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/auth/signup">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}