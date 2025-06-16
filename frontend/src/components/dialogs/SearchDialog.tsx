// import {useSearch} from "@/hooks/useSearch.ts";
// import {SearchRequest} from "@/types/Search.ts";
// import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
//
// type SearchDialogProps = {
//     open: boolean;
//     onOpenChange: (open: boolean) => void;
// };
//
// export const SearchCreateDialog = ({open, onOpenChange}: SearchDialogProps) => {
//     const createNotebook = useSearch();
//
//     const handleCreate = (data: SearchRequest) => {
//             createNotebook.mutate(
//                 { data },
//                 {
//                     onSuccess: () => onOpenChange(false),
//                 },
//             );
//         };
//
//         return (
//             <Dialog open={open} onOpenChange={onOpenChange}>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Create a new notebook</DialogTitle>
//                         <DialogDescription></DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         );
//     };
