import { CodeGPTPlus } from 'judini'

export const codegpt = new CodeGPTPlus({apiKey: process.env.JUDINI_API_KEY ?? ''})
