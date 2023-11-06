"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const LoginPage = () => {
  const {data, isLoading} = useQuery({
    queryKey: ["pbs"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://localhost:8083/pbs/all")
        return res.data;
      } catch (err) {
        throw err;
      }
    }
  })

  console.log(!isLoading && data)
  return (
    <div>
1
    </div>
  )
}

export default LoginPage