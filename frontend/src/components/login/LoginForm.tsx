import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { PasswordInput } from "@/components/ui/password-input.tsx";
import { Link } from "@tanstack/react-router";

const formSchema = z.object({
    email: z.string().min(1, {message: "Input your email address"}).email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "Password has to have at least 8 characters"}).max(50, {message: "Password too long"}),
})

export function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex p-6 flex-col justify-center gap-14 ">
                <div className="self-stretch flex flex-col justify-center items-center gap-2">
                    <div className="text-center justify-center text-white text-3xl font-bold font-serif">
                        Log into account
                    </div>
                    <div className="flex gap-2">
                        <div>Don't have an account?</div>
                        <div className="underline">
                            <Link to="/sign-up">Create one</Link>
                        </div>
                    </div>
                </div>

                <div className="flex self-stretch flex-col items-center gap-5">
                    <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Email"
                                               {...field} />
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
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                <Button type="submit" variant="customSubmit">
                    Log in
                </Button>
            </form>
        </Form>
    )
}