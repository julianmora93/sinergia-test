import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { HttpModule } from '@nestjs/axios';
import { CatsModule } from './infrastructure/modules/cats.module';
import { CatsResolver } from './infrastructure/resolvers/cats.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/infrastructure/resolvers/schemas/schema.app.gql'),
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()]
        }),
        HttpModule,
        CatsModule
    ],
    providers: [
        CatsResolver
    ]
})
export class AppModule {}