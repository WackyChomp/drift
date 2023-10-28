'use client'

import React from 'react';
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  } from '@/components/ui/form';
import { UserValidation } from '@/lib/validations/user';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod"

type Props = {
  btnTitle: string;
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  }
}

const AccountProfile = (btnTitle, user: Props) => {
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: '',
      name: '',
      username: '',
      bio: '',
    }
  });

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
    <div className='text-red-400 font-semibold'>AccountProfile</div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default AccountProfile