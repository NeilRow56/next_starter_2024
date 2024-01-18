'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="z-20 md:sticky   md:top-0 md:shadow-none ">
      {/* DESKTOP */}
      <div className=" hidden bg-white p-4 animate-in fade-in zoom-in lg:block">
        <div className="mx-[41px] flex items-center justify-between">
          <div>
            <Image src="/svgs/sf_logo.svg" alt="logo" width={50} height={50} />
          </div>
          <div className="flex select-none items-center gap-[20px] text-[16px] xl:gap-[50px]">
            <p
              className={`text-gray flex cursor-pointer items-center gap-2  font-[500] hover:text-primary`}
            >
              Link1
            </p>
            {/* Add more links here */}
          </div>
          <div className="flex select-none items-center gap-[40px]">
            <Link
              href="/auth/login"
              className="flex cursor-pointer items-center gap-2 hover:text-primary "
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` fixed top-0 z-[999]  block w-full bg-white py-4 shadow-sm animate-in fade-in zoom-in lg:hidden  ${
          menu ? ' bg-primary py-2' : ''
        } `}
      >
        <div className="mx-[10px] flex justify-between">
          <div className="flex select-none items-center gap-[50px] text-[16px]">
            <Image
              width={50}
              height={50}
              src="/svgs/sf_logo.svg"
              alt="logo"
              className="w-[7rem]"
            />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer text-black animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            ) : (
              <Image
                src="/svgs/hamburger.svg"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="mx-4 mt-8 flex flex-col gap-8">
              <p className="cursor-pointer text-black">
                <span>How it works</span>
              </p>
              {/* Add more links here */}

              <div className="flex select-none flex-col gap-[40px]">
                <Link href="/auth/login" className="cursor-pointer text-black">
                  Signin
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default NavBar
