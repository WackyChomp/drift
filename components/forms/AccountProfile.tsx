'use client'

import React from 'react';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
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
import { isBase64Image } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';

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

const AccountProfile = ({ btnTitle, user }: Props) => {
  const [files, setFiles] = useState<File[]>([])
  const { startUpload } = useUploadThing('media');


  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || '',
      name: user?.name || '',
      username: user?.username || '',
      bio: user?.bio || '',
    }
  });

  const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
    e.preventDefault();

    const fileReader = new FileReader();
    if(e.target.files && e.target.files.length > 0){
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));

      if(!file.type.includes('image')) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl);
      }

      fileReader.readAsDataURL(file);
    }
  }

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)

    const blob = values.profile_photo;
    const hasImageChanged = isBase64Image(blob);

    if(hasImageChanged){
      const imgRes = await startUpload(files)

      if(imgRes && imgRes[0].url){
        values.profile_photo = imgRes[0].url;
      }
    }

    // TODO: Update user profile

  }

  return (
    <div>
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-start gap-10"
        >
          {/* --------------------- Profile Image --------------------- */}
          <FormField
            control={form.control}
            name="profile_photo"
            render={({ field }) => (
              <FormItem className='flex items-center gap-5'>
                <FormLabel className='account-form_image-label'>
                  {field.value? (
                    <Image 
                      src={field.value}
                      alt='profile photo'
                      width={96}
                      height={96}
                      className='rounded-full object-contain'
                      priority
                    />
                  ): (
                    <Image 
                      src='https://img.icons8.com/ios/200/image--v1.png'
                      alt='profile photo'
                      width={24}
                      height={24}
                      className='object-contain'
                    />
                  )}
                </FormLabel>
                <FormControl className='flex-1 text-base-semibold text-red-500'>
                  <Input 
                    type='file'
                    accept='image/*'
                    className='account-form_image-input'
                    placeholder="shadcn" {...field} 
                    value={undefined}     // fixes
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl>
                <FormDescription className='account-form_form-desc'>
                  Your public profile image
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* --------------------- Profile Name --------------------- */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className='flex flex-col gap-2 w-full'>
                <FormLabel className='flex text-base-semibold text-yellow-400'>
                  Name
                </FormLabel>
                <FormControl className='flex-1 text-base-semibold text-red-500'>
                  <Input 
                    type='text'
                    className='account-form_input no-focus'
                    placeholder="shadcn" {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Your "real" name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* --------------------- Username --------------------- */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className='flex items-center gap-5 w-full'>
                <FormLabel className='text-base-semibold text-blue-400'>
                  Username
                </FormLabel>
                <FormControl className='flex-1 text-base-semibold text-red-500'>
                  <Input 
                    type='text'
                    className='account-form_input no-focus'
                    placeholder="shadcn" {...field} 
                  />
                </FormControl>
                <FormDescription className='account-form_form-desc'>
                  Online alias and what everyone sees
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* --------------------- Bio --------------------- */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className='flex items-center gap-5 w-full'>
                <FormLabel className='text-base-semibold text-green-400'>
                  Bio
                </FormLabel>
                <FormControl className='flex-1 text-base-semibold text-red-500'>
                  <Textarea
                    rows={10}
                    className='account-form_input no-focus'
                    placeholder="shadcn" {...field} 
                  />
                </FormControl>
                <FormDescription className='account-form_form-desc'>
                  Share a few sentences about yourself
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


          <Button type="submit" className='bg-primary-500'>Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default AccountProfile