import { useForm } from "react-hook-form";

import { Background } from "@/src/components/Background";
import { DefaultInput } from "@/src/components/Inputs/Default";
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
          <DefaultInput
            label="E-mail"
            name="email"
            error={errors.email?.message}
            register={register}
          />
          <DefaultInput
            label="Senha"
            type="password"
            name="password"
            error={errors.password?.message}
            register={register}
          />

          <button type="submit">acedsdar</button>
        </form>
      </section>
    </main>
  );
}
