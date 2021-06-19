import { useForm } from "react-hook-form";

import { useYupValidationResolver } from "@/src/hooks/useYupValidationResolver";
import { InputDefault } from "@/src/components/Inputs/Default";
import { TextArea } from "@/src/components/Inputs/TextArea";
import { ButtonDefault } from "@/src/components/Buttons/Default";
import { registerAnimalValidator } from "@/src/validators/registerAnimal";

import styles from "@/src/styles/registerAnimal.module.scss";

interface FormData {
  name: string;
  species: string;
  breed: string;
  city: string;
  state: string;
  care: string;
  period: string;
}

const RegisterAnimal = () => {
  const resolver = useYupValidationResolver<FormData>(registerAnimalValidator);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = (data) => console.log(data);

  return (
    <main className={styles.container}>
      <h1>Cadastro de novos pets</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <InputDefault
            label="Nome"
            name="name"
            error={errors.name?.message}
            register={register}
          />
          <InputDefault
            label="Espécie"
            name="species"
            error={errors.species?.message}
            register={register}
          />
          <InputDefault
            label="Raça"
            name="breed"
            error={errors.breed?.message}
            register={register}
          />

          <div className={styles.row}>
            <InputDefault
              label="Cidade"
              name="city"
              error={errors.city?.message}
              register={register}
            />
            <InputDefault
              label="Estado"
              name="state"
              error={errors.state?.message}
              register={register}
            />
          </div>
        </fieldset>
        <fieldset>
          <TextArea
            label="Cuidados"
            name="care"
            error={errors.care?.message}
            register={register}
          />
          <InputDefault
            label="Periodo de adoção"
            name="period"
            error={errors.period?.message}
            register={register}
          />

          <ButtonDefault type="submit">Criar</ButtonDefault>
        </fieldset>
      </form>
    </main>
  );
};

export default RegisterAnimal;
