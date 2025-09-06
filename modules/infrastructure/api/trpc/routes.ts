import { postsRouter } from '@/modules/domain/posts/router'
import { usersRouter } from 'modules/domain/users/router'
import { router } from 'modules/infrastructure/api/trpc/server'

export const appRouter = router({
    users: usersRouter,
    posts: postsRouter,
})


export type AppRouter = typeof appRouter
