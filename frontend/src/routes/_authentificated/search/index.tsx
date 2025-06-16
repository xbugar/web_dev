import { createFileRoute } from '@tanstack/react-router'
import { useSearch } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/_authentificated/search/')({
    component: SearchPage,
    validateSearch: z.object({
        q: z.string().optional(),
    }),
})


function SearchPage() {
    const search = useSearch({
        from: '/_authentificated/search/'
    })

    return (
        <div>
            <h1>Search Page</h1>
            <p>Query: {search.q}</p>
        </div>
    )
}

//
// function SomeComponent() {
//     const router = useRouter()
//
//     const goToSearch = () => {
//         router.navigate({
//             to: '/search',
//             search: { query: 'react', page: 2 },
//         })
//     }
//
//     return <button onClick={goToSearch}>Search for React</button>







