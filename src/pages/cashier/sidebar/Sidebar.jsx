import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import React from 'react'

const Sidebar = ({navItems, onClose}) => {
  return (
    <div className='w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full relative'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold text-sidebar-foreground'>POS SYSTEM</h1>
        <Button size={'icon'} onClick={onClose}>
          <X/>
        </Button>
      </div>
      
      
      <nav className='space-y-2 flex-1'>
        

      </nav>
      
      
    </div>
  )
}

export default Sidebar;
