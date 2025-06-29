import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
export const Route = createFileRoute('/')({
  component: LoginSignup,
})

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

function LoginSignup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Form submitted with values:', values)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey ">
      <div className="bg-white px-4 md:px-8 py-6 sm:py-12 rounded-lg shadow-md w-full max-w-sm mx-2">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <img src="/logo-dark.svg" alt="Logo" className="hidden sm:block" />
          <img
            src="/public/logo-mobile.svg"
            alt="Logo"
            className="block sm:hidden"
          />
        </div>
        <h1 className="text-xl font-bold mb-2">Login in or Sign up</h1>
        <p className="text-xs text-medium-gray mb-4  sm:mb-8">
          Enter your email to get a magic login or signup link.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      className="placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-main-purple w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

//
//TODO begin by exploring how to do magic link registration and login with supabase

//TODO then add the ability to login/register a new user with google

//TODO create the login and register process and design FRONTEND

//TODO create the database tables using supabase
