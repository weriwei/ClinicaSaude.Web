export const PasswordLength = Object.freeze({
  max: 16,
  min: 8,
});

export const NAME_MAX_LENGTH = 40;

export const STREET_MAX_LENGTH = 30;

export const NUMBER_MAX_LENGTH = 4;

export const COMPLEMENT_MAX_LENGTH = 30;

export const CEP_LENGTH = 8;

export const EMAIL_MAX_LENGTH = 30;

export const genders = [
  {
    id: 0,
    value: "female",
    label: "Feminino",
  },
  {
    id: 1,
    value: "male",
    label: "Masculino",
  },
  {
    id: 2,
    value: "helicopter",
    label: "Helicóptero",
  },
];

export const status = [
  {
    id: 0,
    value: "Scheduled",
    label: "Marcada",
  },
  {
    id: 1,
    value: "Finished",
    label: "Finalizada",
  },
  {
    id: 2,
    value: "Canceled",
    label: "Cancelada",
  },
];

export const dependentInitialState = {
  name: "",
  documentNumber: "",
  gender: "",
  birthday: "1999-11-25T03:00:00.000Z",
};
