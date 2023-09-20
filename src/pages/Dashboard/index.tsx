import React from 'react'
import { TemplateContainer } from '../../components/templates'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export const Dashboard  = () => {

  const mock = [
    {
      id: 0,
      title: 'Cabelo',
      category: 'Self-care',
      price: 35.00,
    },
    {
      id: 1,
      title: 'Mercado',
      category: 'Alimentação',
      price: 450.00,
    },
    {
      id: 2,
      title: 'Netflix',
      category: 'Streaming',
      price: 49.90,
    },
    {
      id: 3,
      title: 'Amazon',
      category: 'Streaming',
      price: 45.00,
    },
    {
      id: 4,
      title: 'Panificadora',
      category: 'Alimentação',
      price: 25.00,
    },
  ]

  return (
    <TemplateContainer>
      <header className='w-full max-w-screen-lg flex justify-between h-1/6 imtes-center py-4 '>
        <span className='font-bold text-indigo-700 text-2xl'>Expense Tracker</span>

        <nav className='flex  gap-4'>
          <Button>Adicionar Conta</Button>
          <Button variant='ghost'>Sair</Button>
        </nav>
      </header>

      <main className='w-full max-w-screen-lg h-auto mb-16 bg-indigo-100 grid grid-cols-3 gap-4 rounded-md p-4 content-start'>
        
        {mock.map(item => 

          <Card id={item.id} title={item.title} category={item.category} price={item.price} />
          
        )}

 

      </main>
    </TemplateContainer>
  )
}

