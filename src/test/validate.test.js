import validate from "../app/utils/validate";

describe("Validation", () => {
  test("Dados corretos, validados", () => {
    expect(
      validate({
        nome: "José da Silva",
        idade: "48",
        estadoCivil: "Casado",
        cpf: "12345678901",
        cidade: "São Paulo",
        estado: "São Paulo",
      })
    ).toStrictEqual({ success: true });
  });
  test("Dados errados, cpf errado", () => {
    expect(
      validate({
        nome: "José da Silva",
        idade: "48",
        estadoCivil: "Casado",
        cpf: "1234567890",
        cidade: "São Paulo",
        estado: "São Paulo",
      })
    ).toStrictEqual({
      message: "Cpf deve ter 11 caracteres",
      success: false,
    });
  });
  test("Dados errados, sem nome", () => {
    expect(
      validate({
        nome: "",
        idade: "48",
        estadoCivil: "Casado",
        cpf: "12345678901",
        cidade: "São Paulo",
        estado: "São Paulo",
      })
    ).toStrictEqual({
      message: "O campo nome não pode estar vazio",
      success: false,
    });
  });
  test("Dados errados, idade como alfanumerico", () => {
    expect(
      validate({
        nome: "José da Silva",
        idade: "ab",
        estadoCivil: "Casado",
        cpf: "12345678901",
        cidade: "São Paulo",
        estado: "São Paulo",
      })
    ).toStrictEqual({
      success: false,
      message: "Apenas números são permitidos como idade",
    });
  });
});
