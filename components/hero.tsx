'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative">
      <div className="container flex min-h-screen flex-col items-center justify-center py-20 md:py-32">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <div className="mb-4 inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              Software Developer
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Hi, I&apos;m Shakib Al Hasan
            </h1>
            <p className="mb-8 text-xl text-gray-400">
              A passionate software developer specializing in Flutter and mobile development. 
              Transforming ideas into innovative mobile solutions with stunning designs and seamless functionality.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild variant="default" className="bg-blue-500 hover:bg-blue-600">
                <Link href="https://github.com/shakibalhasan-code" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-500 text-white hover:bg-blue-500 hover:text-white">
                <Link href="https://www.linkedin.com/in/shakibalhasan-code/" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-white hover:bg-blue-500 hover:text-white"
                onClick={() => window.location.href = "mailto:work.shakib.ah@gmail.com"}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 flex-shrink-0 order-first md:order-last">
            <Image
              src="https://avatars.githubusercontent.com/u/150550328?v=4"
              alt="Shakib Al Hasan"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

