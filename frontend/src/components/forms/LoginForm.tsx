import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { PasswordInput } from '@/components/ui/password-input.tsx';
import { Link } from '@tanstack/react-router';
import { useLoginUser } from "@/hooks/useLoginUser.ts";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Input your email address' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password has to have at least 8 characters' })
    .max(50, { message: 'Password too long' }),
});

export function LoginForm() {
  const loginUser = useLoginUser();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
    loginUser.mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col justify-center gap-14"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-center font-serif text-3xl font-bold text-white">
            Log in to account
          </div>
          <div className="text-md flex gap-2 font-light">
            <div className="text-white-text-secondary">Don&apos;t have an account?</div>
            <Link to="/sign-up" className="underline">
              Create one
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
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
        </div>

        <Button type="submit" variant="submitAlternative">
          Log in
        </Button>
      </form>
    </Form>
  );
}
