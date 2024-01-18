import LoginForm from '@/components/shared/form/LoginForm'
import Image from 'next/image'
import React from 'react'

function LoginPage() {
  return (
    <div className="flex">
      <div className="relative hidden lg:block">
        <Image
          src="/images/auth_large.png"
          alt="large auth splash image"
          className="h-screen"
        />
        <div className="absolute left-[10%] top-[40%]">
          <p className="text-[2.5rem] font-[700]">Biccas</p>
          <p className="text-[1.25rem] font-[700] text-[#191A15]">
            We&apos;re here to Increase your{' '}
            <span className="text-primary">Productivity</span>
          </p>
        </div>
      </div>
      <div className="flex-grow">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
