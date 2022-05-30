import type { Prisma, User } from "/home/yuki/Desktop/personal/graphql-app/backend/node_modules/.pnpm/@prisma+client@3.14.0/node_modules/@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: never;
        Select: Prisma.UserSelect;
        Where: Prisma.UserWhereUniqueInput;
        Fields: never;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}