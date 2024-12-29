"use client"

import { use } from "react"
import { useUserById } from "@/services"
import { Loader2 } from "lucide-react"

import { BackButton } from "@/components/composed"
import { PostList } from "@/components/features"
import { UserCard } from "@/components/features/User"
import { TitleH1, TitleH2 } from "@/components/ui"

type Params = { user: string }

export default function Page({ params }: { params: Promise<Params> }) {
  const { user } = use(params)
  const {
    isLoading: isLoadingUser,
    data: userData,
    error: userError,
  } = useUserById(user)

  if (isLoadingUser)
    return (
      <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
        <Loader2 className="animate-spin w-24 h-24 text-[#0028f3] " />
      </div>
    )

  if (userError) {
    if (userError === "Request failed with status code 404") {
      return (
        <div className="container mx-auto p-6">
          <BackButton path="/" />
          <div className="text-center mt-10">
            <h2 className="text-2xl font-bold mb-4">Usuario no encontrado</h2>
            <p className="text-gray-600">El usuario que buscas no existe.</p>
          </div>
        </div>
      )
    }
    return <div className="text-red-500">{userError}</div>
  }
  if (!userData) return null

  const { id, name, username, email, phone, website, address, company } =
    userData

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center w-full mb-4">
        <BackButton path="/" />
        <TitleH1 text={`Profile of ${name}`} />
        <div />
      </div>
      <UserCard
        id={id}
        name={name}
        username={username}
        email={email}
        phone={phone}
        website={website}
        address={address}
        company={company}
      />
      <TitleH2 text={`Posts`} />
      <PostList userId={id} />
    </div>
  )
}
