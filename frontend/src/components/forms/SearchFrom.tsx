import {Input} from '@/components/ui/input.tsx';
import {useState} from "react";
import {Button} from '@/components/ui/button.tsx';

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

    const handleSubmit = () => {
        if (!q) return;
        onSubmit({
            q,
        });
    };

    return (
        <div className="grid gap-6 relative">
            <div className="grid items-center">
                <Input
                    id="search"
                    placeholder="Search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="col-span-3"
                />
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
