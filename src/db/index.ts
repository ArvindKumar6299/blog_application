

// this step will create code to fetch data 

import {PrismaClient} from '@prisma/client'

export const db  = new PrismaClient() // creating a new instance of PrismaClient.

// creating a new instance of PrismaClient.
// to perform CURD operations