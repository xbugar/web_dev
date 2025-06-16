import {Input} from '@/components/ui/input.tsx';
import {useState} from "react";
import {Button} from '@/components/ui/button.tsx';
// import {LucideIcon, SlidersHorizontal} from 'lucide-react'

type SearchFormProps = {
    initialData?: {
        q: string;
    };
    onSubmit: (data: {
        q: string;
    }) => void;
    isSubmitting?: boolean;
    submitText: string;
}

export function SearchForm({
                               initialData,
                               onSubmit,
                               isSubmitting,
                               submitText
                           }: SearchFormProps) {
    const [q, setQ] = useState(initialData?.q || '');
    // const [open, setOpen] = useState(false);
    const handleSubmit = () => {
        if (!q) return;
        onSubmit({
            q,
        });
    };
    return (
        <div className="grid gap-6 relative">
            <div className="flex items-center gap-2 w-full">
                <Input
                    id="search"
                    placeholder="Search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="flex-1 w-full"
                />
                {/*<Button variant="section" onClick={() => setOpen(true)} className="w-fit ml-auto">*/}
                {/*    <SlidersHorizontal/>*/}
                {/*</Button>*/}
            </div>

            <Button
                type="submit"
                variant="submit"
                onClick={handleSubmit}
                disabled={!q}
                loading={isSubmitting}
            >
                {submitText}
            </Button>
        </div>
    )
}
