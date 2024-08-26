"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/auth/useLogin";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

const LoginForm = () => {
  const { mutateAsync: login } = useLogin();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        console.log("Login success");
        localStorage.setItem("token", response.token);
        router.push("/");
      } catch (error) {
        console.error("Login failed", error);
      }
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("A senha é obrigatória"),
      username: Yup.string().required("O nome de usuário é obrigatório"),
    }),
  });

  return (
    <Card className="w-full max-w-sm mx-auto mt-10">
      <CardHeader>
        <h2 className="text-lg font-bold">Login</h2>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <Input
              className={
                formik.errors.username && formik.touched.username
                  ? "border-red-500"
                  : ""
              }
              id="username"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Digite seu nome de usuário"
              type="text"
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username && (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            )}
          </div>
          <div>
            <Input
              className={
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : ""
              }
              id="password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Digite sua senha"
              type="password"
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export { LoginForm };
