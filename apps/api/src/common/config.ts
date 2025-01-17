import { config as conf } from '@ticketo/common'

export const config = {
  ...conf,
  pagination: {
    eventPerPage: 20,
    ticketPerPage: 20,
    eventWithPurchasesPerPage: 10,
    withdrawRequestPerPage: 30,
    notificationPerPage: 50,
  },
}