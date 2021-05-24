import Joi from "joi";

export default function validate(data) {
  console.log("received: ", data);
  let cadastroSchema = Joi.object({
    nome: Joi.string().alphanum().min(3).max(50).required().messages({
      "string.base": "Nome não pode conter números",
      "string.empty": "O campo nome não pode estar vazio",
      "string.min": "Nome deve ter pelo menos {#limit} caracteres",
      "any.required": "O campo nome é obrigatório",
    }),
    idade: Joi.number().required().messages({
      "number.base": "Apenas números são permitidos como idade",
      "number.empty": "O campo idade não pode estar vazio",
      "any.required": "O campo idade é obrigatório",
    }),
    estadoCivil: Joi.string().alphanum().min(5).max(12).required().messages({
      "string.base": "Estado civil não pode conter números",
      "string.empty": "O campo estado civil não pode estar vazio",
      "string.min": "Estado civil deve ter pelo menos {#limit} caracteres",
      "any.required": "O estado civil  é obrigatório",
    }),
    cpf: Joi.string().min(11).max(11).required().messages({
      "string.base": "Cpf deve conter números e traço",
      "string.empty": "O campo cpf não pode estar vazio",
      "string.min": "Cpf deve ter {#limit} caracteres",
      "any.required": "O campo cpf é obrigatório",
    }),
    cidade: Joi.string().min(3).max(20).required().messages({
      "string.base": "Cidade não pode conter números",
      "string.empty": "O campo cidade não pode estar vazio",
      "string.min": "Cidade deve ter pelo menos {#limit} caracteres",
      "any.required": "O campo cidade é obrigatório",
    }),
    estado: Joi.string().min(4).max(20).required().messages({
      "any.required": "O campo estado é obrigatório",
    }),
  });
  const isValid = cadastroSchema.validate(data);
  console.log("is: ", isValid);
  if (isValid.error) {
    return { success: false, message: isValid.error.details[0].message };
  }
  return { success: true };
}
