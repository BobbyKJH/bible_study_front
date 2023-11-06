"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
/** Api */
import { useUserMutation } from '@/api/UserQuery';
/** Custom Hook */
import { SubmitHandler, useForm } from 'react-hook-form';

const LoginPage = () => {
  const { push } = useRouter();

  const { register, handleSubmit, resetField, setFocus } = useForm({
    defaultValues: {
      userId: ""
    }
  })

  const { mutate } = useUserMutation();

  useEffect(() => {
    setFocus("userId")
  }, []);

  const LoginUser: SubmitHandler<{ userId: string }> = (data) => {
    mutate(data, {
      onSuccess: () => {
        push("home");
      },
      onError: () => {
        alert("존재하지 않는 아이디 입니다.");
        resetField("userId");
        setFocus("userId");
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(LoginUser)}>
      <input {...register("userId")}/>

      <button type={'submit'}>로그인</button>
    </form>
  )
}

export default LoginPage