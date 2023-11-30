import {createTRPCReact} from "@trpc/react-query"
import { appRouter } from "."

export const trpc = createTRPCReact<appRouter>({})