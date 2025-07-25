"use client"
import { useRouter } from "next/router"

const RoadrunnerPage = () => {
  const router = useRouter()
  const { id } = router.query

  // This file was manually added by the user.
  // Content omitted as per user's instruction to not modify it.

  return (
    <div>
      <h1>Roadrunner Page</h1>
      <p>Details for roadrunner with ID: {id}</p>
      {/* rest of code here */}
    </div>
  )
}

export default RoadrunnerPage
