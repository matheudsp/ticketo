export const exceptions = {
    AUTH: {
        WRONG_PASSWORD: 'Senha incorreta.',
        EMPTY_REFRESH_TOKEN: 'O refresh token não pode estar vazio.',
        INVALID_TOKEN: 'Token inválido ou expirado.',
        OTP_CODE_EXPIRED: 'O código OTP expirou.',
        WRONG_OTP_CODE: 'Código OTP incorreto.',
        ACTIVATED: 'Conta ativada.', 
        UNACTIVATED: 'Conta não foi ativada.',
    },
    USER: {
        NOT_FOUND: 'Usuário não encontrado.',
        DELETED: 'O usuário foi excluído.',
        EMAIL_ALREADY_REGISTERED: (email: string) => `O email ${email} já está cadastrado.`,
        USERNAME_ALREADY_REGISTERED: (username: string) => `O nome de usuário ${username} já está cadastrado.`,
        WRONG_OLD_PASSWORD: 'A senha antiga não corresponde.',
    },
    EVENT: {
        NOT_FOUND: 'Evento não encontrado.',
    },
    TICKET: {
        NOT_FOUND: 'Ingresso não encontrado.',
        INVALID: 'Evento inválido.',
        INSUFFICIENT_STOCK: 'Estoque de ingressos insuficiente.',
        SALES_NOT_YET_OPEN: 'As vendas de ingressos ainda não foram abertas.',
        SALES_CLOSED: 'As vendas de ingressos foram encerradas.',
        DELETE_PUBLISHED_TICKET: 'Não é possível excluir um ingresso publicado.',
        DELETE_PURCHASED_TICKET: 'Não é possível excluir um ingresso que já foi comprado.',
    },
    PURCHASE: {
        NOT_FOUND: 'Compra não encontrada.',
        INVALID: 'Ingresso inválido.',
        TICKET_USED: 'O ingresso já foi utilizado.',
    },
    VALIDATION: {
        CONTAINS_INVALID_JSON: (e: string) => `${e} contém JSON inválido.`,
        CONTAINS_INVALID_DATETIME: (e: string) => `${e} contém uma data/hora inválida.`,
    },
    FILE: {
        NOT_FOUND: 'Arquivo não encontrado.',
        UPLOAD_FAILED: 'Falha ao enviar o arquivo.',
    },
    MAIL: {
        SENDING_FAILED: 'Falha ao enviar o email.',
    },
};