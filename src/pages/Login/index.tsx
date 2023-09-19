import React from 'react'
import { InputText } from '../../components/inputText'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'
import { TemplateContainer, TemplateContent, TemplateMain } from '../../components/templates'

export const Login = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        
        <aside className='flex justify-center items-center '>
          <img src="/businessman.svg" alt="" />
        </aside>

        <TemplateMain>
          <h1 className='font-bold text-3xl text-indigo-700'>Acesse sua conta</h1>

          <form className='flex flex-col gap-4 w-full md:w-8/12 items-center px-8'>
            <InputText label='E-mail' type='email' name='email' />
            <InputText label='Senha' type='password' name='password' />

            <Button>Entrar</Button>
            
          </form>

          <p>
            Não possui cadastro? <Link href="/register">Cadastre-se aqui!</Link>
          </p>

        </TemplateMain>

      </TemplateContent>
    </TemplateContainer>
  )
}
