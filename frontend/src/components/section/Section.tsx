import {
  LucideIcon
} from "lucide-react"

type SectionProps = {
  title: string
  Icon: LucideIcon
  amount?: number
}

export function Section({ title, Icon, amount }: SectionProps) {
  
  return (
    <>
      <div className='py-2 flex flex-row justify-between items-center font-bold text-2xl font-serif'>
        <h2>{title}</h2>
        <div className='flex gap-1 items-center'>
          <span>{amount}</span>
          <Icon />
        </div>
      </div>
    </>
  )
}
