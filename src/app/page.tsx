"use client"
import { Button, Paper, TextField } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
/** Api */
import { useUserMutation } from '@/api/UserQuery';
/** Custom Hook */
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from "@/app/page.module.css"

const LoginPage = () => {
  const { push } = useRouter();

  const { register, handleSubmit, resetField, setFocus, formState: { errors } } = useForm({
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
      <Paper className={styles.container} elevation={3}>
        <form onSubmit={handleSubmit(LoginUser)}>
          <div className={styles.inputBox}>
            <TextField className={styles.input} {...register("userId", { required: "아이디를 입력해주세요."})}  label="Login" variant="outlined" />
            <p className={styles.error}>{errors?.userId?.message}</p>
          </div>

          <Button className={styles.button} variant="contained" type={"submit"}>로그인</Button>

          <Link className={styles.create} href={"/create"}>회원 가입</Link>
        </form>
      </Paper>
  )
}

export default LoginPage