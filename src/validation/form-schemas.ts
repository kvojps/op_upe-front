import * as zod from 'zod'

export const SignInFormValidationSchema = zod.object({
    email: zod.string().email('E-mail inválido.'),
    password: zod.string().min(8, 'A senha precisa de no mínimo 8 dígitos.').max(16, 'A senha pode ter no máximo 16 dígitos'),
})
