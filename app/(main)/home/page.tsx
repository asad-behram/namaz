'use client'

import { checkUserAuthentication } from "@/app/helpers/helpers"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter();

  useEffect(()=> {
    const isAuthenticated = checkUserAuthentication();

    if(!isAuthenticated) {
      router.push('/login');
    }
  },[])

  return (
    <div>Home</div>
  )
}

export default Home