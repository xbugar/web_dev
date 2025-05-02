import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { PasswordInput } from '@/components/ui/password-input.tsx';
import { Link } from '@tanstack/react-router';

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: 'Input your name' })
      .max(50, { message: 'Input too long' }),
    lastName: z
      .string()
      .min(1, { message: 'Input your name' })
      .max(50, { message: 'Input too long' }),
    email: z
      .string()
      .min(1, { message: 'Input your email address' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password has to have at least 8 characters' })
      .max(50, { message: 'Password too long' }),
    confirmPassword: z.string().min(8, { message: 'Please confirm your password' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export function SignupForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col justify-center gap-14"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-center font-serif text-3xl font-bold text-white">
            Create an account
          </div>
          <div className="text-md flex gap-2 font-light">
            <div className="text-white-text-secondary">Already have an account?</div>
            <Link to="/login" className="underline">
              Log in
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="inline-flex gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="First Name" variant="inputAlt" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Last Name" variant="inputAlt" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Email" variant="inputAlt" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <PasswordInput
                    placeholder="Password"
                    type="password"
                    variant="inputAlt"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <PasswordInput
                    placeholder="Confirm Password"
                    type="password"
                    variant="inputAlt"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" variant="submitAlternative">
          Create account
        </Button>
      </form>
    </Form>
  );
}
