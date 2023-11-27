import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { axiosClient } from '../../../api/axios'




const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
})


export default function MenuSize({ menu, sizes }) {

    console.log(menu.sizes);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: ["Small"],
        },
    })

    function onSubmit(data) {
        console.log(data);
    }
    
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {menu.sizes.length > 0 ? (
                        <FormField
                            control={form.control}
                            name="items"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base ">Pick your size</FormLabel>
                                    </div>
                                    {menu.sizes.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="items"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-start space-x-3 space-y-0 border-2 p-2 rounded"
                                                    >
                                                        <FormControl>
                                                            <Checkbox className=''
                                                                checked={field.value?.includes(item.name)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.name])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.name
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal w-[100%]">
                                                            <div className='flex justify-between'>
                                                                <p>{item.name}</p>
                                                                <p>{item.price} $</p>
                                                            </div>

                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ) : null
                    }

                    {menu.ingredients.length > 0 ? (
                            <FormField
                                control={form.control}
                                name="items"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base ">Pick your extra ingredient</FormLabel>
                                        </div>
                                        {menu.ingredients.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="items"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0 border-2 p-2 rounded"
                                                        >
                                                            <FormControl>
                                                                <Checkbox className=''
                                                                    checked={field.value?.includes(item.name)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.name])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.name
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal w-[100%]">
                                                                <div className='flex justify-between'>
                                                                    <p>{item.name}</p>
                                                                    <p>{item.price} $</p>
                                                                </div>

                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ) : null
                    }

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}
