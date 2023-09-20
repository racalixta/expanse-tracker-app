import React from 'react'
import { InputText } from '../../components/inputText'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'
import { TemplateContainer, TemplateMain } from '../../components/templates'

export const DashboardAdd = () => {
  return (
    <TemplateContainer>
 
        
        <main className='w-6/12 h-full  flex flex-col items-center justify-center'>
          <h1 className='font-bold text-3xl text-indigo-700'>Adicionar Despesa</h1>

          <form className='flex flex-col gap-4 w-full md:w-8/12 items-center px-8'>
            <InputText label='Título' type='text' name='title' />
            <InputText label='Categoria' type='text' name='category' />
            <InputText label='Preço' type='number' name='price' />

            <Button>Adicionar</Button>
            
          </form>

          <p>
            Não quer adicionar nova despesa? <Link href="/dashboard">Voltar</Link>
          </p>

        </main>


    </TemplateContainer>
  )
}
