export const getModalSuccessButtons = (funcPrimary, funcSecundary) => {
  const buttons = [
    {
      onClick: () => funcSecundary(),
      variant: "contained",
      color: "secondary",
      text: "Voltar",
      id: 1,
    },
    {
      onClick: () => funcPrimary(),
      variant: "contained",
      color: "primary",
      text: "Visualizar",
      id: 0,
    },
  ];

  return buttons;
};

export const getModalFailureButtons = (funcPrimary) => {
  const buttons = [
    {
      onClick: () => funcPrimary(),
      variant: "contained",
      color: "primary",
      text: "Tentar Novamente",
      id: 0,
    },
  ];

  return buttons;
};

export const modalSuccessText = {
  title: "Consulta cadastrada com sucesso",
  type: "success",
};

export const modalFailureText = {
  title: "Erro ao cadastrar consulta",
  type: "error",
};
