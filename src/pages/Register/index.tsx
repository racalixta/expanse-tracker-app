import React from 'react'
import { InputText } from '../../components/inputText'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'
import { TemplateContainer, TemplateContent, TemplateMain } from '../../components/templates'

export const Register = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        
        <aside className='flex'>
          <img src="/businessman.svg" alt="" />
        </aside>

        <TemplateMain>
          <h1 className='font-bold text-3xl text-indigo-700'>Crie sua conta</h1>

          <form className='flex flex-col gap-4 w-full items-center px-8'>
            <InputText label='E-mail' type='email' name='email' />
            <InputText label='Senha' type='password' name='password' />

            <Button>Criar Conta</Button>
            
          </form>

          <p>
            Já possui cadastro? <Link href="/">Entre aqui!</Link>
          </p>

        </TemplateMain>

      </TemplateContent>
    </TemplateContainer>
  )
}
