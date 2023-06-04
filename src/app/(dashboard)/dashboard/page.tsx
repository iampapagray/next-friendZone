'use client'

import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { useSession, signIn, signOut } from "next-auth/react";
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {

    // const session = await getServerSession(authOptions)

  return <>
  <h2>Dashboard Page</h2>

    {/* <pre>{JSON.stringify(session)}</pre> */}
  </>
}

export default page