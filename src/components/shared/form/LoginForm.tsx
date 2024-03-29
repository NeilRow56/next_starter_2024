'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

import Link from 'next/link'
import MainButton from '../MainButton'

const FormSchema = z.object({
  email: z
    .string()
    .email({
      message: 'Enter a valid email',
    })
    .min(2, {
      message: 'email must be at least 2 characters.',
    }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters.',
    })
    .max(25, {
      message: 'Password must be at most 25 characters.',
    }),
})

function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-[2.81rem] px-4 lg:px-[4rem]">
      <div className="self-start">
        <p className="text-[1.625rem] font-[700] text-[#333]">Hello Again!</p>
        <p className="text-[1.125rem] text-[#333]">Welcome Back</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    {...field}
                    className="rounded-large h-[3.75rem] w-full"
                    startIcon="email"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="rounded-large h-[3.75rem] w-full"
                    startIcon="padlock"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <MainButton
            text="Login"
            classes="h-[3.31rem] rounded-large"
            width="full_width"
            isSubmitable
          />

          <div className="mt-4 flex justify-end text-[#191A15]">
            <Link href="/register">Register Instead?</Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
