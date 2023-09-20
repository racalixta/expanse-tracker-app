import React from 'react'
import { TemplateContainer } from '../../components/templates'
import { Button } from '../../components/Button'

export const Dashboard  = () => {
  return (
    <TemplateContainer>
      <header className='w-full max-w-screen-lg flex justify-between h-1/6 imtes-center py-4 '>
        <span className='font-bold text-indigo-700 text-2xl'>Expense Tracker</span>

        <nav className='flex w-7/12 gap-4'>
          <Button>Adicionar Conta</Button>
          <Button variant='ghost'>Sair</Button>
        </nav>
      </header>
    </TemplateContainer>
  )
}

