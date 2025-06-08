'use client'

import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'

type FormData = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()

  const [response, setResponse] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        setResponse(null)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [response])

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Erro ao enviar mensagem')

      setResponse({ message: result.message, type: 'success' })
      reset()
    } catch (error: any) {
      setResponse({ message: error.message, type: 'error' })
    }
  }

  return(
        <section id="contact" className="bg-white py-12 lg:py-42 lg:flex" data-aos="fade-up" data-aos-delay="100">
      {/* Lado esquerdo com texto e redes */}
      <div className="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 capitalize">fale conosco.</h1>
        <p className="mt-4 lg:text-lg text-gray-800 leading-relaxed">
          Tire suas dúvidas, peça um orçamento ou envie sua mensagem. Estamos prontos para ajudar!
        </p>
        <div className="mt-6 md:mt-8">
          <h3 className="font-medium lg:text-lg text-gray-800 leading-relaxed">Siga nossas redes</h3>
          <div className="flex mt-4 -mx-1.5">
            <a
              className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
              href="https://www.instagram.com/savecadeiras/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Save Cadeiras"
            >
              {/* Ícone do Instagram */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                  fill="currentColor"
                />
              </svg>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full p-8 lg:w-1/2 lg:px-12 xl:px-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 lg:text-lg text-gray-800 leading-relaxed">Nome completo</label>
              <input
                type="text"
                {...register('name', { required: 'Nome é obrigatório' })}
                placeholder="João da Silva"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 lg:text-lg text-gray-800 leading-relaxed">E-mail</label>
              <input
                type="email"
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido',
                  },
                })}
                placeholder="joao@email.com"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 lg:text-lg text-gray-800 leading-relaxed">Mensagem</label>
            <textarea
              {...register('message', { required: 'Mensagem é obrigatória' })}
              className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Descreva sua dúvida, necessidade ou solicitação."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {response && (
            <p
              className={`mt-4 text-center text-sm ${
                response.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {response.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}