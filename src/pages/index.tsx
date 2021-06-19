import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { Background } from "@/src/components/Background";
import { InputDefault } from "@/src/components/Inputs/Default";
import { ButtonDefault } from "@/src/components/Buttons/Default";
import { useYupValidationResolver } from "@/src/hooks/useYupValidationResolver";
import { signInValidator } from "@/src/validators/signIn";

import styles from "@/src/styles/homeAndSignUp.module.scss";
import animalarLogo from "@/public/images/logo.png";

interface FormData {
  email: string;
  password: string;
}

export default function Home() {
  const resolver = useYupValidationResolver<FormData>(signInValidator);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = (data) => console.log(data);

  return (
    <main className={styles.container}>
      <Background />

      <section className={styles.formContainer}>
        <Image src={animalarLogo} width={196.5} height={31.91} alt="AnimaLar" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputDefault
            label="E-mail"
            name="email"
            error={errors.email?.message}
            register={register}
          />
          <InputDefault
            label="Senha"
            type="password"
            name="password"
            error={errors.password?.message}
            register={register}
          />

          <ButtonDefault type="submit">Entrar</ButtonDefault>

          <span className={styles.signUpText}>
            Não tem uma conta?{" "}
            <Link href="/signup">
              <a>Cadastre-se</a>
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
}
