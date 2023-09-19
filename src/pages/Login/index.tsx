import React from 'react'
import { InputText } from '../../components/inputText'

export const Login = () => {
  return (
    <div className='w-screen h-screen bg-gray-50 flex justify-center'>
      <section className='w-full h-full max-w-screen-l grid grid-cols-2'>
        
        <aside className='flex'>
          <img src="/businessman.svg" alt="" />
        </aside>

        <main className='flex flex-col justify-center items-center gap-10'>
          <h1 className='font-bold text-3xl text-indigo-700'>Controle seus gastos</h1>

          <form className='flex flex-col gap-4 w-full items-center px-8'>
            <InputText label='E-mail' type='email' name='email' />
            <InputText label='Senha' type='password' name='password' />

            <button className='bg-indigo-700 h-10 border rounded-md w-full text-white font-semibold text-lg hover:bg-indigo-500 disabled:'>Entrar</button>
          </form>

          <p>
            Não possui cadastro? <a className='text-indigo-700' href="/register">Cadastre-se aqui!</a>
          </p>

        </main>

      </section>
    </div>
  )
}
