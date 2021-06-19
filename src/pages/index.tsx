import { useForm } from "react-hook-form";

import { Background } from "@/src/components/Background";
import { InputDefault } from "@/src/components/Inputs/Default";
import { ButtonDefault } from "@/src/components/Buttons/Default";
import { useYupValidationResolver } from "@/src/hooks/useYupValidationResolver";
import { signInValidator } from "@/src/validators/signIn";

import styles from "@/src/styles/home.module.scss";

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
        </form>
      </section>
    </main>
  );
}
