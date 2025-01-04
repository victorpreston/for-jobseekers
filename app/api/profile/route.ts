import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { name, bio, location, skills, experience } = body

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        profile: {
          upsert: {
            create: { bio, location, skills, experience },
            update: { bio, location, skills, experience }
          }
        }
      },
      include: { profile: true }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}