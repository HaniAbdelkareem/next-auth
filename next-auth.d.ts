import { UserRole } from "@prisma/client"
import NextAuth, { type DefaultSession } from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole
  isTwoFactorEnabled: boolean
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}

// import NextAuth, { type DefaultSession } from "next-auth"
// import "next-auth/jwt"

// export type ExtendedUser = DefaultSession["user"] & {
//   role: "ADMIN" | "USER"
// }

// declare module "next-auth" {
//   interface Session {
//     user: {
//       role: UserRoleType
//     } & DefaultSession["user"]
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     role: UserRole
//   }
// }
