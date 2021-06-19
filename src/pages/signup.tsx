import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { Background } from "@/src/components/Background";
import { InputDefault } from "@/src/components/Inputs/Default";
import { InputRadio } from "@/src/components/Inputs/Radio";
import { ButtonDefault } from "@/src/components/Buttons/Default";
import { useYupValidationResolver } from "@/src/hooks/useYupValidationResolver";
import { signUpValidator } from "@/src/validators/signUp";

import styles from "@/src/styles/homeAndSignUp.module.scss";
import animalarLogo from "@/public/images/logo.png";

interface FormData {
  email: string;
  password: string;
  phone: string;
}

const TYPES = [
  {
    value: "organization",
    label: "Organização",
  },
  {
    value: "voluntary",
    label: "Voluntário",
  },
];

export default function SignUp() {
  const resolver = useYupValidationResolver<FormData>(signUpValidator);
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
          <InputDefault
            label="Telefone"
            type="tel"
            name="phone"
            error={errors.phone?.message}
            register={register}
          />
          <InputRadio name="type" register={register} options={TYPES} />

          <ButtonDefault type="submit">Criar</ButtonDefault>

          <span className={styles.signUpText}>
            Já tem uma conta?{" "}
            <Link href="/">
              <a>Entre</a>
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
}
