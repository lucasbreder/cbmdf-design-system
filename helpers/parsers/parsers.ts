import { z } from "zod";

export const required = z.string().min(1, {message: 'Campo obrigatório'})
export const requiredSelect = z.string().min(1, {message: 'Selecione uma opção'})