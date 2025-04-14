import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  
  return (
    <div>
      <Button variant="outline">Button</Button>
      <h3 className="text-lm-primary">Welcome Home! Welcome to Gradia.</h3>
      <p className='text-text-lm-secondary font-sans text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos odio culpa voluptatum voluptates et voluptatibus quas id voluptate excepturi eius, illum esse accusamus incidunt quaerat sint deleniti perferendis rem a?</p>
    </div>
  )
}